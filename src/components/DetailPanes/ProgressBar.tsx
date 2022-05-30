import React from 'react';

interface ProgressProps {
    progressPercentage: number;
    label: string;
}
const ProgressBar = ({ progressPercentage, label }: ProgressProps) => {
    return (
        <div className="flex items-center flex-row mx-3 my-1 gap-3">
            <p className="w-20 text-gray-500 font-xl text-md capitalize">{label}</p>
            <div className="h-2.5 w-full bg-gray-300">
                <div style={{ width: `${progressPercentage}%` }} className={`h-full ${progressPercentage < 50 ? 'bg-red-600' : 'bg-green-600'}`}></div>
            </div>
        </div>
    );
};
export default ProgressBar;
