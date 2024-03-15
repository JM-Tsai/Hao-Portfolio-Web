import useNav from "../hooks/useNav";
import PropTypes from 'prop-types'

function Route({ path, children }) {
    
    const { currentPath } = useNav();
    // 判斷通過 props 傳遞的 path 與 currentPath 狀態是否一致
    if ( path === currentPath ) {
        return children;
    }
    return null;
}

Route.propTypes = {
    path: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Route;