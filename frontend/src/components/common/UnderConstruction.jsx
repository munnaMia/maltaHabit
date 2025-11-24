import underConstruction from "../../assets/images/under_construction.png";
import "./UnderConstruction.css";

export default function UnderConstruction() {
    return (
        <div className="under-construction-image-container centerDiv">
            <img src={underConstruction} alt="under construction image" className="under-construction-image" />
        </div>
    );
}
