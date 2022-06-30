import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationHeader = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0px;
  }
`;

export const NavigationOptions = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const NavigationOption = styled(Link)`
  padding: 10px 15px;
  &:hover {
    cursor: pointer;
  }
`;
