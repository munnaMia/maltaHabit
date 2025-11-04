import Logo from "../../../../assets/logos/header_logo.png"
import "./HeaderLogo.css";

export default function HeaderLogo() {
    return (
        <div className="headerLogoContainer">
            <a href="/">
                <img src={Logo} className="headerLogo" alt="header logo" />
            </a>
        </div>
    );
}
