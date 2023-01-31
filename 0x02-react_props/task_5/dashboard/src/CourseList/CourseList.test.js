import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('<CourseList />', () => {
  const wrapper = shallow(<CourseList />);
  it('renders without crashing', () => {
    expect(wrapper.exists());
  });
  it('renders rows', () => {
    const row = wrapper.find('CourseListRow');
    expect(row).toHaveLength(5);
    expect(row.at(0).prop('textFirstCell')).toEqual('Available courses');
    expect(row.at(0).prop('isHeader')).toEqual(true);
    expect(row.at(1).prop('textFirstCell')).toEqual('Course name');
    expect(row.at(1).prop('textSecondCell')).toEqual('Credit');
    expect(row.at(1).prop('isHeader')).toEqual(true);
    expect(row.at(2).prop('textFirstCell')).toEqual('ES6');
    expect(row.at(2).prop('textSecondCell')).toEqual('60');
    expect(row.at(2).prop('isHeader')).toEqual(false);
    expect(row.at(3).prop('textFirstCell')).toEqual('Webpack');
    expect(row.at(3).prop('textSecondCell')).toEqual('20');
    expect(row.at(3).prop('isHeader')).toEqual(false);
    expect(row.at(4).prop('textFirstCell')).toEqual('React');
    expect(row.at(4).prop('textSecondCell')).toEqual('40');
    expect(row.at(4).prop('isHeader')).toEqual(false);
  });
});
