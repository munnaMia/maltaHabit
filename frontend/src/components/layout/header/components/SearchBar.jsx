import { Search } from "lucide-react";
import "./SearchBar.css";
export default function SearchBar() {
    return (
        <div className="searchContainer">
            <form action="/search" method="get" className="searchBarFrom">
                <input type="text" id="search" className="searchInput" aria-label="search" autoComplete="off" placeholder="Hey malta here..." required />
                <button type="submit" className="searchButton centerDiv">
                    <Search className="searchButtonIcon" />
                </button>
            </form>
        </div>
    );
}
