import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import './Header.css'
export default function Header() {
    return (
        <header className="headerSection">
            <HeaderTop />
            <HeaderBottom />
        </header>
    );
}
