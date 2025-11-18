import { ChartNoAxesColumn, Ellipsis } from "lucide-react";
import "./HabitCardTop.css";

export default function HabitCardTop() {
    return (
        <div className="habit-card-top-container alingCenterDiv">
            <p className="habit-card-title">{"quit my bad addiction and try my best "}</p>

            <div className="habit-card-buttons-container alingCenterDiv">
                <button className="habit-card-buttons stat" title="View Statistics">
                    <ChartNoAxesColumn size={18} className="habit-card-icon"/>
                </button>
                <button className="habit-card-buttons habit-card-menu-icon" title="More Options">
                    <Ellipsis size={18} className="habit-card-icon"/>
                </button>
            </div>
        </div>
    );
}
