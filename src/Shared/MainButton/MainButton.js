import React from 'react';

const MainButton = ({children}) => {
    return (
        <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l">{children}</button>
    );
};

export default MainButton;