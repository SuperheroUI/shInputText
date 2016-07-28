import React from 'react'
import ReactDOM from 'react-dom';
import ShInputText from '../lib/sh-text-input'

class App extends React.Component {
  render(){
    return <div>Input Text Example:
      <ShInputText></ShInputText>
    </div>
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));