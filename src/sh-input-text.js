import React from 'react';
import ShCore from 'sh-core';
import * as _ from 'lodash';

require('./sh-input-text.scss');

class ShInputText extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            classList: {
                shInputText: true,
                empty: true
            },
            placeholderText: '+',
            validStatus: 'unknown',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.validate = this.validate.bind(this);
    }

    validate() {
        let rtn = {isValid: true};
        if (this.props.required && this.state.value === '') {
            this.state.classList.invalid = true;
            this.setState(this.state);
            rtn.isValid = false;
            rtn.msg = 'Required';
        }
        return rtn;
    };

    componentWillMount() {
        if (this.props.validator) {
            this.props.validator.register(this, this.validate);
        }
    };

    componentWillUnmount() {
        if (this.props.validator) {
            this.props.validator.unregister(this);
        }
    };

    componentDidMount() {
        if (this.props.value) {
            this.setState(
                {
                    value: this.props.value,
                    classList: {shInputText: true}
                }
            )
        }

        if (this.props.required) {
            this.state.placeholderText = 'Required Field';
            this.setState(this.state);
        }
        this.state.placeholderHolder = this.state.placeholderText;
    }

    handleChange(event) {
        this.setState({value: event.target.value}, ()=> {
            if (this.props.validator) {
                this.props.validator.validate()
            }
        });
        if (this.props.onChange) {
            this.props.onChange(event);
        }
    };


    handleFocus(event) {
        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
        this.refs.input.select();

        this.setState(
            {
                placeholderText: ''
            }
        );
    };

    handleBlur() {
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
        this.setState(
            {
                value: this.state.value.trim(),
                placeholderText: this.state.placeholderHolder,
                classList: {shInputText: true}
            }
        );

        if (!this.state.value) {
            this.setState(
                {
                    value: this.state.value,
                    classList: {shInputText: true, empty: true}
                }
            )
        }
    }

    render() {
        var {
            validator,
            onFocus,
            onBlur,
            required,
            ...other
        } = this.props;

        return (
            <div
                className={this.props.className ? ShCore.getClassNames(this.state.classList) + ' ' + this.props.className : ShCore.getClassNames(this.state.classList)}>
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

ShInputText.propTypes = {
    validator: React.PropTypes.object
};

ShInputText.defaultProps = {
    validator: null
};

export default ShInputText;