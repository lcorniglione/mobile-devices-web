import styled from 'styled-components';

import {typeScale} from 'styles';

export const H1 = styled.h3({
  fontSize: typeScale.header1,
  fontFamily: p => p.font || p.theme.fonts.semiBold,
  marginBottom: p => p.theme.space[0],
  color: p => p.color || p.theme.colors.black,
});

export const H3 = styled.h3({
  fontSize: typeScale.header3,
  fontFamily: p => p.font || p.theme.fonts.semiBold,
  marginBottom: p => p.theme.space[0],
  color: p => p.color || p.theme.colors.black,
});

export const H4 = styled.h4({
  fontSize: typeScale.header4,
  fontFamily: p => p.font || p.theme.fonts.light,
  marginBottom: p => p.theme.space[4],
  color: p => p.color || p.theme.colors.black,
});

export const H5 = styled.h5({
  fontSize: typeScale.header5,
  fontFamily: p => p.font || p.theme.fonts.light,
  marginBottom: p => p.theme.space[4],
  color: p => p.color || p.theme.colors.black,
});

export const Paragraph = styled.p({
  fontSize: typeScale.paragraph,
  fontFamily: p => p.font || p.theme.fonts.medium,
  lineHeight: 1.2,
  color: p => p.color || p.theme.colors.black,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: p => p.maxWidth || '100%',
});
