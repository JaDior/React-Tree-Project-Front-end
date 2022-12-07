import React from 'react';
import styles from './Profile.module.css';
/**
 * @name EditProfileInline
 * @description a version of the view profile where the text fields can be edited
 * @returns inputs that will record your input
 */
const EditProfileInline = ({ onChange, profileData, user }) => { // eslint-disable-line
  return (
    <div className={styles.userBox}>
      <div>
        <input
          size={(profileData.firstName.length) > 3 ? ((profileData.firstName).length - 3) : 1}
          className={styles.nameInput}
          id="firstName"
          placeholder={user.firstName !== null && user.firstName !== undefined ? user.firstName : 'User Name'}
          onChange={onChange}
          value={profileData.firstName}
        />
        <input
          size={(profileData.lastName.length) > 3 ? ((profileData.lastName).length - 3) : 1}
          className={styles.lastNameInput}
          id="lastName"
          placeholder={user.lastName !== null && user.lastName !== undefined ? user.lastName : 'User Name'}
          onChange={onChange}
          value={profileData.lastName}
        />
      </div>
      <br />
      <h3>
        Email:
        {user.email !== null && user.email !== undefined ? ` ${user.email}` : ''}
      </h3>
      <div>
        <h3>Shipping Info:</h3>
        <h4>
          Address:
          <input
            className={styles.profileInput}
            id="streetAddress"
            placeholder={user.Address !== null && user.Address !== undefined ? user.Address : ' '}
            onChange={onChange}
            value={profileData.streetAddress}
          />
        </h4>
        <h4>
          Address 2:
          <input
            className={styles.profileInput}
            id="streetAddress2"
            placeholder={user.Address2 !== null && user.Address2 !== undefined ? user.Address2 : ' '}
            onChange={onChange}
            value={profileData.streetAddress2}
          />
        </h4>
        <h4>
          City:
          <input
            className={styles.profileInput}
            id="city"
            placeholder={user.city !== null && user.city !== undefined ? user.city : ' '}
            onChange={onChange}
            value={profileData.city}
          />
        </h4>
        <h4>
          State:
          <input
            className={styles.profileInput}
            id="state"
            placeholder={user.state !== null && user.state !== undefined ? user.state : ' '}
            onChange={onChange}
            value={profileData.state}
          />
        </h4>
        <h4>
          Zip:
          <input
            className={styles.profileInput}
            id="zipCode"
            placeholder={user.zipCode !== null && user.zipCode !== undefined ? user.zipCode : ' '}
            onChange={onChange}
            value={profileData.zipCode}
          />
        </h4>
        <h4>
          Phone:
          <input
            className={styles.profileInput}
            id="phoneNumber"
            placeholder={user.phoneNumber !== null && user.phoneNumber !== undefined ? user.phoneNumber : ' '}
            onChange={onChange}
            value={profileData.phoneNumber}
          />
        </h4>
      </div>
    </div>
  );
};

export default EditProfileInline;
