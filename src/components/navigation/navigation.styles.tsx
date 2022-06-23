import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationHeader = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  display: flex;
  align-items: center;
`;

export const NavigationOptions = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavigationOption = styled(Link)`
  padding: 10px 15px;
  &:hover {
    cursor: pointer;
  }
`;