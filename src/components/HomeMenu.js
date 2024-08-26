import Image from 'next/image';
import React from 'react'
import MenuItems from './MenuItems';
import SectionHeaders from './SectionHeaders';

const HomeMenu = () => {
  return (
    <section>
       
     <div className='absolute left-0 right-0 overflow-x-hidden w-full'>
      <div className='h-48 w-48 absolute -left-12'>
        <Image src={'/sallad1.png'} alt='salad' fill object-fit='contain'/>
      </div>

      <div className='h-48 w-48 absolute -right-12'>
        <Image src={'/sallad2.png'} alt='salad' fill object-fit='contain'/>
      </div>   

     </div>

    <SectionHeaders
     subHeader={"Check out"}
     mainHeader={"Menu"}    
    />

     <div className='grid grid-cols-3 gap-4'>    
       <MenuItems/>   
       <MenuItems/>   
       <MenuItems/>   
       <MenuItems/>   
       <MenuItems/>   
       <MenuItems/>   
     </div>
    </section>
  )
}

export default HomeMenu; 

// npx @next/codemod next-image-experimental .

