import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  MenuItemContiner,
  BackgroundImage,
  Content,
  Title,
  SubTitle,
} from './menu-item.styles.jsx';

const MenuItem = ({
  title,
  imageUrl,
  linkUrl,
  size,
}) => {
  const navigate = useNavigate();
  return (
    <MenuItemContiner onClick={()=> navigate(`${linkUrl}`)} size={size}>
      <BackgroundImage
        imageUrl={imageUrl}
      />
      <Content>
        <Title>{ title.toUpperCase() }</Title>
        <SubTitle>SHOP NOW</SubTitle>
      </Content>
    </MenuItemContiner>
  )
};

export default MenuItem;