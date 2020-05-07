import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ items }) => (
  <main className={styles.main}>
    <ul className={styles.imageGallery}>
      {items.map(item => (
        // <li key={item.id} className={styles.item}>
        //   <img src={item.previewURL} alt={item.tags} className={styles.image} />
        // </li>
        <ImageGalleryItem key={item.id} item={item} />
      ))}
    </ul>
  </main>
);

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired }))
    .isRequired,
};

export default ImageGallery;
