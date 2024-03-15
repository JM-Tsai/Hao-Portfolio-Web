import Modal from "../components/Modal";
import Button from "../components/button/Button";
import { useState } from "react";

export default function LonInPage() {
    // 使用 useState 定義 showModal 狀態，預設為 false
    const [showModal, setShowModal] =useState(false);
    // 點擊按鈕時設定 showModal 狀態為 true，顯示 Modal 元件
    const handleClick = () => {
        setShowModal(true);
    };
    // 關閉 Modal 時設定 showModal 狀態為 false，隱藏 Modal
    const handleClose = () => {
        setShowModal(false);
    };
    // 定義 ActionBar，使用 Button 元件為按鈕
    const actionBar = <Button primary onClick={handleClose}>I Accept</Button>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            建置中
        </p>
    </Modal>

    return (
        <div className="relative">
            建置中
            {/* 開啟 Modal 的按鈕，點擊時觸發 handleClick 事件
            <Button primary onClick={handleClick}>
                open modal
            </Button>
             {/* 若 showModal 為 true，顯示 Modal */}
            {/* {showModal && modal} */}
        </div>
    );
}