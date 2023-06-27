import React from 'react';
import PropTypes from 'prop-types';

export default function Toolbar(props) {
  const { filters, selected } = props;
  const onSelectFilter = (evt) => {
    props.onSelectFilter(evt.target.innerText);
  };

  return (
    <div className="filter">
      {filters.map(filter => {
        return <div onClick={onSelectFilter} key={filter} className={(filter===selected ? filter : undefined) && "active"}>{filter}</div>
      })}
    </div>
  )
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func,
};
