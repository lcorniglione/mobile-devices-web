import {cloneElement} from 'react';
import styled from 'styled-components';

import {Flex} from './Flex';

export const Form = styled.form({});

const FormElementContainer = styled.div({
  width: '100%',
});

const FormError = styled.div({
  color: 'red',
  alignSelf: 'flex-end',
  padding: '6px 0 0px 0',
});

export function FormElement({children, error}) {
  return (
    <FormElementContainer>
      <Flex direction="column">
        {cloneElement(children, {error})}
        {error && <FormError>{error.message}</FormError>}
      </Flex>
    </FormElementContainer>
  );
}
