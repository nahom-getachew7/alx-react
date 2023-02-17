import React from 'react';
import Login from './Login';
import { mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

describe("testing the <Login /> component", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = mount(<Login />);
  });

  it("Login component renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Login component renders 3 input tags", () => {
    expect(wrapper.find("input")).toHaveLength(3);
  });

  it("Login component renders 2 label tags", () => {
    expect(wrapper.find("label")).toHaveLength(2);
  });

  it("verify that the submit button is disabled by default", () => {
    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(true);
  });

  it("verify that after changing the value of the two inputs, the button is enabled", () => {
    wrapper.find("#email").simulate('change', {target: {value: 't'}});
    wrapper.find("#password").simulate('change', {target: {value: 't'}});
    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(false);
  });
});
