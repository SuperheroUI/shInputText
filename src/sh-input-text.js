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
            requiredField: {showRequired: false}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.validate = this.validate.bind(this);
    }

    validate(onSubmit) {
        if (onSubmit) {
            this.state.classList.shTouched = true;
        }
        let rtn = {isValid: true};

        this.state.classList.shInvalid = false;

        if (this.props.required && this.state.value.trim() === '') {
            this.state.classList.shInvalid = true;

            rtn.isValid = false;
            rtn.msg = 'Required';
        }
        var newState = _.clone(this.state);
        this.setState(newState);
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

    componentWillReceiveProps(props) {
        if (!_.isUndefined(props.value) && !_.isEqual(props.value, this.state.value)) {
            var newState = _.clone(this.state);
            newState.classList.empty = !props.value;
            newState.value = props.value;
            this.setState(newState, this.validate);
        }
    }

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
            this.setState({requiredField: {showRequired: true}});
        }
        this.state.placeholderHolder = this.state.placeholderText;
    }

    handleChange(event) {
        this.setState({value: event.target.value}, ()=> {
            if (this.props.validator) {
                this.props.validator.validate()
            } else {
                this.validate();
            }
        });
        this.props.onChange(event);
    };

    handleFocus(event) {
        if (this.props.onFocus) {
            this.props.onFocus(event);
        }

        this.state.classList.shTouched = true;
        this.state.placeholderText = '';
        var newState = _.clone(this.state);
        if(!_.isUndefined(this.refs.input)){
            this.refs.input.focus();
        }
        this.setState(newState);
    };

    handleBlur(event) {
        this.validate();
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
        var newState = _.clone(this.state);
        newState.placeholderText = newState.placeholderHolder;
        newState.classList.empty = !this.state.value;
        newState.requiredField.showRequired = (this.state.value.length < 1 && this.props.required);
        this.setState(newState);
    }

    render() {
        var {
            value,
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
                    <span className={"required-label " + ShCore.getClassNames(this.state.requiredField)}>required</span>
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
    validator: React.PropTypes.object,
    value: React.PropTypes.any,
    onChange: React.PropTypes.func,
    label: React.PropTypes.string,
    required: React.PropTypes.bool,
};

ShInputText.defaultProps = {
    validator: null,
    onChange: _.noop,
    label: '',
    required: false
};

export default ShInputText;