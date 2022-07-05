import React from 'react'
import styled from "styled-components"

const Filter = () => {
  return (
    <>
        <FilterContainer>
            <input 
            type="text"
            placeholder='Search products...'
            // onChange=""
            style={{ width: "300px"}}
            />
        </FilterContainer>
    </>
  )
}

export default Filter

const FilterContainer = styled.div`{
    height: 2em;
    display: flex;
    justify-content: center;
    z-index: 4;
}`