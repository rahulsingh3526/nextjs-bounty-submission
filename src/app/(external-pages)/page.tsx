import React from 'react';
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
import LetterPullup from '@/components/magicui/letter-pullup';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import TextReveal from '@/components/magicui/text-reveal';

const LandingPage = () => {
  const array = [1, 2, 3, 4];
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
        <div className="flex space-x-2">
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
        <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg bg-white dark:bg-black">
          <LetterPullup
            words={'Magic UI will change the way you design.'}
            delay={0.05}
          />
          ;
        </div>

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

      <div className="flex flex-col items-center justify-center gap-y-2 m-10">
        <div className="flex justify-center items-center"> </div>
        <h1 className="text-3xl font-semibold"> Dont take our word for it</h1>
        <p className="text-[#64748B] text-center">
          <span>
            Hear what our satisfied customers have to say about Nextbase
          </span>
        </p>
      </div>

      <MarqueeDemo />

      <DefaultTextComponent
        image1={badgeicon1}
        image2={badgeicon2}
        text1="Pricing"
        text2="Quality without any compormise"
        text3="CI/CD streamlines feature delivery , scalable infrastructre ensurees global"
        text4=" edge optimisation and app monitoring capanilities for a peak sit performance"
      />

      <DefaultTextComponent
        image1={badgeicon1}
        image2={badgeicon2}
        text1="FAQ"
        text2="Frequently asked questions"
        text3="Get detailed answers to common questions edge optimisation and app"
        text4="monitoring capanilities for a peak sit performance"
      />
      <div className="mx-auto flex justify-center items-center flex-col gap-y-1">
        {array.map((data, index) => (
          <Accordion key={index} type="single" collapsible>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger> What is this styled with</AccordionTrigger>
              <AccordionContent>
                Magic UI uses shadcn and framer-motion
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>

      <DefaultTextComponent
        image1={badgeicon1}
        image2={badgeicon2}
        text1="Start your journey..."
        text2="Ready to move with ultimate"
        text3="CI/CD streamlines feature delivery , scalable infrastructre ensurees global"
        text4="monitoring capanilities for a peak sit performance"
      />
    </div>
  );
};

export default LandingPage;
