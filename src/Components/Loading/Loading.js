import React from 'react';

const Loading = () => {
    return (
        <div className='text-center'>
            <div style={{ borderTopColor: "transparent" }}
                className="inline-block w-16 h-16 border-4 border-blue-400 border-double rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;