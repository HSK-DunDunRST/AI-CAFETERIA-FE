import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/cafeterias';

export const fetchMenu = async (cafeteriaId, mealTime) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${cafeteriaId}/menu`, {
            params: { mealTime }
        });
        return response.data.menu || [];
    } catch (error) {
        console.error("[fetchMenu] 메뉴 불러오기 실패:", error);
        // 예외를 던져서 App.jsx에서 처리하도록
        throw new Error("메뉴 데이터를 불러오는 데 실패했습니다.");
    }
};