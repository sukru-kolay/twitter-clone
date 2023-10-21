import { Outlet } from "react-router-dom"

export const MainLayout = ()=>{
    return(
        <div>
            main layout <br />
            <Outlet/> {/* routes da MainLayout childrenları kullanmak için*/}
        </div>
    )
}