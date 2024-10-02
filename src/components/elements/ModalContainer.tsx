"use client";

import React from "react";
import Modal from "./Modal";


export type ModalContainerProp = {
    buttonMessage: string;
    children: React.ReactNode;
}

export default function ModalContainer(props: ModalContainerProp) {

    // ---------------------------------------------
    // モーダル: 表示状態
    // ---------------------------------------------
    const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);

    return (
        <div>
            {/* --- ボタン --- */}
            <button onClick={()=>setIsOpenModal(true)} className="p-4 text-white font-bold bg-blue-400 rounded-xl shadow-lg">
                {props.buttonMessage}
            </button>

            {/* --- モーダル --- */}
            <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
                {props.children}
            </Modal>
        </div>
    );
}