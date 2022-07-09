import React from 'react'
import styled from 'styled-components';

import Navbar from './Navbar'

type LayoutProps = {
    children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {

  
  return (
    <div>
        <Navbar />
        <Main>
            {children}
        </Main>
    </div>
  )
}

export default Layout

const Main = styled.main`{
  width: 95%;
  margin: 0 auto;
}`