import React from 'react';
import ReactDOM from 'react-dom';

const logMyName = () => {
  console.log('MY NAME IS SAM')
}

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.age = 5
  }
  
  logMyName() {
    console.log('MY NAME IS SAM and my age is' + this.age)
  }

  render () {
    return (
      <div>
        <h1>Hello world</h1>
        <input type="button" value="Click me" onClick={this.logMyName.bind(this)}/>
        <input type="text" onChange={(event) => {console.log(event.target.value)}} />
      </div>
    )
  }
} 

ReactDOM.render(<Main />, document.getElementById('root'));