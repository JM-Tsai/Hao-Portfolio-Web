import useNav from "../../hooks/useNav"
import PropTypes from 'prop-types';

function Link({ to, children }) {

    const { navigate } = useNav();

    const handleLink = (e) => {
        // 監控設備是否有使用命令鍵
        // 有的話開啟另外視窗，分別對應 mac、windows
        if (e.metaKey || e.ctrlKey) {
            return
        }
        e.preventDefault();
        // 將 href 參數傳遞至 hooks 處理
        navigate(to);
    };

    return (
        // 觸發事件時，若 href 為元件內 link，即使用，否則導航至 a 標籤目標頁面
        <a onClick={handleLink} href={to}>{children}</a>
    )
}

// /*****************************/ 待測驗使用有無問題 /*****************************/
Link.propTypes = {
    // .node 驗證為節點
    // .isRequired 是必須性，若未傳遞 children 警告
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Link