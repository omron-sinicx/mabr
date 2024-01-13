import React from 'react';
import { render } from 'react-dom';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="uk-text-center uk-text-meta">
        <a href="https://www.omron.com/sinicx/" target="_blank">
          <span>© 2023 OMRON SINIC X Corporation, all rights reserved.</span>
        </a>
      </div>
    );
  }
}
