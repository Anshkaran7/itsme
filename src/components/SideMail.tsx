// components/SideMail.js
import React from 'react';

const SideMail = () => {
    return (
        <div
            className="fixed  md:flex hidden flex-row items-center gap-x-3 bottom-2 right-4 z-5 transform rotate-90 transition-transform ease-in-out duration-200"
            style={{
                transformOrigin: '90% ',
            }}
        >
            <div>
                <a href="mailto:karanchandravanshi217@gmail.com" className=" dark:text-gray-700 text-white hover:text-pink-400 duration-300">
                    karanchandravanshi217@gmail.com
                </a>
            </div>
            <div className="w-32 h-[1px] mt-1 dark:bg-gray-700 bg-white"></div>
        </div>
    );
};

export default SideMail;
