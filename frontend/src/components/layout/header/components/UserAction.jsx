import { ShoppingCart, Heart, User } from "lucide-react";
import "./UserAction.css";

export default function UserAction() {
    return (
        <div className="headerUserActions centerDiv">
            <div className="userActionIcon centerDiv">
                <a href="#">
                    <Heart absoluteStrokeWidth={true} strokeWidth={1} size={24} className="icon" />
                </a>
            </div>

            <div className="userActionIcon centerDiv">
                <a href="#">
                    <ShoppingCart absoluteStrokeWidth={true} strokeWidth={1} size={24} className="icon" />
                </a>
            </div>

            <div className="userActionIcon centerDiv">
                <a href="#">
                    <User absoluteStrokeWidth={true} strokeWidth={1} size={24} className="icon" />
                </a>
            </div>
        </div>
    );
}
