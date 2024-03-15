import ReactDOM from "react-dom";
import { useEffect } from "react"; 

// 定義 Modal 元件，接受 onClose 、actionBar 和 children 作為屬性
export default function Modal({ onClose, actionBar, children }) {
    
    // 使用 useEffect，在元件載入時將 'overflow-hidden' 類別添加到 body 元素
    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        // 返回清理函數，在元件移除時或模態關閉時移除 'overflow-hidden' 類別
        // 不關閉會造成無法滾動
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);// 第二個參數是一個空陣列，表示只執行一次
    
    // 傳回 建立門戶的樣式與位置
    return ReactDOM.createPortal(
        <div>
            {/* 背景蒙層，點擊時觸發 onClose 事件 */}
            <div className='fixed inset-0 bg-gray-300 opacity-80' onClick={onClose}></div>
            {/* Modal 主體 */}
            <div className='fixed inset-40 p-10 bg-white'>
                {/* Flexbox 佈局，垂直彈性容器 */}
                <div className="flex flex-col justify-between h-full">
                    {/* Modal 內容 */}
                    {children}
                    {/* props ActionBar，放在 Modal 底部 */}
                    <div className="flex justify-end">
                        {actionBar}
                    </div>
                </div>
            </div>
        </div>,
        // {/* 位置 */}
        document.querySelector('.modal-container')
    );
}