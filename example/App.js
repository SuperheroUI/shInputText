import React from 'react'
import ReactDOM from 'react-dom';
import ShInputText from '../bin/sh-input-text'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        one: 'Hamster',
        two: '',
        three: ''
      }
    };
    this.handleOneChange = this.handleOneChange.bind(this);
    this.handleTwoChange = this.handleTwoChange.bind(this);
    this.handleThreeChange = this.handleThreeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOneChange(event) {
    this.state.formData.one = event.target.value;
    this.setState(this.state);
  }

  handleTwoChange(event) {
    this.state.formData.two = event.target.value;
    this.setState(this.state);
  }

  handleThreeChange(event) {
    this.state.formData.three = event.target.value;
    this.setState(this.state);
  }

  handleSubmit() {
    alert(this.state.formData.one + ' ' + this.state.formData.two + ' ' + this.state.formData.three);
    return false;
  }

  render() {
    return <div>
      <form name="test" onSubmit={this.handleSubmit}>
        <ShInputText label="Example Pre Filled Data" value={this.state.formData.one}
                     onChange={this.handleOneChange}></ShInputText>
        <ShInputText label="Example With Required Field" value="" onChange={this.handleTwoChange} required></ShInputText>
        <ShInputText label="Example Text Three" value="" onChange={this.handleThreeChange}></ShInputText>
        <button type="submit">go</button>
      </form>
    </div>
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));