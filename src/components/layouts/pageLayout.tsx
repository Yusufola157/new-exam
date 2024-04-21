import { Outlet } from "react-router-dom";
import Header from "../blocks/Header";

const mainLayout = ()=>{
    return(
        <div className="flex w-[100%] flex-col">
            <Header/>
            <Outlet/>
        </div>
    )
}
export default mainLayout;