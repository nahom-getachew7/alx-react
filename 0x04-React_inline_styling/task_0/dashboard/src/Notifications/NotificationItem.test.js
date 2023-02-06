import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    shallow(<NotificationItem />);
  });

  it('renders type and value props', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    const li = wrapper.find('li');
    expect(li).toHaveLength(1);
    expect(li.text()).toEqual('test');
    expect(li.prop('data-notification-type')).toEqual('default');
  });

  it('renders html prop', () => {
    const text = 'Here is the list of notifications';
    const wrapper = shallow(
      <NotificationItem html={{ __html: '<u>test</u>' }} />
    );
    const li = wrapper.find('li');
    expect(li.html()).toEqual(
      '<li data-notification-type="default"><u>test</u></li>'
    );
  });
});
/*
describe('markAsRead', () => {
  it('markAsRead message', () => {
    const id = 16;
    const wrapper = shallow(
      <NotificationItem type='default' value='test' id={id} />
    );
    const instance = wrapper.instance();
    instance.markAsRead = jest.fn();
    const listItem = wrapper.find('li').first();
    listItem.simulate('click');
    instance.markAsRead(id);
    expect(instance.markAsRead).toHaveBeenCalledWith(16);
    jest.restoreAllMocks();
  });
});
*/
