import { Search, ShoppingCart, Heart, User } from "lucide-react";
import HeaderLogo from "../assets/logos/header_logo.png";
import "./HeaderTop.css";

export default function HeaderTop() {
    return (
        <div className="headerUpperContainer">
            <div className="headerContainer upperHeaderElements">
                {/* logo and header search bar container */}
                {/* header logo here  */}
                <div className="headerLogoContainer">
                    <a href="/">
                        <img src={HeaderLogo} className="headerLogo" alt="header logo" />
                    </a>
                </div>

                {/* search bar here  */}
                <div className="searchContainer">
                    <form action="/search" method="get" className="searchBarFrom">
                        <input type="text" id="search" className="searchInput" aria-label="search" autoComplete="off" placeholder="Search products here..." required />
                        <button type="submit" className="searchButton">
                            <Search className="searchButtonIcon"/>
                        </button>
                    </form>
                </div>

                {/* carts, profile & other icons here */}
                <div className="headerUserActions">
                    <div className="shopContainer">
                        <Heart className="shopIcons" />
                        <ShoppingCart className="shopIcons" />
                    </div>
                    <div className="userContainer">
                        {/* user profile dash board link */}
                        <a href="#">
                            <User className="profileIcon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
