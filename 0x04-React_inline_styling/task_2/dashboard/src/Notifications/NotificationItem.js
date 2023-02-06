import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    const color = css(type === 'urgent' ? styles.urgent : styles.default);
    let li;

    value
      ? (li = (
          <li
            className={color}
            data-notification-type={type}
            onClick={() => markAsRead(id)}
          >
            {value}
          </li>
        ))
      : (li = (
          <li
            className={color}
            data-notification-type={type}
            dangerouslySetInnerHTML={html}
            onClick={() => markAsRead(id)}
          ></li>
        ));

    return li;
  }
}

NotificationItem.defaultProps = {
  type: 'default',
  html: {},
  value: '',
  markAsRead: () => {},
  id: NaN,
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },

  urgent: {
    color: 'red',
  },
});

export default NotificationItem;
