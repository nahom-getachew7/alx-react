import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
  const wrapper = shallow(<Footer />);

  it('render without crashing', () => {
    expect(wrapper.exists());
  });

  it('paragraph and content', () => {
    expect(wrapper.find('footer p')).toHaveLength(1);
    expect(wrapper.find('footer p').text()).toContain('Copyright');
  });
});
