import { ChevronRight } from "lucide-react";
import CompactHabitCard from "../../common/CompactHabitCard";
import CreateNew from "../../common/CreateNew";

import "./HomeDashboard.css";

export default function HomeDashboard() {
    return (
        <div className="home-dashboard">
            <div className="home-dash-header alingCenterDiv">
                <h2>Latest Habits</h2>
                <a href="#" className="alingCenterDiv">
                    go to dashboard
                    <ChevronRight strokeWidth={1} />
                </a>
            </div>

            <div className="home-dash-container">
                <CompactHabitCard />
                <CompactHabitCard />
                <CompactHabitCard />
                <CompactHabitCard />
                <CreateNew />
            </div>
        </div>
    );
}
