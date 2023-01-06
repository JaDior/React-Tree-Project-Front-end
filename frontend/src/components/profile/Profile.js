import React, { useEffect, useState, useContext } from 'react';
import EditProfileInline from './edit_user/EditProfileInline';
import editUser from './edit_user/EditUser';
import styles from './Profile.module.css';
import CancelEditProfileModal from './edit_user/CancelEditProfileModal';
import getUser from './GetUser';
import { UserContext } from '../../context/UserContext';
import CreateTreeModal from '../create_tree/CreateTreeModal';
/**
 * @name Profile
 * @description user profile page
 * @returns profile
 */

const Profile = ({toggleEffect, setToggleEffect }) => {
  const [user, setUser] = useState({ username: "", email: "", full_name: "" });
  const [apiError, setApiError] = useState();
  const [editProfileInfo, setEditProfileInfo] = useState(false);
  const [showCancelEditModal, setShowCancelEditModal] = useState(false);
  const [showTreeForm, setShowTreeForm] = useState(false);
  const [token] = useContext(UserContext);


  useEffect(() => {
    getUser(setUser, token, setApiError)
  }, [])


  const onProfileChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };


  const toggleCreateTreeForm = () => {
    setShowTreeForm(!showTreeForm);
  }

  const toggleEditInfo = () => {
    setEditProfileInfo(!editProfileInfo);
    setShowCancelEditModal(false);
  };


  const toggleCancelEditModal = () => {
    setShowCancelEditModal(!showCancelEditModal);
  };


  const saveProfileInfo = () => {
    setEditProfileInfo(!editProfileInfo);
    editUser(token, user, setUser, setApiError);
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
      {!apiError ? <div /> : <h2 className={styles.error}>{apiError}</h2>}
      {!editProfileInfo ? (
        <div className={styles.profile}>
          <div className={styles.userBox}>
            <h4>
              Username:
              <input
                disabled
                className={styles.profileDisplay}
                value={`${user.username !== null && user.username !== undefined ? user.username : ' '}`}
              />
            </h4>
            <h4>
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
          <div className={styles.buttonBar}>
            <button type="button" className={styles.standardButton} onClick={toggleEditInfo}>Edit</button>
            <button type="button" className={styles.standardButton} onClick={toggleCreateTreeForm}>Create Tree</button>
          </div>
        </div>
      )
        : (
          <div className={styles.profile}>
            {showCancelEditModal ? (<CancelEditProfileModal toggleCancelEditModal={toggleCancelEditModal} toggleEditInfo={toggleEditInfo}/>) : <div />}
            <EditProfileInline onChange={onProfileChange} profileData={user} user={user} />
            <button type="button" className={styles.backButton} onClick={toggleCancelEditModal}>Back</button>
            <button type="button" className={styles.edit} onClick={saveProfileInfo}>Save</button>
          </div>
        )}
      <div>
        {showTreeForm ? <CreateTreeModal toggleCreateTreeForm={toggleCreateTreeForm} />: <div />}
      </div>
    </div>
  );
};
export default Profile;
