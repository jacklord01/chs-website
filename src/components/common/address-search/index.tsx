import AppConst from "@config/app.const";
import React, { useCallback, useEffect, useState } from "react";
import {
  AddressBuild,
  AddressIdentification,
  AddressSuggestion,
} from "./address-types";
import utilService from "@services/utility/util.service";

interface AddressSearchProps {
  label?: string;
  onItemSelect(address: { county: string; eirCode: string }): void;
}

const AddressSearch: React.FC<AddressSearchProps> = ({
  label,
  onItemSelect,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [addressResult, setAddressResult] = useState<Array<AddressBuild>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const onSearchAddress = (e: React.FormEvent<HTMLInputElement>) => {
    const sText = e.currentTarget.value;
    setSearchTerm(sText);
  };

  const onSearchSelect = (id: string) => {
    utilService.indentifyAddress(id).then((output) => {
      if (output.results) {
        setSearchTerm("");
        onItemSelect(utilService.buildAddress(output.results));
      }
    });
  };

  const getSearchResult = useCallback((searchText: string) => {
    setLoading(true);
    utilService
      .sendReq(searchText)
      .then((output) => {
        setLoading(false);
        if (output?.results?.length) {
          const results = output.results.map((addr: AddressSuggestion) => {
            return utilService.buildAddress(addr);
          });
          setAddressResult(results);
        }
      })
      .catch(() => {
        setLoading(false);
        setError(new Error("Failed to fetch result."));
      });
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      !searchTerm.length && setAddressResult([]);
      searchTerm?.length > 2 && getSearchResult(searchTerm);
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, getSearchResult]);

  return (
    <>
      <div className="with-icon search-dropdown">
        <input
          type="text"
          className="form-control"
          placeholder="Search By Eircode, Address line"
          value={searchTerm}
          name="searchText"
          onChange={onSearchAddress}
        />
        <span className="icon">
          <svg width="12" height="13" viewBox="0 0 12 13" fill="currentColor">
            <use href="/images/sprite.svg#svg-search"></use>
          </svg>
        </span>
        <ul className="dropdown-menu app-dropdown">
          {loading && (
            <li>
              <span className="dropdown-item disabled">Loading...</span>
            </li>
          )}
          {error && (
            <li>
              <span className="dropdown-item disabled">{error.message}</span>
            </li>
          )}
          {addressResult.map((item) => (
            <li key={item.id} onClick={() => onSearchSelect(item.id)}>
              <span className="dropdown-item">{item.fullAddress}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AddressSearch;
