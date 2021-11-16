import styled from 'styled-components';

const ImageHolder = styled.div({
  width: p => (p.width || 200) + 'px',
  height: p => (p.height || 300) + 'px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: `url(${process.env.PUBLIC_URL}/placeholder.jpg)`,
});

export function ImagePlaceholder({children, ...props}) {
  return <ImageHolder {...props}>{children}</ImageHolder>;
}
