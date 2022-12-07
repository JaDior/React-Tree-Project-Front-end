import React, { useState } from 'react';
import EditProfileInline from './EditProfileInline';
import editUser from './EditProfileService';
import styles from './Profile.module.css';
import CancelEditProfileModal from './CancelEditProfileModal';
/**
 * @name Profile
 * @description user profile page
 * @returns profile
 */

const Profile = ({ user, toggleEffect, setToggleEffect }) => {
  const [profileData, setProfileData] = useState({Username: "", Email: "", Full_Name: ""});
  const [editProfileInfo, setEditProfileInfo] = useState(false);
  const [showCancelEditModal, setShowCancelEditModal] = useState(false);

  const onProfileChange = (e) => {
    setProfileData({ ...profileData, [e.target.id]: e.target.value });
  };

  const toggleEditInfo = () => {
    setEditProfileInfo(!editProfileInfo);
    setShowCancelEditModal(false);
    setProfileData({ ...user });
  };

  const toggleCancelEditModal = () => {
    setShowCancelEditModal(!showCancelEditModal);
  };

  const saveProfileInfo = () => {
    setEditProfileInfo(!editProfileInfo);
    editUser(profileData);
    setToggleEffect(!toggleEffect);
  };

  const getInputLength = (string) => {
    if (string.length > 2) {
      return string.length - 3;
    }
    return 1;
  };

  return (
    <div>
      {!editProfileInfo ? (
        <div className={styles.profile}>
          <div className={styles.userBox}>
            <br />
            <div>
              <h4>
                Username:
                <input
                  disabled
                  className={styles.profileDisplay}
                  value={`${user.username !== null && user.username !== undefined ? user.username : ' '}`}
                />
              </h4>
              <h4 style={{ display: user.streetAddress2 ? 'block' : 'none' }}>
                Email:
                <input
                  disabled
                  className={styles.profileDisplay}
                  value={`${user.email}`}
                />
              </h4>
              <h4>
                Full Name:
                <input
                  disabled
                  className={styles.profileDisplay}
                  value={`${user.full_name !== null && user.full_name !== undefined ? user.full_name : ' '}`}
                />
              </h4>
            </div>
          </div>
          <button type="button" className={styles.edit} onClick={toggleEditInfo}>Edit</button>
        </div>
      )
        : (
          <div className={styles.profile}>
            {showCancelEditModal
              ? (
                <CancelEditProfileModal
                  toggleCancelEditModal={toggleCancelEditModal}
                  toggleEditInfo={toggleEditInfo}
                />
              )
              : <div />}
            <EditProfileInline onChange={onProfileChange} profileData={profileData} user={user} />
            <button type="button" className={styles.backButton} onClick={toggleCancelEditModal}>Back</button>
            <button type="button" className={styles.edit} onClick={saveProfileInfo}>Save</button>
          </div>
        )}
    </div>
  );
};
export default Profile;
