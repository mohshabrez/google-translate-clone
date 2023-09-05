import { NavLink } from "react-bootstrap"
import {Outlet} from "react-router-dom"
import "./NavBar.css"
import menu from "../../assets/menu.png"
import Google from "../../assets/Google-Translate-Logo.png"
import man from "../../assets/man.png"
import dotsmenu from "../../assets/dots-menu.png"
import settings from "../../assets/settings.png"


export function NavBar(){
    return(
        <div className="navBar">
        <header>
            <nav className="nav">
                <NavLink to="">
                    <img src={menu} className="menuImg" />
                </NavLink>
          
                <NavLink to="">
                    <img src={Google} className="logoImg" />
                </NavLink>
                <div className="section">
                    <NavLink to="">
                        <img src={man} className="" />
                    </NavLink>
                    <NavLink to="">
                        <img src={dotsmenu} className="" />
                    </NavLink>
                    <NavLink to="">
                        <img src={settings} className="" />
                    </NavLink>
                </div>
            </nav>
      </header>
      <main>
        <br/>
        <hr/>
        <Outlet />
      </main>
        </div>
    )
}