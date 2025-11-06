import HeaderLogo from "./components/HeaderLogo";
import SearchBar from "./components/SearchBar";
import UserAction from "./components/UserAction";
import "./HeaderTop.css";

export default function HeaderTop() {
    return (
        <div className="headerUpperContainer">
            <div className="headerContainer upperHeaderElements alingCenterDiv">
                <div className="centerDiv logoAndHeaderContainer">
                    <HeaderLogo />
                    <SearchBar />
                </div>

                <UserAction />
            </div>
        </div>
    );
}
