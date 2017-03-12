import React from 'react';
import { connect } from 'react-redux';
import { addNote, updateNote } from '../actions/notes';

class NoteForm extends React.Component {
  state = { tags: [] }

  componentDidMount() {
    $('.chips-placeholder').material_chip({
      placeholder: 'Enter a tag',
      secondaryPlaceholder: '+Tag'
    });

    $('.chips').on('chip.add', (e, chip) => {
      this.setState({ tags: [chip.tag, ...this.state.tags] });
    });

    $('.chips').on('chip.delete', (e, chip) => {
      this.setState({ tags: this.state.tags.filter( t => t !== chip.tag ) })
    });

    if (this.props.note) {
      let { tags } = this.props.note;
      this.setState({ tags }, () => {
        $('.chips-initial').material_chip({
          data: tags.map( tag => { return { tag }})
        });
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { props: { dispatch }, title, body, state: { tags } } = this;
    if (this.props.note) {
      dispatch(updateNote(this.props.note.id, title.value, body.value, tags))
      this.props.toggleEdit();
    } else {
      dispatch(addNote(title.value, body.value, tags));
      this.form.reset();
      $('.chip').remove();
      this.setState({ tags: [] })
    }
  }

  render() {
    let note = this.props.note || {};
    return (
      <form className="center" onSubmit={this.handleSubmit} ref={ n => this.form = n }>
        <label>Title</label>
        <input ref={ n => this.title = n } defaultValue={note.title} placeholder="title" required />
        <label>Body</label>
        <input ref={ n => this.body = n } placeholder="body" defaultValue={note.body}/>
        <div className="chips chips-placeholder chips-initial"></div>
        <button className="btn">Submit</button>
      </form>
    )
  }
}

export default connect()(NoteForm);
