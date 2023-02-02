import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

const wrapper = shallow(<Footer />);

it('renders without crashing', () => {
  shallow(<Footer />);
});

it('renders footer', () => {
  expect(wrapper.find('footer.footer').exists()).toEqual(true);
});

it('renders footer', () => {
  expect(wrapper.find('footer.footer p').exists()).toEqual(true);
  expect(wrapper.find('footer.footer p').text()).toContain('Copyright');
});
