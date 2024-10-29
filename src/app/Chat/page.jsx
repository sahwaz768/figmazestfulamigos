import React from "react";
import Header from "@/component/Header";
import Image from "next/image";
import Profile from "@/app/homepageimg.jpg";
import { CgProfile } from "react-icons/cg";
import { IoChatbubbleOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";

const page = () => {
  return (
    <div>
      <Header />
      <div className="chat-top-box flex">
        <div className="sidebar">
          <div>
          <Image src={Profile} alt="Picture of the user" />
          </div>
          <div>
          <CgProfile size={25} color="gray" />
          </div>
          <div>
          <IoChatbubbleOutline size={25} color="gray"/>
          </div>
          <div>
          <MdHistory  size={25} color="gray"/>
          </div>
          <div>
          <RiLogoutCircleLine  size={25} color="gray"/>
          </div>
        </div>
        <div className="chatlist">
            <h1 className="text-sm font-bold mt-5 mb-2">available chats</h1>
            <div className="userlist">
                <div className="userdetail flex items-center ">
                    <div>
                    <Image src={Profile} alt="Picture of the user" />
                    </div>
                    <div>
                        <h1 className="text-sm ml-3">Olivia</h1>
                    </div>
                    <div className="userstatus">
                        <h1 className="text-xs ">today</h1>
                    </div>
                </div>
                <div className="userdetail flex items-center ">
                    <div>
                    <Image src={Profile} alt="Picture of the user" />
                    </div>
                    <div>
                        <h1 className="text-sm ml-3">Olivia</h1>
                    </div>
                    <div className="userstatus">
                        <h1 className="text-xs ">today</h1>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default page;
