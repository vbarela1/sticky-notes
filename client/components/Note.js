import React from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../actions/notes';
import Sticky from './Sticky';
import NoteForm from './NoteForm';
import Loading from './Loading';

class Note extends React.Component {
  state = { edit: false }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  }

  edit = () => {
    return (<NoteForm toggleEdit={this.toggleEdit} note={this.props.note} />)
  }

  show = () => {
    let { note, dispatch, history } = this.props;
    if (note) {
      return (
        <div>
          <Sticky big={true} {...note} />
          <i onClick={this.toggleEdit} className="fa fa-2x fa-edit blue-text left" />
          <i
            onClick={ () => dispatch(deleteNote(note.id, history)) }
            className="fa fa-2x fa-trash red-text right"
          />
        </div>
      )
    } else {
      return (
        <Loading data="Note" />
      )
    }
  }

  render() {
    return (
      <div className="container">
        { this.state.edit ? this.edit() : this.show() }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { note: state.notes.find( n => n.id == props.params.id ) }
}

export default connect(mapStateToProps)(Note);
