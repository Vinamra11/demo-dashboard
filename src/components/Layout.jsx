import { Outlet } from "react-router-dom"

import TopBar from './Navigation/TopBar'
import Sidebar from "./Navigation/SideBar"

const Layout = () => {
    return (
        <>
            <TopBar />
            <Sidebar />
            <Outlet />
        </>
    )
}

export default Layout
