import { PropTypes } from 'prop-types'
import styled, { css } from 'styled-components'

import { Box } from '../../foundation/layout/Box/index'

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scroll;
  z-index: 1000;
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `
  }}
`

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={event => {
        const isSafeArea = event.target.closest('[data-modal-safe-area="true"]')
        // isOpen = false;
        if (!isSafeArea) {
          onClose()
        }
      }}
    >
      {children({
        'data-modal-safe-area': 'true'
      })}
    </ModalWrapper>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Modal
