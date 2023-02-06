import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const bgColor1 = { backgroundColor: '#f5f5f5ab' };
  const bgColor2 = { backgroundColor: '#deb5b545' };
  let bgColor = undefined;
  let content = undefined;

  if (isHeader === true) {
    bgColor = bgColor2;
    if (textSecondCell === null) {
      content = <th colSpan='2'>{textFirstCell}</th>;
    } else {
      content = (
        <Fragment>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </Fragment>
      );
    }
  }
  if (isHeader === false) {
    bgColor = bgColor1;
    content = (
      <Fragment>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </Fragment>
    );
  }

  return <tr style={bgColor}>{content}</tr>;
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
