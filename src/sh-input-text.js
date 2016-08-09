import React, {Component} from 'react';
import * as _ from 'lodash';
require('./sh-input-text.scss');

class ShInputText extends Component {

  constructor(props) {
    super(props);
    this.state = {
      classList: ['sh-input-text empty'],
      placeholderText: '+'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentDidMount() {
    if (this.props.value) {
      this.setState(
        {
          value: this.props.value,
          classList: ['sh-input-text']
        }
      )
    }

    if(this.props.required){
      this.state.placeholderText = 'Required Field';
      this.setState(this.state);
    }
  }

  handleChange(event) {    
    this.setState({value: event.target.value});
    this.props.onChange(event);
  };
  
  handleBlur(){
    this.setState(
      {
        value: this.state.value,
        classList: ['sh-input-text']
      }
    );
    
    if(!this.state.value){
      this.setState(
        {
          value: this.state.value,
          classList: ['sh-input-text empty']
        }
      )
    } 
  }

  render() {
    return (
      <div className={this.state.classList}>
        <label>
          <span className="label">{this.props.label}</span>
          <input ref="input" type="text" placeholder={this.state.placeholderText} onChange={this.handleChange} onFocus={()=>{this.refs.input.select()}} onBlur={this.handleBlur} value={this.state.value} required={this.props.required}/>
        </label>
      </div>
    )
  }
}

export default ShInputText;