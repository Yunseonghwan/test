import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { bannerData, zoneData, itemData } from "../../demo_data";

const Container = styled.div`
  width: 100%;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  border: 2px solid #ddd;
  width: 700px;
`;

const SelectBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 150px;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
`;

export default ({
  height,
  aniHeight,
  toggle,
  toggleClick,
  toggleClick2,
  keyword,
  name,
  search,
  onChange,
  result,
}) => {
  return (
    <Container>
      <MenuContainer>
        <Menu style={{ height: height }} onClick={aniHeight}>
          <div style={Object.assign({}, { height })}>
            {bannerData.map((item) => {
              return (
                <div key={item.id} style={styles.selection}>
                  <span>
                    [{item.zoneLabel}] {item.permalink} {item.label}{" "}
                    {item.price}
                    {`<${item.comment}>`}
                  </span>
                </div>
              );
            })}
          </div>
        </Menu>
      </MenuContainer>
      <div>
        <SelectBoxContainer>
          <div style={{ paddingRight: "30px" }}>
            {toggle ? (
              <div>
                <div onClick={toggleClick2}>
                  <span>모든지역</span>
                </div>
                {zoneData.map((item) => (
                  <div
                    onClick={toggleClick2}
                    name={item.label}
                    style={{ paddingRight: "30px" }}
                  >
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div onClick={toggleClick}>
                <span>{name === "" ? "모든지역" : name}</span>
              </div>
            )}
          </div>
          {toggle ? (
            <div style={{ width: "300px", height: "50px" }}>
              <div onClick={toggleClick2}>
                <span>선택</span>
              </div>
              {itemData.map((item) => (
                <div onClick={toggleClick2} name={item.label}>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          ) : (
            <div onClick={toggleClick}>
              <span>{name === "" ? "선택" : name}</span>
            </div>
          )}
        </SelectBoxContainer>
      </div>
      <div style={{ marginTop: "30px" }}>
        <InputContainer>
          <form onSubmit={search}>
            <Input
              type="text"
              placeholder="검색어를 입력하세요"
              value={keyword}
              onChange={onChange}
            />
            <button style={{ width: "100px" }} type="submit">
              검색
            </button>
          </form>
        </InputContainer>
        <div>
          {result.map((item) => (
            <div
              onChange={() => onChange(item.description)}
              style={{ marginBottom: "50px" }}
            >
              <Link
                to={{
                  pathname: `/detail/${item.label}`,
                  state: {
                    label: item.label,
                    marke: item.market,
                  },
                }}
              >
                <div>
                  <span>{item.label}</span>
                  <span>{item.market}</span>
                </div>
                <div>
                  <span>{item.description}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

const styles = {
  selection: {
    padding: 10,
    margin: 0,
  },
};
