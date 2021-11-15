import styled from 'styled-components';

import {fontSemiBold} from 'styles';

const Button = styled.button({
  padding: p =>
    `${p.theme.space[1]} ${p.theme.space[0]} ${p.theme.space[1]} ${p.theme.space[0]}`,
  cursor: 'pointer',
  transition: 'background-color 0.2s linear, color 0.2s linear',
  minWidth: 100,
  fontFamily: fontSemiBold,
  borderRadius: 10,
});

export const PrimaryButton = styled(Button)({
  color: p => p.theme.colors.white,
  backgroundColor: p => p.theme.colors.primary600,

  '&:hover': {
    backgroundColor: p => p.theme.colors.primary,
    color: p => p.theme.colors.white,
  },

  '&:focus': {
    outline: p => `2px solid ${p.theme.colors.primary600}`,
    outlineOffset: 2,
  },

  '&:active': {
    backgroundColor: p => p.theme.colors.primary300,
    borderColor: p => p.theme.colors.primary300,
    color: p => p.theme.colors.black,
  },
});
