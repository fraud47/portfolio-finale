import { ImMenu } from "react-icons/im";
 import { useState } from 'react';


 

const Header = () => {
  const [Open,setOpen ]= useState(false)
  return (
    <header className="bg-criativo-black cursor-pointer">
      
    <nav className=" flex items-start container  ">
    <div className="py-1">
            <h1 className="font-bold text-lg uppercase text-criativo-green">
                Apk Mechanic</h1> 
        </div> 
       <ul className=" hidden sm:flex flex-1 justify-end items-center py-1 gap-12 uppercase text-white text-sm">
            <li>About</li>
            <li>Contact Me.</li>
            <li>resume</li>
        </ul>
        <div className="flex flex-1 justify-end color sm:hidden py-2" >
        <ImMenu onClick={()=>setOpen(!Open)} style={{
          color:"grey"
        }}/>
        </div>
     

    </nav>
    {Open?<ul className="sm:hidden items-center  py-8 gap-12 uppercase text-white text-lg px-3 ">
            <li className="" >About</li>
            <li className="">Contact Me.</li>
            <li className="">resume</li>
        </ul>:null}
 

    </header>
  )
}

export default Header