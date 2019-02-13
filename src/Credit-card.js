import React from 'react'
import Card from './Card'
import './Card.css'
class CreditCard extends React.Component {

        constructor(props) {
          super(props)
          this.state = {
        }
        }

    Number_Verification = (number) => {
        
    }

    render () {
    return( 
    <div className="container">
        <Card />
        <div className="input-container">
            <input onChange={(event) => {console.log(event.target.value)}} type="text" className="input-form"></input>
            <input onChange={(event) => {console.log(event.target.value)}} type="text" className="input-form"></input>
            <input onChange={(event) => {console.log(event.target.value)}} type="text" className="input-form"></input>
        </div> 
    </div>
   )
}
} 

export default CreditCard;