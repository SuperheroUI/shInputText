import React, {Component} from 'react';
require('./steps.scss');

export default class SetupProspects extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    var newState = Object.assign({}, this.state, {});
    this.setState(newState);
  }

  render() {
    return (
        <label>
          <span class="label">this.props.label</span>
          <input type="text"  placeholder="+" />
      </label>
    )
  }
}