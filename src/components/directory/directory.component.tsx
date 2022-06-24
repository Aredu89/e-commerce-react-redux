import { Section } from '../../pages/homepage/homepage.types';

import MenuItem from '../menu-item/menu-item.component';

import {DirectoryMenuContainer} from './directory.styles';

const Directory = ({ sections }: { sections: Section[]}) => {
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