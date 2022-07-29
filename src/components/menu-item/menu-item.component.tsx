import { useNavigate } from 'react-router-dom';

import {
  MenuItemContiner,
  BackgroundImage,
  Content,
  Title,
  SubTitle,
} from './menu-item.styles';

import { MenuItemProps } from './menu-item.types';

const MenuItem = ({
  title,
  imageUrl,
  linkUrl,
  size,
}: MenuItemProps) => {
  const navigate = useNavigate();
  return (
    <MenuItemContiner onClick={()=> navigate(`${linkUrl}`)} size={size}>
      <BackgroundImage
        src={imageUrl}
        alt='Category image'
      />
      <Content>
        <Title>{ title.toUpperCase() }</Title>
        <SubTitle>SHOP NOW</SubTitle>
      </Content>
    </MenuItemContiner>
  )
};

export default MenuItem;