import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectList(props) {
  const { projects } = props;
  const projectColumn = [];
  const columns = 3;
  const lengthArr = Math.round(projects.length / columns);
  for (let i = 0; i < columns; i += 1) {
    projectColumn.push(projects.slice(lengthArr * i, lengthArr * (i + 1)));
  }

  return (
    <div className="project-list">
      {projectColumn.map(column => <div className="column" key={projectColumn.indexOf(column)}>
        {column.map(src => <img src={src.img} key={src.id} />)}
      </div>)}
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
};
