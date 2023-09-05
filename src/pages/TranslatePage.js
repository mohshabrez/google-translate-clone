import { Main } from "../components/Main/Main";
import { NavBar } from "../components/NavBar/NavBar";
import history from "../assets/history.png";
import contribute from "../assets/contribute.png";
import saved from "../assets/saved.png"
import "./TranslatePage.css"

export function TranslatePage(){
    return(
        <>
        <NavBar/>
        <Main/>
        <div className="footer">
            <img src={history} alt="historYimg"/>
            <img src={saved} alt="savedimg"/>
            <img src={contribute} alt="contributeimg"/>
            
        </div>
        </>
    )
}