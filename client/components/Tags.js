import React from 'react';
import { connect } from 'react-redux';
import Sticky from './Sticky';

const Tags = ({ notes, params }) => (
  <div className="row">
    <h3 className="center">{`Tag: ${params.tag}`}</h3>
    { notes.map( note => {
        return (<Sticky key={note.id} {...note} />)
      })
    }
  </div>
)

const mapStateToProps = (state, props) => {
  return {
    notes: state.notes.filter( n => n.tags.find( t => t === props.params.tag ))
  }
}

export default connect(mapStateToProps)(Tags);
