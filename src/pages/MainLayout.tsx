import React from 'react'
import { Outlet } from "react-router-dom"

interface IMainLayoutProps { }
const MainLayout: React.FC<IMainLayoutProps> = () => {
  return (
    <div className='mt-8'>

      <Outlet />
    </div>
  )
}

export default MainLayout