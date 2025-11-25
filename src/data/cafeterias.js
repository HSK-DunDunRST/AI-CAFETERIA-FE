// 더미 데이터 정의 (혼잡도만)
export const dummyCafeterias = {
    student: {
        id: 'student',
        name: "학생 식당",
        congestion: {
            lunch: "높음",   // High
            dinner: "보통",  // Medium
        }
    },
    staff: {
        id: 'staff',
        name: "교직원 식당",
        congestion: {
            lunch: "낮음",   // Low
            dinner: "낮음",  // Low
        }
    },
    dormitory: {
        id: 'dormitory',
        name: "기숙사 식당",
        congestion: {
            lunch: "보통",   // Medium
            dinner: "높음",  // High
        }
    },
};