import "./Timer.css";

export default function Timer() {
    return (
        <div className="timer-container">
            <div className="centerDiv ">
                <p>year</p>
                <span className="timer-fonts">{"00"}</span>
            </div>
            <div className="centerDiv">
                <p>day</p>
                <span className="timer-fonts">{"43"}</span>
            </div>
            <div className="centerDiv">
                <p>hour</p>
                <span className="timer-fonts">{"02"}</span>
            </div>
            <div className="centerDiv">
                <p>minute</p>
                <span className="timer-fonts">{"23"}</span>
            </div>
        </div>
    );
}
