'use client';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 2
  }
};

type Props = {
  children: React.ReactNode;
};

export default function MultiCarousel({ children }: Props) {
  return (
    <Carousel responsive={responsive} itemClass="m-2" infinite autoPlay>
      {children}
    </Carousel>
  );
}
