import "./Timer.css";

export default function Timer() {
    return (
        <div className="timer-container">
            <div>
                <p>day</p>
                <span>{"43"}</span>
            </div>
            <div>
                <p>hour</p>
                <span>{"02"}</span>
            </div>
            <div>
                <p>minute</p>
                <span>{"23"}</span>
            </div>
        </div>
    );
}
