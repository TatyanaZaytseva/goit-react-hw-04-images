import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/Button/Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" className={css.button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
