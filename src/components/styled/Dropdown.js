import {forwardRef} from 'react';
import styled from 'styled-components';

import {Paragraph} from './Titles';
import {Flex} from './Flex';

export const Select = styled.select({
  maxWidth: '50%',
  height: '100%',
  padding: p => p.theme.space[1],
  backgroundColor: p => p.theme.colors.white,
  borderRadius: 5,
  border: p => `2px solid ${p.hasError ? 'red' : p.theme.colors.primary}`,

  '&:focus': {
    border: p => `2px solid ${p.theme.colors.accent}`,
  },
});

export function Option({selected, value, ...props}) {
  return (
    <option selected={selected} {...props}>
      {value}
    </option>
  );
}

export const Dropdown = forwardRef(
  ({label, children, error, id, ...props}, ref) => {
    const hasError = typeof error !== 'undefined';

    return (
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <Paragraph htmlFor={id}>{label}</Paragraph>
        <Select id={id} name={id} hasError={hasError} ref={ref} {...props}>
          {children}
        </Select>
      </Flex>
    );
  },
);
