import React from 'react';

require('./sh-input-text.scss');

class ShInputText extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            classList: ['sh-input-text empty'],
            placeholderText: '+'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
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

        if (this.props.required) {
            this.state.placeholderText = 'Required Field';
            this.setState(this.state);
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.onChange(event);
    };


    handleFocus(event) {
        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
        this.refs.input.select();
    }

    handleBlur() {
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
        this.setState(
            {
                value: this.state.value,
                classList: ['sh-input-text']
            }
        );

        if (!this.state.value) {
            this.setState(
                {
                    value: this.state.value,
                    classList: ['sh-input-text empty']
                }
            )
        }
    }

    render() {
        var {onFocus, onBlur, ...other} = this.props;

        return (
            <div className={this.state.classList}>
                <label>
                    <span className="label">{this.props.label}</span>
                    <input ref="input"
                           className="sh-text-input"
                           type="text"
                            {...other}
                           placeholder={this.state.placeholderText}
                           onChange={this.handleChange}
                           onFocus={this.handleFocus}
                           onBlur={this.handleBlur}
                           value={this.state.value}
                    />
                </label>
            </div>
        )
    }
}

export default ShInputText;
