import React from 'react';
import { Badge } from './ui/badge';
import Image, { StaticImageData } from 'next/image';

// const data = [
//   {
//     text1: 'NextBase Ultimate Landing Page',
//     text2:
//       'Welcome to Nextbase Ultimate Landing Page: Your Gateway to Innovation, Discover The Future of',
//     text3: 'Excellence and Elevate Your Experience',
//   },
// ];

interface Props {
  image1: StaticImageData;
  image2: StaticImageData;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
}

export const DefaultTextComponent = ({
  image1,
  image2,
  text1,
  text2,
  text3,
  text4,
}: Props) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-y-2 m-10">
        <div className="flex justify-center items-center">
          {' '}
          <Badge variant="secondary" className="rounded-full gap-x-1">
            <Image src={image1} alt="badge icons" />
            <p> {text1}</p>
            <Image src={image2} alt="badge icons" />
          </Badge>
        </div>
        <h1 className="text-3xl font-semibold"> {text2}</h1>
        <p className="text-[#64748B] text-center">
          <span>{text3} </span>
          <br />
          <span>{text4}</span>
        </p>
      </div>
    </div>
  );
};
