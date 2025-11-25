// 혼잡도에 따른 스타일 반환 함수

export const getCongestionStyle = (level) => {
    switch (level) {
        case "높음": // High
            return "bg-red-100 text-red-800 ring-red-300";
        case "보통": // Medium
            return "bg-yellow-100 text-yellow-800 ring-yellow-300";
        case "낮음": // Low
            return "bg-green-100 text-green-800 ring-green-300";
        default:
            return "bg-gray-100 text-gray-800 ring-gray-300";
    }
};