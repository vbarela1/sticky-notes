import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import Sticky from './Sticky';

const Notes = ({ notes }) => (
  <div>
    <h3 className="center">My Notes</h3>
    <hr />
    <NoteForm />
    <div className="row">
      { notes.map( note => {
          return (<Sticky key={note.id} {...note} />)
        })
      }
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return { notes: state.notes }
}

export default connect(mapStateToProps)(Notes);
