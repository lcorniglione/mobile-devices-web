import styled from 'styled-components';

import * as mq from 'styles/mediaQueries';

export const Container = styled.div({
  paddingTop: p => p.theme.space[5],
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  [mq.small]: {
    width: '90%',
  },
  [mq.medium]: {
    width: '90%',
  },
});
