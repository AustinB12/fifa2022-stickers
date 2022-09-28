import { useState } from "react";
import { Country } from "./Country";

const CountryList = ({ data }) => {
  const [values, setValues] = useState(data);

  console.log(values);

  return (
    <div className="countryList">
      {values.map((country) => {
        return (
          <div className="countryContainer" key={country.name}>
            <h2>{country.name}</h2>
            <Country data={country.stickers} name={country.name}></Country>
          </div>
        );
      })}
    </div>
  );
};

export { CountryList };
