import { Search, ShoppingCart, Heart, User } from "lucide-react";
import HeaderLogo from "../assets/logos/header_logo.png";

export default function HeaderTop() {
    return (
        <div className="headerUpperContainer">
            <div className="headerUpper">
                {/* header logo here  */}
                <div className="headerLogo">
                    <a href="/">
                        <img src={HeaderLogo} alt="header logo" />
                    </a>
                </div>

                {/* search bar here  */}
                <div className="searchContainer">
                    <form action="/search" method="get" className="searchBarFrom">
                        <input type="text" id="search" aria-label="search" autoComplete="off" placeholder="Search products here..." required />
                        <button type="submit">
                            <Search />
                        </button>
                    </form>
                </div>

                {/* carts, profile & other icons here  */}
                <div className="headerEnd">
                    <div className="userContainer">
                        <div className="userIcon">
                            <User />
                        </div>
                    </div>
                    <div className="shopContainer">
                        <div className="loveProductIcon">
                            <Heart />
                        </div>
                        <div className="cartProductIcon">
                            <ShoppingCart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
