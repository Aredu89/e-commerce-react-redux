import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) => {
  return (
  <div className='directory-menu'>
    {
      sections.map(({id, ...section}) => (
        <MenuItem key={id} {...section} />
      ))
    }
  </div>
)};

export default Directory;