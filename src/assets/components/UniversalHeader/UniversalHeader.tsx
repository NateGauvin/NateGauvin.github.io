import "./UniversalHeader.css"
import type {JSX} from "react"

function UniversalHeader():JSX.Element {
    return(
        <header className={"site-header"}>
            <div className={"header-container"}>
                <div className={"header-logo"}>
                    <a href={"/"} className={"logo"}>NateGauvin</a>
                </div>
                <nav className="navbar">
                    <ul>
                        <li>
                            <a href={"/projects"}>Projects</a>
                        </li>
                        <li>
                            <a href={"/about-me"}>About Me</a>
                        </li>
                        <li>
                            <a href={"/contact-me"}>Contact Me</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default UniversalHeader