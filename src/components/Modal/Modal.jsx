import PropTypes from 'prop-types';
import React from 'react';
import { createPortal } from 'react-dom';

export class Modal extends React.Component {
  static propTypes = {
    descr: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.closeOnEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeOnEsc);
  }

  closeOnEsc = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.closeModal();
  };
  backdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { link, descr } = this.props;
    return createPortal(
      <div className="" onClick={this.backdropClick}>
        <div className="">
          <img src={link} alt={descr} />
        </div>
      </div>,
      document.getElementById('modal-root')
    );
  }
}

Modal.propTypes = {
  descr: PropTypes.any,
  link: PropTypes.any,
  onClose: PropTypes.func,
};
