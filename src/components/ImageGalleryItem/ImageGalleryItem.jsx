import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'components/Modal/Modal';
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

export function ImageGalleryItem({ smallImage, largeImage, tag }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalKeydown = e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('keydown', onModalKeydown);
    } else window.removeEventListener('keydown', onModalKeydown);
  });

  return (
    <li className={css.gallery_item}>
      <img
        src={smallImage}
        alt={tag}
        className={css.gallery_image}
        onClick={openModal}
      />
      {isModalOpen && (
        <Modal largeImage={largeImage} tag={tag} onModalClose={closeModal} />
      )}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  item: PropTypes.object,
};
