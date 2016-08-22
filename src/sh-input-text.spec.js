var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react/lib/ReactTestUtils');

var ShInputText = require('./sh-input-text').default;

describe('root', function () {
    it('renders without problems', function () {
        let value = true;
        var root = TestUtils.renderIntoDocument(<ShInputText value={value}/>);
        expect(root.state).toBeTruthy();
    });

    it('input styles not be set to empty if there is a value', function () {
        let value = '0';
        let changeMe = () => {
            value = 1;
        };
        var root = TestUtils.renderIntoDocument(<ShInputText value={value} onChange={changeMe}/>);
        let rootNode = ReactDOM.findDOMNode(root);
        expect(root.state).toBeTruthy();
        let input = TestUtils.findRenderedDOMComponentWithClass(root, 'sh-text-input');
        TestUtils.Simulate.blur(input);
        expect(rootNode.classList.length).toBe(1)
    });

    it('handle having outside onBlur', function () {
        let value = '0';
        let blurTest = 0;
        let onBlur = ()=> {
            blurTest = 1;
        };

        var root = TestUtils.renderIntoDocument(<ShInputText value={value} onBlur={onBlur}/>);
        expect(root.state).toBeTruthy();
        let input = TestUtils.findRenderedDOMComponentWithClass(root, 'sh-text-input');
        TestUtils.Simulate.blur(input);
        expect(blurTest).toBe(1)
    });

    it('handle having outside onFocus', function () {
        let value = '0';
        let focusTest = 0;
        let onFocus = ()=> {
            focusTest = 1;
        };

        var root = TestUtils.renderIntoDocument(<ShInputText value={value} onFocus={onFocus}/>);
        expect(root.state).toBeTruthy();
        let input = TestUtils.findRenderedDOMComponentWithClass(root, 'sh-text-input');
        TestUtils.Simulate.focus(input);
        expect(focusTest).toBe(1)
    });
    it('works a field is required', function () {
        let what = '0';
        let changeMe = () => {
            value = 1;
        };
        var root = TestUtils.renderIntoDocument(<ShInputText required value={what} onChange={changeMe}/>);
        let rootNode = ReactDOM.findDOMNode(root);
        expect(root.state).toBeTruthy();
        let input = TestUtils.findRenderedDOMComponentWithClass(root, 'sh-text-input');
        expect(input.required).toBe(true);
        expect(input.placeholder).toBe('Required Field');
    });

    it('input styles be set to empty if there is no value', function () {
        var root = TestUtils.renderIntoDocument(<ShInputText  />);
        let rootNode = ReactDOM.findDOMNode(root);
        expect(root.state).toBeTruthy();
        let input = TestUtils.findRenderedDOMComponentWithClass(root, 'sh-text-input');
        TestUtils.Simulate.blur(input);
        expect(rootNode.classList[1]).toBe('empty')
    });

    it('handle internal changes', function () {
        let value = '0';
        let changeMe = () => {
            value = 'hi';
        };
        var root = TestUtils.renderIntoDocument(<ShInputText value={value} onChange={changeMe}/>);
        let input = TestUtils.findRenderedDOMComponentWithClass(root, 'sh-text-input');

        root.handleChange({
            target: {
                value: 'the fat lazy cat'
            }
        });

        TestUtils.Simulate.blur(input);
        expect(input.value).toBe('the fat lazy cat');
    });
});
