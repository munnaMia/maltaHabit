import "./Navigation.css";

export default function Navigation() {
    return (
        <div className="headerLowerContainer">
            <div className="headerContainer">
                {/* all navigation element goes into the nav tag */}
                <nav className="navContainer">
                    <ul className="navItemsContainer justifyCenterDiv">
                        <li className="navItems">
                            <a className="navLinks" href="/">
                                home
                            </a>
                        </li>
                        <li className="navItems">
                            <a className="navLinks" href="/shop">
                                shop
                            </a>
                        </li>
                        <li className="navItems">
                            <a className="navLinks" href="/dashboard">
                                dashboard
                            </a>
                        </li>
                        <li className="navItems">
                            <a className="navLinks" href="/leaderboard">
                                leaderboard
                            </a>
                        </li>
                        <li className="navItems">
                            <a className="navLinks" href="/foryou">
                                for you
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
