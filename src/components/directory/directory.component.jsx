import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import {DirectoryMenuContainer} from './directory.styles.jsx';

const Directory = ({ sections }) => {
  return (
  <DirectoryMenuContainer>
    {
      sections.map(({id, ...section}) => (
        <MenuItem key={id} {...section} />
      ))
    }
  </DirectoryMenuContainer>
)};

export default Directory;