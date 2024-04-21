
import altimg from "../../assets/altschoollogo.svg"


const Header=()=>{
    return(
        <div className="w-[100%] flex justify-center items-center">
           <div className="w-[95%] flex justify-between items-center h-[50px]">
             <div>
                <img src={altimg} alt="" className="w-[60px]" />
             </div>
            <div>ALT/SOE/023/3285</div>
           </div>
        </div>
    )
}
export default Header;