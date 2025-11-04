import HeaderLogo from "./components/HeaderLogo";
import SearchBar from "./components/SearchBar";
import UserAction from "./components/UserAction";
import "./HeaderTop.css";

export default function HeaderTop() {
    return (
        <div className="headerUpperContainer">
            <div className="headerContainer upperHeaderElements">
                <div className="logoAndHeaderContainer">
                    <HeaderLogo />
                    <SearchBar />
                </div>

                <UserAction />
            </div>
        </div>
    );
}
