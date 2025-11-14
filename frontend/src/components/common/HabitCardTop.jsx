import { ChartNoAxesColumn, Ellipsis } from "lucide-react";
import "./HabitCardTop.css";

export default function HabitCardTop() {
    return (
        <div>
            <p className="habit-card-title">{"title here"}</p>
            <div>
                <button>
                    <ChartNoAxesColumn />
                </button>
                <button>
                    <Ellipsis />
                </button>
            </div>
        </div>
    );
}
