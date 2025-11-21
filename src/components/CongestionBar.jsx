// 혼잡도 시각화 바 컴포넌트

import React from "react";

export const CongestionBar = ({ level, isCurrent }) => {
    const baseClasses = "h-8 rounded-full transition-all duration-500 flex items-center justify-center font-bold text-white shadow-md";
    let barClasses = "";
    let width = "w-1/3";
    let opacity = "opacity-70";

    if (isCurrent) {
        opacity = "opacity-100 scale-105 ring-4 ring-offset-2";
    }

    switch (level) {
        case "높음": // High
            barClasses = `bg-red-500 ${isCurrent ? 'ring-red-500' : ''}`;
            width = isCurrent ? "w-full" : "w-1/3";
            break;
        case "보통": // Medium
            barClasses = `bg-yellow-500 ${isCurrent ? 'ring-yellow-500' : ''}`;
            width = isCurrent ? "w-2/3" : "w-1/3";
            break;
        case "낮음": // Low
        default:
            barClasses = `bg-green-500 ${isCurrent ? 'ring-green-500' : ''}`;
            width = isCurrent ? "w-1/3" : "w-1/3";
            break;
    }

    return (
        <div className={`bg-gray-200 rounded-full h-8 overflow-hidden relative`}>
            <div
                className={`${baseClasses} ${barClasses} ${width} ${opacity}`}
                style={{ width: isCurrent ? '100%' : '33.33%' }} // Simulating width change for effect
            >
                <span className="absolute z-10 text-sm">{level}</span>
            </div>
        </div>
    );
};

export default CongestionBar;