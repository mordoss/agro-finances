import Firebase from '../config/firebase';

const useDB = () => {
  const db = Firebase.database();

  const writeFieldsDB = (user, data) => {
    db.ref(`${user}/`).set({
      ...data
    });
  };

  const loadFieldsDB = (user, dispatch, actionCreator) => {
    db.ref(`${user}/`).once('value', snapshot => {
      const data = snapshot.val();
      dispatch(actionCreator(data));
    });
  };

  return { writeFieldsDB, loadFieldsDB };
};

export default useDB;
