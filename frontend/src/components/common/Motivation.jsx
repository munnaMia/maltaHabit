import { TrendingUp } from "lucide-react";
import "./Motivation.css";

const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour <= 12) {
        return "Good Morning";
    } else if (hour <= 17) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
};

export default function Motivation() {
    return (
        <div className="motivation-container alingCenterDiv">
            <div className="greet-container">
                <div className="greeting">
                    {getGreeting()},<span className="user-name">{" maltamen"}</span>
                </div>

                <div className="motivaitonal-quote">
                    {'"Indeed, Allah will not change the condition of a people until they change what is in themselves."'}
                    <br />
                    <span className="from">- {"Quran 13:11, Muslim"}</span>
                </div>
            </div>

            <div className="streak-container alingCenterDiv" onClick={()=>{console.log("click")}}>
                <TrendingUp size={28} className="trending-up" />
                <div className="streak-info">
                    <p>Longest streak</p>
                    <span className="Days">{12} Days</span>
                </div>
            </div>
        </div>
    );
}
