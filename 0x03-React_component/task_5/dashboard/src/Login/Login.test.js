import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

const wrapper = shallow(<Login />);

it('renders without crashing', () => {
  shallow(<Login />);
});

it('renders login', () => {
  expect(wrapper.find('main.login').exists()).toEqual(true);
});

it('renders login', () => {
  expect(wrapper.find('main.login input')).toHaveLength(2);
});

it('renders login', () => {
  expect(wrapper.find('main.login label')).toHaveLength(2);
});
