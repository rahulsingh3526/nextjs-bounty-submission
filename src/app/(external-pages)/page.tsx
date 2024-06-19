import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import badgeicon1 from '../../../public/icons/SVG_margin.png';
import badgeicon2 from '../../../public/icons/SVG.png';
import landingPageImage from '../../../public/image 8.png';
import { AnimatedSubscribeButton } from '@/components/magicui/animated-subscribe-button';
import { CheckIcon, ChevronRightIcon } from 'lucide-react';
// import { AnimatedShinyTextDemo } from '@/components/badge-component';
import { MarqueeDemo } from '@/components/marquee-component';
import { BentoDemo } from '@/components/bento-component';

const LandingPage = () => {
  return (
    <div>
      <div className=" flex flex-col items-center justify-center gap-y-2 m-10">
        {' '}
        <div className="flex justify-center items-center">
          {' '}
          <Badge variant="secondary" className="rounded-full gap-x-1">
            <Image src={badgeicon1} alt="badge icons" />
            <p> Introduction</p>
            <Image src={badgeicon2} alt="badge icons" />
          </Badge>
        </div>
        <h1 className="text-3xl font-semibold">
          {' '}
          NextBase Ultimate Landing Page
        </h1>
        <p className="text-[#64748B] text-center">
          Welcome to Nextbase Ultimate Landing Page: Your Gateway to Innovation,
          Discover The Future of <br />
          Excellence and Elevate Your Experience
        </p>
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

      <div>
        <p>Trusted by 150+ companies</p>
      </div>
      <div>
        {/* <AnimatedShinyTextDemo /> */}
        <div className=" flex flex-col items-center justify-center gap-y-2 m-10">
          {' '}
          <div className="flex justify-center items-center">
            {' '}
            <Badge variant="secondary" className="rounded-full gap-x-1">
              <Image src={badgeicon1} alt="badge icons" />
              <p> Introduction</p>
              <Image src={badgeicon2} alt="badge icons" />
            </Badge>
          </div>
          <h1 className="text-3xl font-semibold">
            {' '}
            NextBase Ultimate Landing Page
          </h1>
          <p className="text-[#64748B] text-center">
            Welcome to Nextbase Ultimate Landing Page: Your Gateway to
            Innovation, Discover The Future of <br />
            Excellence and Elevate Your Experience
          </p>
        </div>
      </div>
      <MarqueeDemo />
      <div className="flex justify-center items-center mx-auto max-w-[1104px]">
        {' '}
        <BentoDemo />
      </div>
    </div>
  );
};

export default LandingPage;
