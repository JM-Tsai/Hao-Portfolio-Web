import { useState, useEffect, createContext } from "react";
import PropTypes from 'prop-types';

const NavigationContext = createContext();
 
function NavigationProvider ({ children }) {
    // window 的路徑狀態
    const [ currentPath, setCurrentPath ] = useState(window.location.pathname);

    // 處理路徑更新
    useEffect(() => {
        // 設置處理用戶點擊上下頁時的狀態監聽與更新
        const handlePath = () => {
            setCurrentPath(window.location.path);
        };
        // 事件: popstate，瀏覽器的歷史紀錄發生時觸發
        window.addEventListener('popstate', handlePath);

        // 傳回一個清理函式
        return () => {
            window.removeEventListener('popstate', handlePath);
        };
    }, []);

    // navigate函式用於更新應用的黨導航狀態
    // 當用戶點擊時，接收 to 參數，並經由 .pushState 更新歷史紀錄，而不重新加載頁面
    const navigate = (to) => {
        window.history.pushState({}, '', to),
        setCurrentPath(to);
    };


    return (
        // 解構傳遞值
        <NavigationContext.Provider value={{ currentPath, navigate }}>
            {children}
        </NavigationContext.Provider>
    );
}

// ************************     很        重         要!    *****************************
// 對該元件進行屬性驗證
// 別犯低級錯誤，大小寫寫錯= =
// 元件選取時是選取屬性 (小寫)
// 賦予屬性驗證時，是大寫，PropTypes 是物件
NavigationProvider.propTypes  = {
    // .node 驗證為節點
    // .isRequired 是必須性，若未傳遞 children 警告
    children: PropTypes.node.isRequired
}

export { NavigationProvider }
export default NavigationContext;