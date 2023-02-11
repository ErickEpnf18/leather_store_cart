import React from 'react'
import Employees from './admin/Employees'
import Clients from './admin/Clients'
import Products from './admin/Products'
import Billings from './employee/Billings'

const Layout = ({children, item}) => {
  return (
        <div>
        {item === 0 && <Products/>}
        {item === 1 && <Clients/>}
        {item === 2 && <Employees/>}
        {item === 3 && <Billings/>}
        {children}
        </div>
  )
}

export default Layout