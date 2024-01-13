import React from 'react';
import { render } from 'react-dom';
import teaserImg from '../images/teaser.png';

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="uk-section">
        <img
          src={teaserImg}
          className="uk-align-center"
          width="700px"
          height=""
          alt=""
        />
        <h3 className="uk-heading-line uk-text-center">OVERVIEW</h3>
        <p>{this.props.overview}</p>
      </div>
    );
  }
}
