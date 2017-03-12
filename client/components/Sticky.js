import React from 'react';
import { Link } from 'react-router/es6';
import { note, bigNote } from './styles.scss';

const Sticky = ({ id, title, body, tags, big }) => (
  <div className={`${note} col s12 m3 ${big ? bigNote : ''}`}>
    <Link to={`/notes/${id}`}>
      <h5 className="center">{title}</h5>
    </Link>
    <p>{body}</p>
    <div className="row">
      { tags.map( (tag, i) => {
          return (
            <div key={i} className="col s3">
              <Link to={`/tags/${tag}`}>{tag}</Link>
            </div>
          )
        })
      }
    </div>
  </div>
)

export default Sticky;
