import React, { useEffect, useState } from "react";

const getColumnsCount = (breakpoints) => {
    const width = window.innerWidth;
    const sortedBreakpoints = Object.entries(breakpoints)
        .map(([bp, cols]) => [parseInt(bp), cols])
        .sort((a, b) => a[0] - b[0]);

    let columns = sortedBreakpoints[0][1];
    for (const [bp, cols] of sortedBreakpoints) {
        if (width >= bp) {
            columns = cols;
        }
    }
    return columns;
};

const GridLayout = ({ columnsCountBreakPoints, gutter = "16px", children }) => {
    const [columns, setColumns] = useState([]);

    const distributeChildren = (colsCount) => {
        const cols = Array.from({ length: colsCount }, () => []);
        React.Children.forEach(children, (child, i) => {
            cols[i % colsCount].push(child);
        });
        return cols;
    };

    const updateLayout = () => {
        const colsCount = getColumnsCount(columnsCountBreakPoints);
        const cols = distributeChildren(colsCount);
        setColumns(cols);
    };

    useEffect(() => {
        updateLayout();
        window.addEventListener("resize", updateLayout);
        return () => window.removeEventListener("resize", updateLayout);
    }, [children]);

    return (
        <div style={{ display: "flex", gap: gutter, width: "100%" }}>
            {columns.map((col, index) => (
                <div
                    key={index}
                    style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: gutter,
                        minWidth: 0,
                    }}
                >
                    {col.map((item, i) => (
                        <div key={i}>{item}</div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default GridLayout