import Image from 'next/image';

export const Footer = () => {
  return (
    <div className="bg-foreground min-h-[200px] text-background">
      <div className="container">
        <div className="flex justify-between w-full">
          <div>
            <div className="flex gap-x-2">
              {' '}
              <Image src={''} alt={''} /> <p>Nextbase</p>
            </div>
            <p>Acme Inc. 123 Acme Street,London,Uk,SWAI</p>
          </div>
          <div className="flex gap-x-8 justify-center items-top">
            <div>
              <p className="uppercase">Resources</p>
              <p>Nextbase</p>
            </div>
            <div>
              <p className="uppercase">Follow Us</p>
              <p>Github </p>
              <p> Twitter</p>
            </div>
            <div>
              <p>LEGAL</p>
              <p>Privacy Policy</p>
              Terms and conditions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
