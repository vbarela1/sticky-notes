import React from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions/notes';
import Loading from './Loading';

class SetNotes extends React.Component {
  componentDidMount() {
    this.props.dispatch(getNotes());
  }

  render() {
    return (
      <div>
        { this.props.notes ?
          this.props.children :
          <Loading data="Notes" />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { notes: state.notes }
}

export default connect(mapStateToProps)(SetNotes);
