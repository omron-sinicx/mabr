import React from 'react';
import { render } from 'react-dom';

export default class Citation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="uk-section">
        <h3 className="uk-heading-line uk-text-center">CITATION</h3>
        <pre>
          <code>{this.props.bibtex}</code>
        </pre>
      </div>
    );
  }
}
