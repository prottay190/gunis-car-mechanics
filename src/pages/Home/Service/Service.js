import React from 'react';
import './Service.css';

const Service = ({service}) => {
    //const {service} = props;
    const {name, price, description, img} = service;
    return (
        <div className="service">
            <img className="m-2 rounded-3" src={img} alt="" />
            <h3>{name}</h3>
            <p>price{price}</p>
            <p className="px-3">description{description}</p>
        </div>
    );
};

export default Service;