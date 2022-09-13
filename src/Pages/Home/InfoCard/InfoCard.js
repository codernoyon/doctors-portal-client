import React from 'react';

const InfoCard = ({ img, bgClass, des, title }) => {
    return (
        <div className={`text-white card pl-3 pt-5 lg:pt-2 lg:card-side bg-base-100 shadow-xl hover:shadow-2xl duration-300 cursor-pointer hover:-translate-y-1 4 ${bgClass}`} >
            <figure ><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{des}</p>
            </div>
        </div>
    );
};

export default InfoCard;