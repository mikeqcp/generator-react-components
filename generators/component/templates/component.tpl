import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './<%= name %>.scss';

export class <%= className %> extends PureComponent {
  static propTypes = { };

  render() {
    return (
      <div className={styles.root}>
        <%= className %> component
      </div>
    );
  }
}

