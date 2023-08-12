import AppConst from '@config/app.const';
import Image from 'next/image';
import React from 'react';

interface RequestCallProps {
  openCRform?(): void;
}

const RequestCall: React.FC<RequestCallProps> = ({
  openCRform
}: RequestCallProps) => {
  return (
    <div className='app-request-call py-[50px] lg:py-[70px] relative'>
      <Image
        src={AppConst.assetsBaseUrl + 'home-energy/request-call-texture.webp'}
        fill
        loading="eager"
        priority
        alt="texture"
        sizes="(max-width: 1920px) 100vw"
        className="object-cover block"
      />
      <div className="container mx-auto px-[16px] gurantee-issues relative z-10">
        <div className='lg:grid lg:grid-cols-12'>
          <div className='lg:col-span-8 items-center lg:flex text-center lg:text-left'>
            <h2 className='text-white lg:pl-[40px] text-[24px] lg:text-[32px]'>Would you like to speak to a Technical Advisor?</h2>
          </div>
          <div className='lg:col-span-4 text-center mt-[20px] lg:mt-[0px]'>
            <button type="button" role="button" className="btn btn-white secondary-hover" onClick={openCRform}>Request a Call Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RequestCall;