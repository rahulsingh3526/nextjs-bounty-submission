import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import badgeicon1 from '../../../public/icons/SVG_margin.png';
import badgeicon2 from '../../../public/icons/SVG.png';
import quote from '../../../public/icons/SVG (1).png';
import landingPageImage from '../../../public/image 8.png';
import { AnimatedSubscribeButton } from '@/components/magicui/animated-subscribe-button';
import { CheckIcon, ChevronRightIcon } from 'lucide-react';
// import { AnimatedShinyTextDemo } from '@/components/badge-component';
import { MarqueeDemo } from '@/components/marquee-component';
import { BentoDemo } from '@/components/bento-component';
import { OrbitingCirclesDemo } from '@/components/orbiting-circles';
import { DefaultTextComponent } from '@/components/default-text-component';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const LandingPage = () => {
  return (
    <div>
      <div className=" flex flex-col items-center justify-center gap-y-2 m-10">
        {' '}
        <DefaultTextComponent
          image1={badgeicon1}
          image2={badgeicon2}
          text1="Introduction"
          text2="NextBase Ultimate Landing Page"
          text3="Welcome to Nextbase Ultimate Landing Page: Your Gateway to Innovation,
          Discover The Future of"
          text4="Excellence and Elevate Your Experience"
        />
        <div className="flex ">
          <Button variant="default" className="w-40">
            Log In
          </Button>
          <AnimatedSubscribeButton
            buttonColor="#000000"
            buttonTextColor="#ffffff"
            subscribeStatus={false}
            initialText={
              <span className="group inline-flex items-center">
                Learn More{' '}
                <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            }
            changeText={
              <span className="group inline-flex items-center">
                <CheckIcon className="mr-2 h-4 w-4" />
                Redirecting...{' '}
              </span>
            }
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={landingPageImage}
          alt="bgimage"
          className="max-w-[1104px]"
        />
      </div>
      <div className="text-center">
        <p>Trusted by 150+ companies</p>
      </div>
      <div>
        {/* <AnimatedShinyTextDemo /> */}
        <div className=" flex flex-col items-center justify-center gap-y-2 m-10">
          {' '}
          <DefaultTextComponent
            image1={badgeicon1}
            image2={badgeicon2}
            text1="Features"
            text2="Discover Next-Level Features"
            text3="Discover the ultimate insights into cutting-edge advancements.Our next-level"
            text4="Excellence and Elevate Your Experience"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mx-auto max-w-[1104px]">
        {' '}
        <BentoDemo />
      </div>
      <div className="flex flex-col justify-center items-center gap-y-4">
        <Image src={quote} alt="quote" />
        <h1 className="text-3xl">
          lorem ipsum dolor sit amet, consecterur adpiscing elit integer nex
          odio prasenet libero
        </h1>

        <div className="flex justify-center items-center gap-x-4">
          {' '}
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="semi-bold">Mark Zuckerberg</p>
          <Separator
            orientation="vertical"
            className="h-7 w-[3px] bg-neutral-500 "
          />
          <p>CEO, Facebook</p>
        </div>
      </div>

      <DefaultTextComponent
        image1={badgeicon1}
        image2={badgeicon2}
        text1="Integration"
        text2="Master Integration Like Pros"
        text3="lorem ipsum dolor sit amet, consecterur adpiscing elit "
        text4="integer nex
          odio prasenet libero"
      />

      <div className="flex justify-center items-center mx-auto max-w-[1104px]">
        {' '}
        <OrbitingCirclesDemo />
      </div>
      <MarqueeDemo />

      <div className=" flex flex-col items-center justify-center gap-y-2 m-10">
        {' '}
        <Image src={badgeicon1} alt="badge icons" />
        <h1 className="text-3xl font-semibold">
          {' '}
          Discover Next-Level Features
        </h1>
        <p className="text-[#64748B] text-center">
          Discover the ultiimate insights into cutting-edge advancements.Our
          next-level <br />
          features guide reveals the essentials for staying ahead.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
