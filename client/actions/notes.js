export const getNotes = () => {
  return (dispatch) => {
    $.ajax({
      url: '/api/notes',
      type: 'GET'
    }).done( notes => {
      dispatch ({ type: 'NOTES', notes })
    });
  }
}

export const addNote = (title, body, tags) => {
  return(dispatch) => {
    $.ajax({
      url: '/api/notes',
      type: 'POST',
      data: { note: {title, body, tags }}
    }).done( note =>{
      dispatch({ type: 'ADD_NOTE', note });
    });
  }
}

export const updateNote = (id, title, body, tags) => {
  return(dispatch) => {
    $.ajax({
      url: `/api/notes/${id}`,
      type: 'PUT',
      data:{ note: {title, body, tags }}
  }).done( note => {
    dispatch({ type: 'UPDATE_NOTE', note });
  });
 }
}

export const deleteNote = (id) => {
  return (dispatch) => {
    $.ajax({
      url: `api/note/${id}`,
      type: 'DELETE',
    }).done ( () => {
      dispatch({ type: 'DELETE_NOTE', id });
    });
  }
}
