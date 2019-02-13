import React from 'react'
import Card from './Card'
import './Credit-card.css'
class CreditCard extends React.Component {

        constructor(props) {
          super(props)
          this.state = {
              number:'',
              date:'',
              name:''
              
        }
        }

    
    number_verification = (verified_number) => {
        let regex = /^\d+$/;
    
            if(verified_number.value.toString().length !== 16){
                verified_number.style.backgroundColor = 'red';
            }
            else if (!regex.test(verified_number.value)){
                verified_number.style.backgroundColor = 'red';
            }
            else{
                verified_number.style.backgroundColor = '#fff';
            }
    }

    name_verification = (name) => {
        if (name.value.length >= 20) {
            name.style.backgroundColor = 'red';
        }
        else{
            name.style.backgroundColor = '#fff';
        }
    }


    number_transfer = (num) => {
        this.setState( {number: num.value} )
    }
    date_transfer = (date) => {
        this.setState( {date: date.value} )
    }
    name_transfer = (name) => {
        this.setState( {name: name.value} )
    }

    render () {
    return( 
    <div className="container">
        <Card 
        number={this.state.number}
        date={this.state.date}
        name={this.state.name} />
        <div className="input-container">
            <input placeholder="Credit Card Number" onmouseover={(event) => {this.number_verification(event.target)}} onChange={(event) => {this.number_transfer(event.target)}} type="text" className="input-form"></input>
            <input placeholder="Name" onChange={(event) => {this.name_transfer(event.target)}} type="text" className="input-form"></input>
            <input placeholder="Valid Thru" onChange={(event) => {this.date_transfer(event.target)}} type="text" className="input-form"></input>
        </div> 
    </div>
   )
}
} 

export default CreditCard;