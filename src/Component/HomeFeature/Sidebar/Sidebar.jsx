import React from 'react';

import userImage from '../../../../public/image/user2.png'
import user4Image from '../../../../public/image/user4.png'
import user1Image from '../../../../public/image/Mask group.png'
import UserProfile from './userProfile/UserProfile';





const Sidebar = () => {
  const chats = [
    {
      _id: 1,
      name: "Engineer’s Group",
      member: "10K member",
      time: "10:30 AM"
    },
    {
      _id: 2,
      name: "FG",
      HexCode: "#54326",
      videoText: "SR sent a video",
      time: "Yesterday",
      message: "5"
    },
    {
      _id: 3,
      name: "Doctor’s Group",
      member: "1K member",
      time: "Yesterday"
    },
    {
      _id: 4,
      name: "AR",
      HexCode: "#54326",
      Text: "Hey, I am here...",
      time: "12 Nov, 2023",
   
    },
    {
      _id: 5,
      name: "FG",
      HexCode: "#54326",
      videoText: "SR sent a video",
      time: "2 Nov, 2023",
      message: "5"
    },
    {
      _id: 6,
      name: "Millionaire’s Group",
      member: "500 member",
      time: "2 Nov, 2023"
    },
  ]
    return (
        <div className='sidebar'>
              {/* userprofile */}
              <UserProfile></UserProfile>
            {/* search and filter */}
             <div className='flex mx-auto w-[390px]'>
             {/* search button */}

             <div className='w-[300px] h-[40px] rounded-lg border-[1px] border-[rgba(0, 0, 0, 0.10)] rounded-lg bg-[#F8F8F8] flex justify-between mx-[10px] mt-5'>
      <h4 className='text-xs font-medium text-[#00000080]  ml-2 justify-start my-3.5'>Search...</h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className='justify-end my-3.5 mr-4'>
  <g clipPath="url(#clip0_1692_7087)">
    <path d="M14.6654 14.6654L13.332 13.332M7.66536 13.9987C8.49707 13.9987 9.32063 13.8349 10.089 13.5166C10.8574 13.1983 11.5556 12.7318 12.1437 12.1437C12.7318 11.5556 13.1983 10.8574 13.5166 10.089C13.8349 9.32063 13.9987 8.49707 13.9987 7.66536C13.9987 6.83366 13.8349 6.0101 13.5166 5.2417C13.1983 4.47331 12.7318 3.77513 12.1437 3.18702C11.5556 2.59892 10.8574 2.13241 10.089 1.81413C9.32063 1.49585 8.49707 1.33203 7.66536 1.33203C5.98566 1.33203 4.37475 1.99929 3.18702 3.18702C1.99929 4.37475 1.33203 5.98566 1.33203 7.66536C1.33203 9.34507 1.99929 10.956 3.18702 12.1437C4.37475 13.3314 5.98566 13.9987 7.66536 13.9987V13.9987Z" stroke="#636363" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_1692_7087">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
    </div>
    {/* Filter */}
    <div className='btn w-[86px] h-[40px] rounded lg bg-[#076A49]  mt-4' style={{background:" linear-gradient(87deg, #FD282B 9.48%, #CC176A 73.57%)"}}>
<div className='flex gap-2 my-[14px]'>

    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M14.6654 2H1.33203L6.66536 8.30667V12.6667L9.33203 14V8.30667L14.6654 2Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
        <button className='text-[#FFFFFF] text-xs font-normal'>Filter</button>
</div>
<div>

</div>
               
                </div>
    </div> 
    {/* users  */}
    <div>
        {/* first user */}
        <div className='flex -ml-[10px] mt-[26px] justify-evenly'>

        <div className='flex justify-start'>
            <div className='w-[36px] h-[35px] rounded-full bg-[#9908F5] mr-[6px] mt-2 '>
         <img src={user1Image}></img>
            </div>
<div >

<h2 className='font-semibold text-[18px]'>Engineer’s Group</h2>
<p className='font-medium text-[16px] text-[#666666]'>10K member</p>
</div>
</div>
<div className='justify-end'>
    <p className='font-medium text-[16px] text-[#6F747C] mt-4'>10:30 AM</p>
</div>
        </div>
        {/* second user */}
        <div className='flex -ml-[10px] mt-[26px] justify-evenly'>

        <div className='flex justify-start'>
            <div className='  mr-[6px] mt-2 '>
<img src={userImage} className='w-[36px] h-[35px] rounded-full'></img>
<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" className='ml-6 -mt-2'>
  <circle cx="5" cy="5" r="4.5" fill="#B7B7B7" stroke="white"/>
</svg>
            </div>
<div >

<div className='flex'>

<h2 className='font-semibold text-[18px] mr-[3px]'>FG</h2>
<p className='text-[#00000099] text-[14px] font-normal'>#54326</p>
</div>
<p className='font-bold text-[14px] '>SR sent a video</p>
</div>
</div>
<div className='justify-end'>
    <p className='font-medium text-[16px] text-[#6F747C] '>Yesterday</p>
    

    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className='ml-[55px] mt-2'>
  <circle cx="9" cy="9" r="8.5" fill="#F42A41" stroke="white"/>
</svg>
   
</div>
        </div>
        {/* third user */}
        <div className='flex -ml-[10px] mt-[26px] justify-evenly'>

        <div className='flex justify-start'>
        <div className='w-[36px] h-[35px] rounded-full bg-[#08F5CA] mr-[6px] mt-2 '>

</div>
<div >

<h2 className='font-semibold text-[18px]'>Doctor’s Group</h2>
<p className='font-medium text-[16px] text-[#666666]'>1K member</p>
</div>
</div>
<div className='justify-end'>
    <p className='font-medium text-[16px] text-[#6F747C] mt-4'>Yesterday</p>
</div>
        </div>
        {/* fourth user */}
        <div className='flex  mt-[26px] h-[65px] justify-evenly bg-[#FFFFFF] border-2 mx-auto w-[370px] rounded-md'>
          

<div className='flex justify-start -ml-[15px]'>
    <div className='  mr-[6px] mt-2 '>
<img src={user4Image} className='w-[36px] h-[35px] rounded-full'></img>
<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" className='ml-6 -mt-2'>
  <circle cx="5" cy="5" r="4.5" fill="#62CC7B" stroke="white"/>
</svg>
    </div>
<div >

<div className='flex'>

<h2 className='font-semibold text-[18px] mr-[3px]'>AR</h2>
<p className='text-[#00000099] text-[14px] font-normal'>#54326</p>
</div>
<p className='font-normal text-[#6F747C] text-[16px] '>Hey, I am here...</p>
</div>
</div>
<div className='justify-end'>
<p className='font-medium text-[16px] text-[#6F747C] '>Yesterday</p>


<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className='ml-[55px] mt-2'>
<circle cx="9" cy="9" r="8.5" fill="#F42A41" stroke="white"/>
</svg>

</div>
           

</div>
  {/* fifth user */}
  <div className='flex -ml-[10px] mt-[26px] justify-evenly'>

<div className='flex justify-start'>
    <div className='  mr-[6px] mt-2 '>
<img src={userImage} className='w-[36px] h-[35px] rounded-full'></img>
<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" className='ml-6 -mt-2'>
<circle cx="5" cy="5" r="4.5" fill="#B7B7B7" stroke="white"/>
</svg>
    </div>
<div >

<div className='flex'>

<h2 className='font-semibold text-[18px] mr-[3px]'>FG</h2>
<p className='text-[#00000099] text-[14px] font-normal'>#54326</p>
</div>
<p className='font-bold text-[14px] '>SR sent a video</p>
</div>
</div>
<div className='justify-end'>
<p className='font-medium text-[16px] text-[#6F747C] '>2 Nov, 2023</p>


<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className='ml-[55px] mt-2'>
<circle cx="9" cy="9" r="8.5" fill="#F42A41" stroke="white"/>
</svg>

</div>
</div>
 {/* sixth user */}
 <div className='flex -ml-[10px] mt-[26px] justify-evenly'>

<div className='flex justify-start'>
<div className='w-[36px] h-[35px] rounded-full bg-[#08F5CA] mr-[6px] mt-2 '>

</div>
<div >

<h2 className='font-semibold text-[18px]'>Millionaire’s Group</h2>
<p className='font-medium text-[16px] text-[#666666]'>500 member</p>
</div>
</div>
<div className='justify-end'>
<p className='font-medium text-[16px] text-[#6F747C] mt-4'>2 Nov, 2023</p>
</div>
</div>
    </div>
            
        </div>
    );
};

export default Sidebar;