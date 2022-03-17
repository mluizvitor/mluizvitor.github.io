import Zoom from 'react-medium-image-zoom';

import 'react-medium-image-zoom/dist/styles.css';
import styles from './styles.module.scss';
import { ReactNode } from 'react';
import { Grid } from '../Grid';

interface GalleryProps {
  type: 'skills' | 'portfolio';
  children: ReactNode;
}

interface ItemProps {
  noZoom: boolean;
  src: string;
  title: string;
}

export function Gallery({ type, children }: GalleryProps) {
  let containerStyle = '';

  switch (type) {
    case 'skills':
      containerStyle = styles.skillsGrid;
      break;
    case 'portfolio':
      // TODO
      break;
  }

  return <Grid className={containerStyle}>{children}</Grid>;
}

export function GalleryItem({ title, noZoom, src, ...rest }: ItemProps) {
  return (
    <figure className={styles.figureContainer} {...rest}>
      {noZoom ? (
        <img
          src={src}
          alt={title}
          height={'100%'}
          width={'100%'}
          loading={'lazy'}
        />
      ) : (
        <Zoom overlayBgColorEnd="#1a1c2880">
          <img
            src={src}
            alt={title}
            height={'100%'}
            width={'100%'}
            loading={'lazy'}
          />
        </Zoom>
      )}
      <figcaption>{title}</figcaption>
    </figure>
  );
}

// export function GalleryVideo({
//   title,
//   vidSource,
//   gridColumn,
//   gridColumnTablet,
//   gridColumnMobile,
//   height,
//   ...rest
// }) {
//   return (
//     <Video
//       gridColumn={gridColumn}
//       gridColumnTablet={gridColumnTablet}
//       gridColumnMobile={gridColumnMobile}
//     >
//       <video
//         height={window.innerHeight * 0.8}
//         width={'100%'}
//         controls
//         {...rest}
//       >
//         <source src={vidSource}></source>
//         Your browser does not support the video tag.
//       </video>
//       <caption>{title}</caption>
//     </Video>
//   );
// }
