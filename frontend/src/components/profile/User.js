import HttpHelper from '../../utils/HttpHelper';

/**
 * @name UserInfo
 * @description grap user info after user is logged in
 * @returns User Info
 */
const UserInfo = async (setUser) => {
  const email = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${sessionStorage.getItem('token')}`)
    .then((res) => res.json())
    .then((user) => (user.email));
  const user = {};
  if (email) {
    await HttpHelper(`/users/${email}`, 'GET')
      .then((response) => response.json())
      .then((data) => {
        user.id = data.id;
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.name = `${data.firstName} ${data.lastName}`;
        user.email = data.email;
        user.streetAddress = data.streetAddress;
        user.streetAddress2 = data.streetAddress2;
        user.city = data.city;
        user.state = data.state;
        user.zipCode = data.zipCode;
        user.phoneNumber = data.phoneNumber;
      });
  }
  return (setUser(user));
};

export default UserInfo;
