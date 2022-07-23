import React, { useEffect, useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";
import styled from "styled-components";

const FormSelect = ({
  selectValue,
  defaultSelectText,
  optionList,
  onChange,
}) => {
  const currentValue = optionList?.find(
    (option) => option.value === selectValue
  )?.text;
  const [selectState, setSelectState] = useState({
    selectText: defaultSelectText || "",
    showOptionList: false,
    optionList: optionList || [],
  });

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.classList.contains("custom-select-option") &&
        !e.target.classList.contains("selected-text")
      ) {
        setSelectState((prevState) => ({
          ...prevState,
          showOptionList: false,
        }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container show={selectState.showOptionList}>
      <div className="custom-select-container">
        <div
          className={
            selectState.showOptionList
              ? "selected-text active"
              : "selected-text"
          }
          onClick={() => {
            setSelectState({
              ...selectState,
              showOptionList: !selectState.showOptionList,
            });
          }}
        >
          {currentValue || selectState.selectText}

          <span className="angle-down">
            <VscTriangleDown />
          </span>
        </div>

        {selectState.showOptionList && (
          <div className="select-options-con">
            <ul className="select-options">
              {selectState.optionList.map((option, index) => {
                return (
                  <li
                    className="custom-select-option"
                    data-value={option.value}
                    key={index}
                    onClick={(e) => {
                      setSelectState({
                        ...selectState,
                        selectText: e.target.textContent,
                        showOptionList: false,
                      });
                      onChange && onChange(e.target.getAttribute("data-value"));
                    }}
                  >
                    {option.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </Container>
  );
};
const Container = styled.div`
  .custom-select-container {
    cursor: pointer;
    text-align: center;
    position: relative;
    z-index: 2;
    border-radius: ${({ show }) => (show ? "7px 7px 0 0" : "7px")};
    box-shadow: 0px 0px 2px 1px rgba(81, 80, 90, 0.4);
  }

  .selected-text {
    position: relative;
    background-color: #ffffff;
    padding: 8px 20px;
    border-radius: inherit;
    border-bottom: ${({ show }) =>
      show ? "1px solid #e5e5e5" : "1px solid transparent"};

    .angle-down {
      position: absolute;
      right: 10px;
      top: 0.1rem;
      bottom: 0.1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .select-options-con {
    position: absolute;
    margin: 0;
    padding: 0;
    text-align: center;
    width: 100%;
    border-radius: ${({ show }) => (show ? "0 0 7px 7px" : "0")};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

    .select-options {
      max-height: 210px;
      overflow-y: auto;
      margin: 0;
      padding: 0;
    }
  }

  li {
    list-style-type: none;
    padding: 6px 20px;
    background-color: #ffffff;
    border-bottom: 1px solid #e6e6e6;
    cursor: pointer;

    &:hover {
      background-color: rgb(227, 222, 222);
    }
  }

  * {
    box-sizing: border-box;
  }
`;

export default FormSelect;
