import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('<WithLogging />', () => {
  it('on mount and on unmount with Component when the wrapped element is pure html', () => {
    console.log = jest.fn();
    const HOC = WithLogging(() => <p />);
    const wrapper = mount(<HOC />);
    expect(wrapper.exists()).toEqual(true);
    expect(console.log).toHaveBeenNthCalledWith(
      1,
      `Component Component is mounted`
    );
    wrapper.unmount();
    expect(console.log).toHaveBeenNthCalledWith(
      2,
      `Component Component is going to unmount`
    );
    jest.restoreAllMocks();
  });

  it('mount and on unmount with the name of the component when the wrapped element is the Login component. ', () => {
    console.log = jest.fn();
    const HOC = WithLogging(Login);
    const wrapper = mount(<HOC />);
    expect(wrapper.exists()).toEqual(true);
    expect(console.log).toHaveBeenNthCalledWith(
      1,
      `Component Login is mounted`
    );
    wrapper.unmount();
    expect(console.log).toHaveBeenNthCalledWith(
      2,
      `Component Login is going to unmount`
    );
    jest.restoreAllMocks();
  });
});
