import React from 'react'
import our_Impact from '../assets/image/svg/our_Impact_Line.svg'
import impactStudio from '../assets/image/webp/impactStudio.webp'
import roundedEllipse from '../assets/image/png/roundedEllipse.png'
import clientsRight from '../assets/image/svg/clientRight.svg';
import importRed from '../assets/image/svg/import_Red_Ellips.svg'
const Impact = () => {
  return (
    <div className='bg-impactBg bg-black mt-[-2px] relative' id='section_4'>
      <div className='flex justify-center relative'>
        <h2 className='font-orbitron font-bold z-20 text-42 max-md:text-[40px] max-sm:text-[38px] max-sm:leading-[39px] max-md:leading-[45px] leading-[54.6px] text-white about_Line_Bottom'>Our Impact</h2>
        <img src={our_Impact} alt="about_Line_Bottom" className='absolute pointer-events-none h-[57px] xl:block hidden w-full bottom-[-17px] z-0 left-0' />
      </div>
      <div className='container max-w-[1164px] px-3 mx-auto relative '>
        <div className='flex flex-row flex-wrap -mx-3 z-20 pt-[102px] max-lg:pt-[80px] max-md:pt-[60px] max-sm:pt-12 pb-[34px]'>
          <div className='flex items-center z-20 flex_wrap justify-center gap-9 max-xl:gap-6 max-lg:gap-9' data-aos="zoom-in">
            <h2 className='font-orbitron z-20 font-bold text-64 leading-[83px] text-white xl:max-w-[312px] max-md:text-[52px] max-md:leading-[53px] max-lg:text-[54px] max-lg:leading-[70px] max-sm:text-[32px]'>What 1v2 Studio</h2>
            <div className='relative'>
              <img className='max-w-[445px] z-20 max-md:max-w-[400px] pointer-events-none relative max-sm:max-w-[350px] w-full' src={impactStudio} alt="impactStudio" />
              <img src={importRed} alt="import_Red" className='absolute pointer-events-none top-[-120px] z-0 left-0' />
            </div>
            <div className='flex-col z-20 text-center md:text-start'>
              <h3 className='text-nowrap font-semibold z-20 font-poppins text-[29px] leading-[47px] text-white'> <span className=' bg-linear_Gradient bg-clip-text text-transparent text-[22px] sm:text-[26px] md:text-[30px] lg::text-[32px] xl:text-[36px] leading-[40px] lg:leading-[45px] xl:leading-[57px]'>13 </span>experiences</h3>
              <h3 className='text-nowrap font-semibold z-20 font-poppins text-[29px] leading-[47px] text-white'> <span className=' bg-linear_Gradient bg-clip-text text-transparent text-[22px] sm:text-[26px] md:text-[30px] lg::text-[32px] xl:text-[36px] leading-[40px] lg:leading-[45px] xl:leading-[57px]'>10.8K </span>active now</h3>
              <h3 className='text-nowrap font-semibold z-20 font-poppins text-[29px] leading-[47px] text-white'> <span className=' bg-linear_Gradient bg-clip-text text-transparent text-[22px] sm:text-[26px] md:text-[30px] lg::text-[32px] xl:text-[36px] leading-[40px] lg:leading-[45px] xl:leading-[57px]'>1.086 </span>billion visits</h3>
            </div>
          </div>
        </div>
        <img src={roundedEllipse} alt="roundedEllipse" className='absolute left-[-64px] max-xl:left-3 z-10 bottom-[-96px] max-lg:left-[12px] max-lg:hidden'/>
      </div>
      <img src={clientsRight} className='absolute left-[0px] z-0 pointer-events-none top-[-290px]' alt="clientsRight" />
    </div>
  )
}
export default Impact