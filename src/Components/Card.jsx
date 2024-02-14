import React from 'react';
import '../Styles/Card.css';
function Card(props){
    const { name, description,url } = props;
    return (
        <div id="curve" className="card">
            <div className="footer">    
                <div className="info">
                    <div className="name"><a href={url}>{name}</a></div>
                    <div className="job">{description}</div>
                </div>
            </div>
            <div className="card-blur"></div>
        </div>
    );
};

export default Card;
