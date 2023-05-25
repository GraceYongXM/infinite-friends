import React from 'react'

import Header from "@component/components/Header";
import Sidebar from "@component/components/Sidebar";

const layout = ({ children }) => {
  return (
    <div>
        <Sidebar page="friends" />
        <Header page="Friends" />
        {children}
    </div>
  )
}

export default layout;