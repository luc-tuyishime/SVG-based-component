import React from "react";
import randomColor from "randomcolor";

import { envelope_path_drawn } from "./helper/pathToBeDrawn/envelope";
import DrawGoogle from "./helper/pathToBeDrawn/google";

import SVG from "./components/svg";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <SVG
                name="envelope"
                width={100}
                viewBox="0 0 40 26"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <path fill={randomColor()} d={envelope_path_drawn} />
            </SVG>

            <SVG viewBox="0 0 47 48" width={60} xmlns="http://www.w3.org/2000/svg">
                <DrawGoogle />
            </SVG>
        </div>
    );
};

export default App;
