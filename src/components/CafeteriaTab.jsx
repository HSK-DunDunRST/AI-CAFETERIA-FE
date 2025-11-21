import React from 'react';

// 식당 탭 버튼 컴포넌트
const CafeteriaTab = ({ id, name, icon, isSelected, onClick }) => (
    <button
        onClick={() => onClick(id)}
        className={`p-4 flex-1 text-center rounded-t-lg transition-all duration-200
        ${isSelected
            ? 'bg-white text-indigo-700 font-bold border-b-4 border-indigo-500 shadow-t-md'
            : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-indigo-600'
        }
      `}
    >
        <span className="text-2xl mr-2">{icon}</span>
        <span className="hidden sm:inline">{name}</span>
    </button>
);

export default CafeteriaTab;