/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';

export default class ImageGalleryItem extends Component {
  // eslint-disable-next-line react/static-property-placement
  propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      previewURL: PropTypes.string.isRequired,
      fullViewURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { item } = this.props;
    const { id, previewURL, fullViewURL, tags } = item;
    const { showModal } = this.state;

    return (
      <>
        <li key={id} className={styles.item}>
          <img
            src={previewURL}
            alt={tags}
            className={styles.image}
            onClick={this.openModal}
          />

          {showModal && (
            <Modal onClose={this.closeModal}>
              <img src={fullViewURL} alt={tags} />
            </Modal>
          )}
        </li>
      </>
    );
  }
}
