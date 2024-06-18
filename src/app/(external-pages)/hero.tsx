import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import LinkBadge from './_components/link-badge';
import HeroImage from '/public/images/hero.jpeg';

export default function Hero() {
  return (
    <section className=" py-10 lg:py-20 text-left lg:text-center max-w-5xl mx-auto  min-h-dvh">
      <div className="flex flex-col  gap-10 w-full">
        <div className="space-y-4 flex flex-col  lg:items-center  flex-1">
          <LinkBadge
            icon={<Sparkles strokeWidth={2} size={16} />}
            text="Introducing"
          />
          <h1 className="font-semibold text-3xl lg:text-4xl">
            Nextbase Ultimate Landing Page
          </h1>
          <p className="text-slate-500 dark:text-slate-400 leading-loose max-w-prose">
            Welcome to Nextbase Ultimate Landing Page: Your Gateway to
            Innovation. Discover the Future of Excellence and Elevate Your
            Experience.
          </p>
          <div className="flex items-center max-w-md w-full  gap-3 pt-2 ">
            <Button className="lg:w-full">
              Log In
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button className="lg:w-full" variant={'secondary'}>
              Learn More
              <ChevronRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
        <div className="rounded-md border-2 flex-1 overflow-hidden border-border shadow-sm">
          <Image
            alt="Hero Image"
            src={HeroImage}
            className="overflow-hidden h-[500px] max-h-[500px]  object-cover"
          />
        </div>
      </div>
    </section>
  );
}
