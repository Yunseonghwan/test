import React, { useState, useEffect } from "react";
import { bannerData, zoneData, storeData, itemData } from "../../demo_data";
import SearchPresenter from "./SearchPresenter";

export default () => {
  const [height, setHeight] = useState(38);
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("");
  const [result, setResults] = useState(storeData);
  //   const [search, setSearch] = useState(false);
  const [keyword, setKeyword] = useState("");
  const aniHeight = () => {
    setHeight(height === 85 ? 38 : 85);
  };

  const toggleClick = () => {
    setToggle(true);
  };

  const toggleClick2 = (e) => {
    setToggle(false);
    setName(e.target.name);
    console.log(e.target.name);
  };

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const search = async (e) => {
    e.preventDefault();
    if (keyword === "") {
      setResults(storeData);
      return;
    } else if (keyword !== "") {
      setResults([...storeData.filter((e) => e.label === keyword)]);
    }
  };

  return (
    <SearchPresenter
      height={height}
      toggle={toggle}
      name={name}
      result={result}
      keyword={keyword}
      aniHeight={aniHeight}
      toggleClick={toggleClick}
      toggleClick2={toggleClick2}
      onChange={onChange}
      search={search}
    />
  );
};
