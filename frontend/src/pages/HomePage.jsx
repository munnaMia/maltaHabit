import Motivation from "../components/common/Motivation";
import Header from "../components/layout/header/Header";
import HomeDashboard from "../components/layout/home_dashboard/HomeDashboard";
import "./HomePage.css";

export default function HomePage() {
    return (
        <div className="page">
            <Header />

            <Motivation />

            <HomeDashboard />

            <h1>This gonna be the home page</h1>
        </div>
    );
}
