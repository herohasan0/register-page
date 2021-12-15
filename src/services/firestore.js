import firebase from "./firebase";

const db = firebase.firestore();
const formListRef = db.collection("user-list");

export const addData = async (data) => {
  let id;
  await formListRef
    .add({
      name: data.name,
      surname: data.surname,
      email: data.email,
      password: data.password,
      weight: data.weight,
      height: data.height,
      goal: data.goal,
      days: data.days,
      createdDate: firebase.firestore.Timestamp.now(),
    })
    .then((docs) => {
      id = docs.id;
    });

  return id;
};
