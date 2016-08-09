import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import { shallow } from 'enzyme'

import Root from './sh-input-text';

describe('root', () => {
  it('renders root component without crashing', () => {
    let root = shallow(<Root />);
    expect(root).toExist();
  });
});
