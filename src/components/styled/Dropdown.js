import styled from 'styled-components';

import {Paragraph} from './Titles';

export const Select = styled.select({
  maxWidth: '50%',
  height: '100%',
  padding: p => p.theme.space[2],
});

export const StyledOption = styled.option({
  color: p => (p.selected ? 'lightgrey' : 'black'),
});

export function Option({selected, value}) {
  return <StyledOption selected={selected}>{value}</StyledOption>;
}

export function Dropdown({label, children}) {
  return (
    <>
      <Paragraph htmlFor="services">{label}</Paragraph>
      <Select id="services" name="services">
        {children}
      </Select>
    </>
  );
}
