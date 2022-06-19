import React, { useState, useCallback } from 'react';
import SortModal from './SortModal';

type Props = {};

function SortBar({}: Props) {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = useCallback(() => {
        setShowModal(!showModal);
    }, [showModal]);
    const handleCloseModal = useCallback(() => {
        setShowModal(false);
    }, []);

    return (
        <div className="flex justify-center md:hidden">
            <button onClick={handleShowModal} className="w-72 fixed bg-gray-800 h-3 rounded-full bottom-1"></button>
            {showModal && <SortModal onCancel={handleCloseModal} />}
        </div>
    );
}

export default SortBar;
