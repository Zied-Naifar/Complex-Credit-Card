import React from 'react'
import './Credit-card.css'
import puce from './puce.png'
import mastercard from './mastercard.png'


const Card =(props) =>{

    return (
            <div className="card-container">
                <div>
                    <h1 className="card-title">CREDIT CARD</h1>
                </div>
                <div className="puce-container">
                    <img className="puce-size" src={puce} alt=""/>
                </div>
                <div className="info-container">
                    <div className="card-info">
                        <p>{props.number}</p>
                        <div className="card-valid-container">
                            <div>5422</div>
                            <div>{props.date}</div>
                        </div>
                        <div className="holder-container">{props.name}</div>
                    </div>
                    <div className="image-container">
                        <img className="master-image" src={mastercard} alt=""/>
                    </div>
                </div>
            </div>
        )
}

Card.defaultProps ={
    number : '0000 0000 0000 0000',
    date : 'mm/YY',
    name : 'FOULEN'
}

export default Card;