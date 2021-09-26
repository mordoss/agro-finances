import Firebase from '../config/firebase';

const useDB = () => {
  const writeFieldsDB = (user, data) => {
    Firebase.database()
      .ref(`${user}/`)
      .set({
        ...data
      });
  };

  return { writeFieldsDB };
};

export default useDB;
