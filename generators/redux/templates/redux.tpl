import { createActions, createReducer } from 'reduxsauce';
import { Record, List, fromJS } from 'immutable';

export const { Types: <%=className%>Types, Creators: <%=className%>Actions } = createActions({
  fetch: ['language'],
  fetchSuccess: ['data'],
  fetchError: ['payload'],
}, { prefix: '<%=prefix%>_' });

const <%=className%>Record = new Record({
});

export const INITIAL_STATE = new <%=className%>Record({});

export const reducer = createReducer(INITIAL_STATE, {
});
