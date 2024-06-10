import React from 'react'

const MemberCard = ({admin, bgcolor, row}) => {
  return (
    <>
    <div className={`h-64  dark-green-bg flex   items-center justify-around  ${bgcolor} ${row}`}>
      <img src="/Logo.png" 
      className='w-38  h-52  rounded-lg '
      />
      <div className='h-52 border w-96 glass-effect flex flex-col items-center justify-center post-box   backdrop-blur-lg bg-white bg-opacity-20   rounded-lg  '>
        <h1 className='post text-3xl font-extrabold leading-none'>{admin.name}</h1>
        <br/>
        <p className=' post leading-none font-bold '>({admin.designation})</p>
      </div>
    </div>
    {/* <div className='h-64 mb-5 px-24 fade-green-bg
 flex flex-row-reverse items-center justify-between   '>
      <img src="/Logo.png" 
      className='w-38  h-52  rounded-lg '
      />
      <div className='h-52 w-2/5 glass-effect flex flex-col items-center justify-center post-box   backdrop-blur-lg bg-white bg-opacity-20   rounded-lg  '>
        <h1 className='post text-3xl font-extrabold leading-none'>Name</h1>
        <br/>
        <p className=' post leading-none font-bold '>{(Designation)}</p>
      </div>
    </div> */}

    </>
  )
}

export default MemberCard
