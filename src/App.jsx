import React, { useState, useEffect, useMemo } from 'react';
import { dummyCafeterias } from './data/cafeterias'; // 혼잡도 정보만
import { getCongestionStyle } from './utils/congestion';
import CafeteriaTab from './components/CafeteriaTab';
import MenuList from './components/MenuList';
import CongestionBar from './components/CongestionBar';
import { fetchMenu } from './utils/api.js'; // 모듈 임포트

const App = () => {
    const [selectedCafeteriaId, setSelectedCafeteriaId] = useState('student');
    const [selectedMealTime, setSelectedMealTime] = useState('lunch');

    const currentCafeteria = dummyCafeterias[selectedCafeteriaId];
    const currentCongestion = currentCafeteria.congestion[selectedMealTime];
    const congestionClass = useMemo(() => getCongestionStyle(currentCongestion), [currentCongestion]);

    const [menuItems, setMenuItems] = useState([]);
    const [menuError, setMenuError] = useState(null);

    useEffect(() => {
        const loadMenu = async () => {
            try {
                const menu = await fetchMenu(selectedCafeteriaId, selectedMealTime);
                setMenuItems(menu);
                setMenuError(null); // 성공하면 에러 초기화
            } catch (error) {
                setMenuItems([]); // 메뉴 초기화
                setMenuError("데이터를 불러오는데 실패하였습니다.");
            }
        };
        loadMenu();
    }, [selectedCafeteriaId, selectedMealTime]);

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-8 font-sans">
            <div className="max-w-4xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
                        🏫 캠퍼스 식당 현황 대시보드
                    </h1>
                    <p className="text-lg text-gray-600">
                        실시간 메뉴 및 혼잡도 정보
                    </p>
                </header>

                {/* 식당 탭 네비게이션 */}
                <nav className="flex bg-white rounded-t-lg shadow-lg overflow-hidden border-b-2 border-gray-200">
                    {Object.values(dummyCafeterias).map(cafe => (
                        <CafeteriaTab
                            key={cafe.id}
                            id={cafe.id}
                            name={cafe.name}
                            icon={cafe.icon}
                            isSelected={selectedCafeteriaId === cafe.id}
                            onClick={setSelectedCafeteriaId}
                        />
                    ))}
                </nav>

                {/* 식사 시간 선택 버튼 */}
                <div className="flex justify-start space-x-3 my-4 p-4 bg-white rounded-b-lg shadow-md">
                    {['lunch', 'dinner'].map(time => (
                        <button
                            key={time}
                            onClick={() => setSelectedMealTime(time)}
                            className={`py-2 px-4 rounded-full text-sm font-semibold transition-colors duration-200
                                ${selectedMealTime === time
                                ? 'bg-indigo-600 text-white shadow-lg'
                                : 'bg-gray-200 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600'
                            }`}
                        >
                            {time === 'lunch' ? '점심 식사' : '저녁 식사'}
                        </button>
                    ))}
                </div>

                {/* 현재 식당 및 메뉴 정보 카드 */}
                <main className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl transition-all duration-300">
                    <div className="flex justify-between items-center mb-6 border-b pb-4">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 flex items-center">
                            <span className="text-4xl mr-3">{currentCafeteria.icon}</span>
                            {currentCafeteria.name}
                        </h2>
                        <div className={`px-4 py-2 rounded-full ring-2 font-bold text-sm sm:text-base ${congestionClass}`}>
                            {currentCongestion}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* 메뉴 섹션 */}
                        <div>
                            <h3 className="text-xl font-semibold text-indigo-600 mb-3 flex items-center">
                                오늘의 메뉴 ({selectedMealTime === 'lunch' ? '점심' : '저녁'})
                            </h3>
                            <MenuList menuItems={menuItems} />
                        </div>

                        {/* 혼잡도 시각화 섹션 */}
                        <div className="flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-semibold text-indigo-600 mb-3 flex items-center">
                                    현재 혼잡도
                                </h3>
                                <div className="space-y-3">
                                    <CongestionBar level="높음" isCurrent={currentCongestion === "높음"} />
                                    <CongestionBar level="보통" isCurrent={currentCongestion === "보통"} />
                                    <CongestionBar level="낮음" isCurrent={currentCongestion === "낮음"} />
                                </div>
                            </div>
                            <footer className="mt-8 pt-4 border-t text-sm text-gray-500 italic">
                                * 혼잡도는 더미 데이터이며, 실제 상황과 다를 수 있습니다.
                            </footer>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;