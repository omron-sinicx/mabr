import React from 'react';
import { render } from 'react-dom';

import { marked } from 'marked';
import markedKatex from 'marked-katex-extension';
marked.use(markedKatex({ throwOnError: false }));

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="uk-section">
        <img
          src={require('../images/' + this.props.teaser)}
          className="uk-align-center uk-responsive-width"
          alt=""
          width="750px"
        />
        {this.props.description && (
          <p className="uk-text-secondary uk-text-center uk-margin-bottom">
            <span className="uk-label uk-label-primary uk-text-center uk-text-bold">
              TL;DR
            </span>{' '}
            <span className="uk-text-secondary">{this.props.description}</span>
          </p>
        )}
        <h2 className="uk-heading-line uk-text-center">Overview</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: marked.parse(this.props.overview),
          }}
        />
      </div>
    );
  }
}
