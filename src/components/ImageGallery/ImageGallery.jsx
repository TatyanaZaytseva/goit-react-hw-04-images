import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import css from 'components/ImageGallery/ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { request } from '../../api/request';
import toast from 'react-hot-toast';

export function ImageGallery({ imageName, setStatus, page }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([]);
  }, [imageName]);

  useEffect(() => {
    if (imageName === '') return;
    setStatus('loading');
    try {
      request(imageName, setStatus, page).then(data => {
        console.log(data);
        if (data.hits.length < 1) {
          setStatus('rejected');
          toast.error('Результатів пошуку за даним запитом не знайдено');
        } else {
          setStatus('resolved');
        }
        setImages(prevImages => [...prevImages, ...data.hits]);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [imageName, page, setStatus]);

  return (
    images.length > 0 && (
      <ul className={css.gallery}>
        {images.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              id={image.id}
              smallImage={image.webformatURL}
              largeImage={image.largeImageURL}
              tag={image.tag}
            />
          );
        })}
      </ul>
    )
  );
}

ImageGallery.propTypes = {
  page: PropTypes.number.isRequired,
  setStatus: PropTypes.func.isRequired,
};
