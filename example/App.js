import React from 'react'
import ReactDOM from 'react-dom';
import ShInputText from '../bin/sh-input-text'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initValue:'Hello World'
    };
  }

  sub(){
    console.log('firasfasfe')
  }
  
  render(){
    return <div>
      <form name="test" onSubmit={this.sub()}>
      <ShInputText label="Example Text One" value={this.state.initValue} ></ShInputText>
      <ShInputText label="Example Text Two" value="" required ></ShInputText>
      <ShInputText label="Example Text Three" value="" ></ShInputText>
        <button type="submit">go</button>
      </form>
      
    </div>
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));