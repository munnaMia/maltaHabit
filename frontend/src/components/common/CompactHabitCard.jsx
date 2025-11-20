import HabitCardTop from "./HabitCardTop";
import Timer from "./Timer";
import "./CompactHabitCard.css";

// this is the compact version of our main habit card 
export default function CompactHabitCard() {
    return (
        <div className="compact-habit-card centerDiv">
            <HabitCardTop />
            <Timer />
        </div>
    );
}
