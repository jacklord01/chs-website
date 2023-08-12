import { DropDownDto } from "@services/common.dto";
import utilService from "@services/utility/util.service";
import { useFormikContext } from "formik";
import { useEffect, useState } from "react";

interface CountryOptionsProps {
    fieldName: string
}

const CountryOptions: React.FC<CountryOptionsProps> = ({
    fieldName
}: CountryOptionsProps) => {

    const [countries, setCountries] = useState<Array<DropDownDto>>([]);
    const { setFieldValue } = useFormikContext();

    useEffect(() => {
        const fetchCountries = async () => {
            const output = await utilService.getCountries();
            if (output.length) {
                setCountries(output);
                const ireland = output.find(x => x.isDefault);
                if (ireland) {
                    setFieldValue(fieldName, ireland.id)
                }
            }
        }
        fetchCountries();
    }, [fieldName, setFieldValue]);

    return <>
        {
            countries.map((country, i) =>
                <option key={i} value={country.id}>
                    {country.name}
                </option>)
        }
    </>
}

export default CountryOptions;