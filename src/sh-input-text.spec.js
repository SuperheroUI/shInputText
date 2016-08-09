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
  })

  it('has at least one tutorial page', () => {
    let root = shallow(<Root />);
    let tutorialPages = root.instance()
  })

  it('renders the welcome component on initial load', () => {
    let root = shallow(<Root />);
    // let welcomeComponent = Welcome;
    // expect(root.find(welcomeComponent).length).toEqual(1);
  })
});
