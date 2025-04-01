import Contianer from '@/components/ui/container'
import React from 'react'
import ContactsSection from '../../home/ui/contact'
import AboutUs from '../ui/about-us'
import Image from 'next/image'

export default function SinglieProject() {
  return (
    <>
          <div className='w-full text-center pt-[200px]  mb-[107px]'>
              <Image src="/image3.svg" width={17200} height={613} />
        </div>
          <Contianer>
              <div className="flex gap-[80px]">
              <p class="w-[693px] h-[251px] opacity-90 text-white text-[22px] font-normal font-['Open Sans'] leading-[27px]">Following our vision to deliver the best-buy products in each segment of our business, we designed and produced a wide range of kitchenware, positioning Lorme as the favorite kitchen assistant and first choice for many consumers – from housewives to HoReCa professionals, proving our statement that good cookware is essential for any serious cook.</p>
              <p class="w-[538px] opacity-90 text-white text-[22px] font-normal font-['Open Sans'] leading-[27px]">Lorme as the favorite kitchen assistant and first choice for many consumers – from housewives to HoReCa professionals, proving our statement that good cookware is essential for any serious cook.</p>
              </div>
              <ContactsSection/>
              <AboutUs/>
          </Contianer>
    </>
  )
}
