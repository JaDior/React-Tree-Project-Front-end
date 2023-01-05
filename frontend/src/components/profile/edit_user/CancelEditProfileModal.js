import React from 'react';
import styles from './CancelEditProfileModal.module.css';
/* eslint-disable react/destructuring-assignment */
/**
 * A modal notifying the user that they are trying to leave edit profile mode
 * without saving any changes
 * @param {obj} props a obj with functions that I use for my modal buttons
 * @returns a modal the covers the screen and displays two buttons
 */
const CancelEditProfileModal = (props) => { //eslint-disable-line
  return (
    <div className={styles.overlay}>
      <div className={styles.cancelEditProfileModalBackground}>
        <div className={styles.modalContainer}>
          <h2 className="profileHeader">YOU DIDNT SAVE YOUR CHANGES!!!</h2>
          <button type="button" className={styles.backButton} onClick={props.toggleEditInfo}>Dont Save</button>
          <button type="button" className={styles.returnButton} onClick={props.toggleCancelEditModal}>Return To Editing</button>
        </div>
      </div>
    </div>
  );
};
export default CancelEditProfileModal;
