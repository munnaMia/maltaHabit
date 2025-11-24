import HeaderBar from "./HeaderBar";
import Navigation from "./Navigation";
import './Header.css'

export default function Header() {
    return (
        <header className="headerSection">
            <HeaderBar />
            <Navigation />
        </header>
    );
}
