// MenuList.jsx
export const MenuList = ({ menuItems, error }) => {
    return (
        <div className="bg-gray-50 p-4 rounded-lg shadow-inner mt-4 min-h-[150px] flex items-center justify-center">
            {error ? (
                <p className="text-red-700 font-bold text-lg text-center">{error}</p>
            ) : menuItems.length === 0 ? (
                <p className="text-gray-500 text-center font-medium">메뉴 없음</p>
            ) : (
                <ul className="space-y-3 w-full">
                    {menuItems.map((item, index) => (
                        <li key={index} className="flex items-center text-gray-700 font-medium">
                            <svg
                                className="w-5 h-5 text-indigo-400 mr-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MenuList;