import React from 'react';
import {render} from 'react-dom';

export default class Authors extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    const columnMaxLen = this.props.authors.length > 4 ? 3 : this.props.authors.length;
    const authorClass = `uk-width-1-${columnMaxLen} uk-width-1-${this.props.authors.length}@m`;
    const affliationClass = `uk-width-1-${this.props.affiliations.length} uk-margin-small-top`
    return (
      <div>
        <div className="uk-text-primary uk-text-center uk-flex-center uk-grid-collapse" data-uk-grid>
          {this.props.authors.map((author)=>{ return <span className={authorClass}><a target="_blank" className="uk-link-toggle" href={author.url}>{author.name}</a><sup>{author.affiliation.join(',')}</sup></span> })}
        </div>
        <div className="uk-text-meta uk-text-center uk-grid-collapse" data-uk-grid>
          {this.props.affiliations.map((affiliation,idx)=>{ return <span className={affliationClass}><sup>{idx+1}</sup>{affiliation}</span>})}
          <span className="uk-width-1-1">{this.props.meta}</span>
        </div>
      </div>
    );
  }
}
