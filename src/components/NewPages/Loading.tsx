import React from 'react';
import './Loading.css';

const Loading = () => (
    <div className="flex justify-center mt-5">
        <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
        </div>
    </div>
);
export default Loading;
