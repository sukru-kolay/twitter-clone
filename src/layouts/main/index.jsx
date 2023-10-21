import { Outlet } from "react-router-dom"
import { Sidebar } from "./sidebar"
import RightBar from "./rightbar"

export const MainLayout = ()=>{
    return(
        <div className="w-[1265px] mx-auto flex">
            <Sidebar/>
            {/* <main className="flex-1 flex gap[30px] bg-red-400"> */}
                <main className="flex-1 max-w[600px] border-x border-[#2f3336] bg-green-500" >
                    <Outlet/> {/* routes da MainLayout childrenları kullanmak için*/}
                </main>
                <RightBar/>
            {/* </main> */}
        </div>
    )
}