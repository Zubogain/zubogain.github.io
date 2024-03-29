/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/require-default-props */
import React, { PropsWithChildren, useCallback, useEffect, useId } from 'react'
import {
  AnimatePresence,
  AnimationProps,
  motion,
  useReducedMotion,
} from 'framer-motion'
import Image from 'next/image'
import cn from 'classnames'
import {
  defaultModalAnimation,
  defaultModalBackdropAnimation,
} from '@Libs/animation'
import ClientSidePortal from '@Components/ClientSidePortal'
import CrossSvg from '@Public/cross.svg'

type ModalProps = PropsWithChildren<{
  isVisible: boolean // Modal visibility
  heading: string // Modal headings
  onClickCloseBtn: (e: React.MouseEvent) => void // Callback when the close button is clicked
  onClickBackdrop?: (e: React.MouseEvent) => void // Callback when the backdrop is clicked
  onPressEscKey?: (e: KeyboardEvent) => void // Callback when the ESC key is clicked
  modalClassName?: string // Additional class for the modal
  animation?: AnimationProps // Alternative modal animation, type imported from framer-motion
  backdropAnimation?: AnimationProps // Alternative backdrop animation, type imported from framer-motion
}>

const Modal: React.FC<ModalProps> = ({
  isVisible,
  heading,
  onClickCloseBtn,
  onClickBackdrop = () => null,
  onPressEscKey = () => null,
  modalClassName,
  animation = defaultModalAnimation,
  backdropAnimation = defaultModalBackdropAnimation,
  children,
}) => {
  // A hook that returns `true` if the current device has Reduced Motion setting enabled
  const shouldReduceMotion = useReducedMotion()

  // Tip: Adding support for the Tab key is very welcome and user-friendly

  // headingId is used to set the "aria-labelledby" attribute of the modal dialog element
  const headingId = useId()

  // Combine the modal class names from the props and the default class names
  const modalMainClassName = cn('modal', modalClassName)

  const modalAnimation = shouldReduceMotion ? {} : animation
  const modalBackdropAnimation = shouldReduceMotion ? {} : backdropAnimation

  // When the user press the ESC key, onPressEscKey will be called
  const handleWindowKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onPressEscKey(e)
      }
    },
    [onPressEscKey],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleWindowKeyDown)
    return () => window.removeEventListener('keydown', handleWindowKeyDown)
  }, [handleWindowKeyDown])

  // A good practice is to render the Modal inside the React portal
  return (
    <ClientSidePortal>
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.div
              key="modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby={headingId}
              {...modalAnimation}
              className={modalMainClassName}
            >
              <button
                type="button"
                className="modal__close-modal-btn"
                onClick={onClickCloseBtn}
              >
                <Image src={CrossSvg} alt="" width={16} height={16} />
                <span className="sr-only">Close</span>
              </button>

              <div className="modal__header">
                <h2 id={headingId} className="modal__heading">
                  {heading}
                </h2>
              </div>

              <div className="modal__content">{children}</div>
            </motion.div>

            <motion.div
              key="modal-backdrop"
              {...modalBackdropAnimation}
              onClick={onClickBackdrop}
              className="modal__backdrop"
            />
          </>
        )}
      </AnimatePresence>
    </ClientSidePortal>
  )
}

export type { ModalProps }

export default Modal
