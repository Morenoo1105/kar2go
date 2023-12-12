"use client";

import React, { useState } from "react";
import { SearchManufacturer } from ".";
import { PiMagnifyingGlassDuotone, PiCarProfileDuotone } from "react-icons/pi";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button
    type="submit"
    className={`-ml-6 z-10 bg-gray-50 rounded-xl p-3 ${otherClasses}`}
  >
    <PiMagnifyingGlassDuotone
      alt="lupa"
      className="w-6 h-6 text-primary-blue object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");

  const [model, setModel] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer == "" || model == "") {
      return alert("Por favor, rellene todos los campos");
    }
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const params = new URLSearchParams(window.location.search);

    if (model) {
      params.set("model", model);
    } else {
      params.delete("model");
    }

    if (manufacturer) {
      params.set("manufacturer", manufacturer);
    } else {
      params.delete("manufacturer");
    }

    const newPathName = `${window.location.pathname}?${params.toString()}`;

    router.push(newPathName);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <PiCarProfileDuotone
          className="w-5 h-5 ml-4 text-primary-blue absolute"
          alt="modelo de coche"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
