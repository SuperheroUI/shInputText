import React from 'react'
import ReactDOM from 'react-dom';
import ShInputText from '../bin/sh-input-text';
import ShForm from 'sh-form';
require('../node_modules/sh-core/bin/main.css');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                one: 'Pre filled Text',
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
            <ShForm onSubmit={this.handleSubmit}>
                <input onChange={this.handleOneChange}/>
                <ShInputText label="Example With Preset value" value={this.state.formData.one} onChange={this.handleOneChange} />
                <ShInputText label="Example With Required Field" value={this.state.formData.two} onChange={this.handleTwoChange} required />
                <ShInputText label="Example Text Three" className="spam" value={this.state.formData.three} onChange={this.handleThreeChange} />
                <button type="submit">go</button>
            </ShForm>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));