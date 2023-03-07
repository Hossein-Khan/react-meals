import React, { MouseEventHandler, useState } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

type BackdropProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
};

type ModalOverlayProps = {
  children?: React.ReactNode;
};

type ModalProps = {
  children?: React.ReactNode;
  onBackdropClick: MouseEventHandler<HTMLDivElement>;
};

const Backdrop = function (props: BackdropProps): JSX.Element {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = function (props: ModalOverlayProps): JSX.Element {
  return <div className={styles.modal}>{props.children}</div>;
};

const Modal = function (props: ModalProps): JSX.Element {
  const modalRootElement = document.getElementById(
    "modal-root"
  ) as HTMLDivElement;

  return (
    <React.Fragment>
      ReactDOM.createPortal(
      <Backdrop onClick={props.onBackdropClick} />, modalRootElement )
      ReactDOM.createPortal(
      <ModalOverlay>{props.children}</ModalOverlay>, modalRootElement )
    </React.Fragment>
  );
};

export default Modal;
