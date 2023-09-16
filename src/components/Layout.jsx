import { Outlet } from "react-router-dom"

import TopBar from './Navigation/TopBar'
import SideBar from "./Navigation/SideBar"

const Layout = () => {
    return (
        <>
            <SideBar />
            <main className='content'>
                <TopBar />
                <Outlet />
            </main>
        </>
    )
}

export default Layout
