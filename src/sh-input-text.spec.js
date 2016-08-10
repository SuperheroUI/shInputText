import React from 'react';
import expect from 'expect';

import { shallow, mount } from 'enzyme'

import ShInputText from './sh-input-text';

describe('check to see if the component renders', () => {
  it('renders root component without crashing', () => {
    let textField = shallow(<ShInputText label="Example Pre Filled Data" value='some Value'></ShInputText>);
    expect(textField).toExist();
  });
  it('allows us to set props', () => {
    let textField = mount(<ShInputText label="Example Pre Filled Data" value='some Value'></ShInputText>);
    
    expect(textField.props().label).toEqual('Example Pre Filled Data');
    expect(textField.props().value).toEqual('some Value');
    textField.setProps({ label: 'foo' });
  });
});
