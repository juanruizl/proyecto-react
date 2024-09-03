import React, { useState } from "react";

const Home = () => {
    const [color, setColor] = useState(null);
    const [showPurple, setShowPurple] = useState(false);

    const toggleColor = () => {
        if (color === "red") {
            setColor("yellow");
        } else if (color === "yellow") {
            setColor("green");
        } else {
            setColor("red");
        }
    };

    const addPurple = () => {
        setShowPurple(true);
        setColor("purple");
    };

    return (
        <div className="container d-flex flex-column align-items-center">
            <div className="hook"></div>
            <div className="cord"></div>
            <div className="traffic-light">
                <div 
                    onClick={() => setColor("red")} 
                    className={`light red ${color === "red" ? "selected" : ""}`}
                ></div>
                <div 
                    onClick={() => setColor("yellow")} 
                    className={`light yellow ${color === "yellow" ? "selected" : ""}`}
                ></div>
                <div 
                    onClick={() => setColor("green")} 
                    className={`light green ${color === "green" ? "selected" : ""}`}
                ></div>
                {showPurple && (
                    <div 
                        onClick={() => setColor("purple")} 
                        className={`light purple ${color === "purple" ? "selected" : ""}`}
                    ></div>
                )}
            </div>
            <button className="btn btn-primary mt-3" onClick={toggleColor}>
                Toggle Color
            </button>
            <button className="btn btn-secondary mt-3" onClick={addPurple}>
                Add Purple
            </button>
        </div>
    );
};

export default Home;
