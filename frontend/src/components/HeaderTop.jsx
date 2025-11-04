import { Search, ShoppingCart, Heart, User } from "lucide-react";
import HeaderLogo from "../assets/logos/header_logo.png";
import "./HeaderTop.css";

export default function HeaderTop() {
    return (
        <div className="headerUpperContainer">
            <div className="headerContainer upperHeaderElements">
                {/* logo and header search bar container */}
                {/* header logo here  */}
                <div className="logoAndHeaderContainer">
                    <div className="headerLogoContainer">
                        <a href="/">
                            <img src={HeaderLogo} className="headerLogo" alt="header logo" />
                        </a>
                    </div>

                    {/* search bar here  */}
                    <div className="searchContainer">
                        <form action="/search" method="get" className="searchBarFrom">
                            <input type="text" id="search" className="searchInput" aria-label="search" autoComplete="off" placeholder="Hey malta here..." required />
                            <button type="submit" className="searchButton">
                                <Search className="searchButtonIcon" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* carts, profile & other icons here */}
                <div className="headerUserActions">
                    <div className="shopContainer">
                        <a href="#">
                            <Heart absoluteStrokeWidth={true} strokeWidth={1} className="shopIcons" />
                        </a>
                        <a href="#">
                            <ShoppingCart absoluteStrokeWidth={true} strokeWidth={1} className="shopIcons" />
                        </a>
                    </div>
                    <div className="userContainer">
                        {/* user profile dash board link */}
                        <a href="#">
                            <User absoluteStrokeWidth={true} strokeWidth={1} className="profileIcon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
