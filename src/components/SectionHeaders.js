import React from 'react'

const SectionHeaders = ({ subHeader, mainHeader }) => {
  return (
    <div>
       <div className='text-center'>
       <h3 className='uppercase text-gray-600 font-semibold leading-3'>     
         {subHeader}
       </h3>    
       <h2 className='text-primary font-bold text-4xl mb-4'>
         {mainHeader}   
        </h2>
     </div>
    </div>
  )
}

export default SectionHeaders
