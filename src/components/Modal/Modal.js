/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/static-property-placement */
import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

export default class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
  };

  backdropRef = createRef();

  state = {};

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') {
      return;
    }

    this.props.onClose();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;

    if (current && e.target !== current) {
      return;
    }

    this.props.onClose();
  };

  render() {
    const { children } = this.props;

    return (
      <div
        className={styles.overlay}
        onClick={this.handleBackdropClick}
        role="button"
        tabIndex="0"
        ref={this.backdropRef}
      >
        <div className={styles.modal}>{children}</div>
      </div>
    );
  }
}
