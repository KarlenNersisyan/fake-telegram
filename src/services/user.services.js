import { db } from "../libs/firebase.libs";

export const addUser = ({ email, name, surname, uid }) => {
  return db.ref(`/users/${uid}`).set({
    email,
    name,
    surname,
    uid,
  });
};

export const getUser = () => {
  return db
    .ref()
    .child("users")
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        return { ...snapshot.val() };
      } else {
        return "No data available";
      }
    })
    .catch((error) => {
      return error;
    });
};

export const updateProfile = (uid, { description }) => {
  return db.ref("/users/").child(uid).update({
    description,
  });
};
