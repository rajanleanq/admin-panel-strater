import React from 'react';
import { Modal } from 'antd';
interface ModalProps {
    children: React.ReactNode,
    open: boolean,
    close: () => void,
    title?: string,
    handleOk?: () => void
}
export default function CusModal({ title, children, close, open, handleOk }: ModalProps) {
    return (
        <Modal title={title} open={open} onOk={handleOk} onCancel={close}>
            {children}
        </Modal>
    );
}
