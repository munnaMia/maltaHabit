import { ShoppingCart, Heart, User } from "lucide-react";
import './UserAction.css'

export default function UserAction() {
    return (
        <div className="headerUserActions centerDiv">
            <div className="shopContainer">
                <a href="#">
                    <Heart absoluteStrokeWidth={true} strokeWidth={1} className="shopIcons" />
                </a>
                <a href="#">
                    <ShoppingCart absoluteStrokeWidth={true} strokeWidth={1} className="shopIcons" />
                </a>
            </div>
            <div className="userContainer centerDiv">
                {/* user profile dash board link */}
                <a href="#">
                    <User absoluteStrokeWidth={true} strokeWidth={1} className="profileIcon" />
                </a>
            </div>
        </div>
    );
}
