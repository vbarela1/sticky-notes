import React from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions/notes';
import spinner from '../images/spinner.gif';

class SetNotes extends React.Component {
  componentDidMount () {
    this.props.dispatch(getNotes());
  }
  render (){
    return (
      <div>
        { this.props.notes ?
          this.props.children :
        <div className='center'>
          <h3 className='center'>Loading</h3>
          <br />
          <img src={spinner} />
        </div>
      }
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{ notes: state.notes }
}

export default connect(mapStateToProps)(SetNotes);
