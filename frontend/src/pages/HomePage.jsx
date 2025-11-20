import Motivation from "../components/layout/motivation/Motivation";
import { Footer } from "../components/layout/footer/Footer";
import Header from "../components/layout/header/Header";
import HomeDashboard from "../components/layout/home_dashboard/HomeDashboard";
import "./HomePage.css";

export default function HomePage() {
    return (
        <div className="page">
            <Header />

            <Motivation />

            <HomeDashboard />

            <Footer />
        </div>
    );
}
