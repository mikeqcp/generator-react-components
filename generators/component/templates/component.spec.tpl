import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { <%= className %> } from '../<%= name %>.component';

import styles from '../<%= name %>.scss';

describe('<%= className %>: Component', () => {
  const defaultProps = {
  };

  const component = (props) => (
    <<%= className %> {...defaultProps} {...props} />
  );

  it('should render <%= className %> root', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find(`.${styles.root}`)).to.have.length(1);
  });
});
