import useDb from '../../hooks/useDB';

export const loadFieldsDBActionCreator = fields => {
  return {
    type: 'LOAD_FIELDS_DB',
    payload: fields
  };
};

export const saveFieldsDBActionCreator = () => {
  return {
    type: 'SAVE_FIELDS_DB'
  };
};

export const loadFieldsDBThunk = ui => dispatch => {
  const { loadFieldsDB } = useDb();
  loadFieldsDB(ui, dispatch, loadFieldsDBActionCreator);
};

export const saveFieldsDBThunk = ui => (dispatch, getState) => {
  const { writeFieldsDB } = useDb();
  const { fields } = getState();
  writeFieldsDB(ui, fields);
};
