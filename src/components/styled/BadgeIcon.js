import styled, {useTheme} from 'styled-components/macro';

import {fontBold} from 'styles/typography';
import {Paragraph} from './Titles';
import {Flex} from './Flex';

export function BadgeIcon({iconCp, count}) {
  const theme = useTheme();
  const hasCount = typeof count === 'number' && isFinite(count) && count;

  return (
    <Flex
      alignItems="center"
      css="position: relative; height: 100%; width: 28px;"
    >
      {iconCp}
      {hasCount && (
        <Flex
          alignItems="center"
          justifyContent="center"
          css="width: 22px; height: 22px; background-color: red; position: absolute; top: 10px; right: -15px; border-radius: 12px;"
        >
          <Paragraph color={theme.colors.white} font={fontBold}>
            {count}
          </Paragraph>
        </Flex>
      )}
    </Flex>
  );
}
