'use client'
import React, { useState } from "react";

import { BiCard } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { TbSquareRoundedPlus } from "react-icons/tb";
import "./index.css";
import Modal from "../components/Modal/Modal";
import Card from "antd/es/card/Card";
import UserDetails from "@/components/UserDetails/userDetails";










const Home = () => {
 
  const userData = {
    AssingmentName: "New Assingment ",
    AssingmentLink: "https://example.com/assignment",
    AssingmentHour: "2 hours",
    AssingmentDate: new Date(),
  };
  const [showModal, SetShowModal] = useState(false);
  return (
    
<>
<div className="h-screen  w-96"  >
  
 <div className="">
  <Card>
         <div className="h-screen w-96 grid grid-cols-2 grid-rows-4 ">
          <h2 className="">Sales BDE</h2>
          Active 
          <p>Assingment Link</p>
          <p>www.tinycurl/test-1.com</p>
          <p>Assingment Hour</p>
          <p>3 Hours</p>
          <p>Assingment Ends At</p>
          <p>11 March 2024</p>

         </div>
         </Card>
         </div>
        
        
    
      
  
  
    <div className="  fixed top-0 left-0 h-screen w-96 bg-white  p-6">
      <div className=" grid grid-cols-2  gap-0  h-10 shadow-xl">
        <div className="ml-5 ">
          <BiCard />
        </div>
        <div className=" relative right-14  bottom-1.5 block ">
          <p className="font-mono font-bold  text-lg">Hi,AltWorld</p>
        </div>
      </div>

      <div className="relative top-10 flex  cursor-pointer ">
        <FaHome id="homeIcon" className="mr-3" />
        <p className="font-extrabold ">Dashboard</p>
      </div>

      <div className="h-1/3 w-72 bg-blue-300 relative  top-24    rounded-xl grid row-span-3  ">
        <div className="m-3">
          <TbSquareRoundedPlus id="plusIcon" />
        </div>
        <div className="relative left-5 -top-3 font-bold">
          <h2>New Assingment?</h2>
        </div>
        <div className="relative  -top-4 left-5  w-60" id="text">
          {" "}
          <p id="text-area">
            Select from pre-defined questions to have a quick turnaround
          </p>
        </div>

        <div className="bg-white rounded-2xl flex justify-center  w-64 relative -top-4 -right-3">
          <button onClick={() => SetShowModal(true)}>
            Create New Assignment
          </button>
        </div>
      </div>
      <Modal isVisible={showModal} onClose={() => SetShowModal(false)} />

 

    </div>
    </div>


    
   

</>

  );
};

export default Home;
