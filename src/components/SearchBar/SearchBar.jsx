import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

import css from 'components/SearchBar/SearchBar.module.css';

export function SearchBar({ onSubmit }) {
  const [imageName, setImageName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (imageName.trim() === '') {
      toast.error('Введіть назву у пошуку');
      return;
    }

    onSubmit(imageName);
    setImageName('');
  };

  const handleInputChange = event => {
    setImageName(event.currentTarget.value.toLowerCase());
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <ImSearch />
        </button>

        <input
          className={css.input}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
          value={imageName}
        />
      </form>
    </header>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
