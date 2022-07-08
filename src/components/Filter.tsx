import React, { ChangeEvent } from 'react'
import styled from "styled-components"

type InputEvent = ChangeEvent<HTMLInputElement>

interface SearchProps {
    setSearchTerm: (value: any) => void;
  }

const Filter: React.FC<SearchProps> = ({ setSearchTerm }) => {

  return (
    <>
        <FilterContainer>
            <input 
            type="text"
            placeholder='Search products...'
            onChange={(e: InputEvent) => setSearchTerm(e.target.value.toLowerCase())}
            style={{ width: "300px"}}
            />
        </FilterContainer>
    </>
  )
}

export default Filter

const FilterContainer = styled.div`{
    height: 100px;
    width: 300px;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    padding-top: 3vh;
    left: 50%;
    transform: translateX(-50%)
}`