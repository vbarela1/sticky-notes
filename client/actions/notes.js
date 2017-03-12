import { setFlash } from './flash';

export const getNotes = () => {
  return (dispatch) => {
    $.ajax({
      url: '/api/notes',
      type: 'GET'
    }).done( notes => {
      dispatch({ type: 'NOTES', notes });
    });
  }
}

export const addNote = (title, body, tags) => {
  return (dispatch) => {
    $.ajax({
      url: '/api/notes',
      type: 'POST',
      data: { note: { title, body, tags }}
    }).done( note => {
      dispatch({ type: 'ADD_NOTE', note });
      dispatch(setFlash('Note Added', 'success'));
    });
  }
}

export const updateNote = (id, title, body, tags) => {
  return (dispatch) => {
    $.ajax({
      url: `/api/notes/${id}`,
      type: 'PUT',
      data: { note: { title, body, tags }}
    }).done( note => {
      dispatch({ type: 'UPDATE_NOTE', note });
      dispatch(setFlash('Note Updated', 'success'));
    }).fail( err => {
      dispatch(setFlash(err.errors, 'error'));
    });
  }
}

export const deleteNote = (id, router) => {
  return (dispatch) => {
    $.ajax({
      url: `/api/notes/${id}`,
      type: 'DELETE'
    }).done( () => {
      dispatch({ type: 'DELETE_NOTE', id });
      router.push('/notes');
      dispatch(setFlash('Note Deleted', 'success'));
    });
  }
}
