import styled from 'styled-components/macro';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

import {Link} from './Link';

const BreadcrumbContainer = styled.div({
  width: 'auto',
  display: 'flex',
  flexDirection: 'row',
});

export function Breadcrumb() {
  const breadcrumbs = useBreadcrumbs();

  return (
    <BreadcrumbContainer>
      {breadcrumbs.map(({breadcrumb}, i) => {
        let nextChar = '/';
        if (breadcrumbs.length - 1 === i) nextChar = '';
        return (
          <Link
            key={breadcrumb.key}
            to={breadcrumb.key}
            css="margin-right: 8px"
          >
            {breadcrumb} {nextChar}
          </Link>
        );
      })}
    </BreadcrumbContainer>
  );
}
