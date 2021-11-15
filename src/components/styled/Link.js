import styled from 'styled-components';
import {Link as RouterLink} from 'react-router-dom';

import {typeScale} from 'styles';
import {Header} from 'components/styled';

export const Link = styled(RouterLink)`
  text-decoration: none;
  font-family: ${p => p.theme.fonts.semiBold};

  font-size: ${typeScale.header5};
  color: ${p => p.color || p.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    color: ${p => p.theme.colors.accent};
  }

  ${Header} & {
    letter-spacing: 1px;
  }
`;
