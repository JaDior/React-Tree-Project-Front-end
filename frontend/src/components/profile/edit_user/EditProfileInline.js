import React from 'react';
import styles from '../Profile.module.css';
/**
 * @name EditProfileInline
 * @description a version of the view profile where the text fields can be edited
 * @returns inputs that will record your input
 */
const EditProfileInline = ({ onChange, user, usernameError }) => { // eslint-disable-line
  return (
    <div className={styles.userBox}>
      <h4>
        {usernameError ? <p>This username is already taken or too short</p> : <></>}
          Username:
          <input
            className={styles.profileInput}
            id="username"
            placeholder={user.username !== null && user.username !== undefined ? user.username : ' '}
            onChange={onChange}
            value={user.username}
          />
        </h4>
        <h4>
          Email:
          <input
            className={styles.profileInput}
            id="email"
            placeholder={user.email !== null && user.email !== undefined ? user.email : ' '}
            onChange={onChange}
            value={user.email}
          />
        </h4>
        <h4>
          Full Name:
          <input
            className={styles.profileInput}
            id="full_name"
            placeholder={user.full_name !== null && user.full_name !== undefined ? user.full_name : ' '}
            onChange={onChange}
            value={user.full_name}
          />
        </h4>
    </div>
  );
};

export default EditProfileInline;
