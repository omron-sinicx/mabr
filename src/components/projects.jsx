import React from 'react';
import { render } from 'react-dom';

const ProjectCard = ({ title, img, description, journal }) => (
  <div
    className="uk-card uk-card-default uk-grid-collapse uk-margin"
    data-uk-grid
  >
    <div className="uk-card-media-left uk-cover-container uk-width-1-3@s">
      <img src={img} alt="" data-uk-cover />
      <canvas width="200" height="200"></canvas>
    </div>
    <div className="uk-width-2-3@s">
      <div className="uk-card-body">
        <div className="uk-card-badge uk-label">{journal}</div>
        <h4 className="uk-card-title">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.projects ? (
      <div className="uk-section">
        <h2 className="uk-heading-line uk-text-center">Relevant Projects</h2>
        {this.props.projects.map((project, idx) => {
          return (
            <ProjectCard
              title={project.title}
              img={project.img}
              description={project.description}
              journal={project.journal}
            />
          );
        })}
      </div>
    ) : null;
  }
}
