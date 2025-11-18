import HabitCardTop from "./HabitCardTop";
import Timer from "./Timer";
import "./CompactHabitCard.css";

export default function ShortHabitCard() {
    return (
        <div className="compact-habit-card centerDiv">
            <HabitCardTop />
            <Timer />
        </div>
    );
}
