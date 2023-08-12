import { HouseTypeDto } from "@services/fuel-cost/dto/inti-data.output.dto";
import { useEffect, useRef, useState } from "react";

interface HouseTypeDropDownProps {
  selectedHouseType: string;
  houseTypeList: Array<HouseTypeDto>;
  onSelectedHouse(id: number): void;
}

const HouseTypeDropDown = ({
  selectedHouseType,
  houseTypeList,
  onSelectedHouse,
}: HouseTypeDropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropDown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="text-white font-bold">
      {selectedHouseType} <br />
      <div className="house-type-dropdown" ref={dropdownRef}>
        <span
          className="text-[12px] font-normal text-[#fff] cursor-pointer underline underline-offset-4"
          onClick={toggleDropDown}
        >
          Click to Change
        </span>
        <ul
          className={`dropdown-menu app-dropdown ${isOpen ? "open" : "hidden"}`}
        >
          {houseTypeList.map((x) => (
            <li key={x.id}>
              <span
                className="dropdown-item"
                onClick={() => {
                  toggleDropDown();
                  onSelectedHouse(x.id);
                }}
              >
                {x.houseTypeName}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HouseTypeDropDown;
