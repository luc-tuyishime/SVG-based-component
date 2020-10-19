import React from "react";

// COMPONENT THAT RETURN SVG ICON
const SVG = ({
    style = {},
    name,
    children,
    width = "100%",
    className = "",
    viewBox,
    xmlns,
    xmlnsXlink
}) => (
    <svg
        name={name}
        width={width}
        style={style}
        height={width}
        viewBox={viewBox}
        xmlns={xmlns}
        className={`svg-icon ${className || ""}`}
        xmlnsXlink={xmlnsXlink}>
        {children}
    </svg>
);

export default SVG;
