"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";

export default function Account() {
  return (
    <section className="flex flex-row gap-x-2 ">
      <section className="flex flex-col w-1/2 h-screen py-14 pl-32">
        <UserImageAndName />

        <div>
          <UserIntroduction />
        </div>
      </section>

      <section
        className="flex flex-col gap-y-12 w-1/2 h-screen p-14"
        /*color and style of svg icons*/
        /*update link after input*/
        /*dialog of photo not work*/
        /*intro flex*/
      >
        <p className="text-2xl font-normal">Links:</p>
        <LinkField
          title={"Facebook"}
          link={"https://www.facebook.com/profile.linklinklink"}
        >
          <svg
            fill="#133157"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#133157"
            stroke-width="0.5"
            className="w-14 h-14"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title></title>
              <path d="M44,7H20A13,13,0,0,0,7,20V44A13,13,0,0,0,20,57H44A13,13,0,0,0,57,44V20A13,13,0,0,0,44,7ZM33,55V38a1,1,0,0,0-1-1H27V31h5a1,1,0,0,0,1-1V22a5,5,0,0,1,5-5h8v6H42a3,3,0,0,0-3,3v4a1,1,0,0,0,1,1h6v6H40a1,1,0,0,0-1,1V55ZM55,44A11,11,0,0,1,44,55H41V39h6a1,1,0,0,0,1-1V30a1,1,0,0,0-1-1H41V26a1,1,0,0,1,1-1h5a1,1,0,0,0,1-1V16a1,1,0,0,0-1-1H38a7,7,0,0,0-7,7v7H26a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h5V55H20A11,11,0,0,1,9,44V20A11,11,0,0,1,20,9H44A11,11,0,0,1,55,20Z"></path>
            </g>
          </svg>
        </LinkField>
        <LinkField
          title={"Instagram"}
          link={"https://www.facebook.com/profile.linklinklink"}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke-width="0.3"
            stroke="#133157"
            className="w-14 h-14 p-0.5"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke="#133157"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="#133157"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
                stroke="#133157"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M17.6361 7H17.6477"
                stroke="#133157"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </LinkField>
        <LinkField title={"Twitter"}>
          <svg
            viewBox="0 0 192 192"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#133157"
            className="w-14 h-14"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                stroke="#133157"
                stroke-linejoin="round"
                stroke-width="7"
                d="M126 38c-14.359 0-26 11.64-26 26a25.89 25.89 0 0 0 2.929 12C72 76 56 70 30 46c0 39.5 10 66 34 81-8 11.2-29.333 14.333-42 14.5 0 0 14 13.5 46 13.5 56 0 84-46.783 84-91l18-20h-27.386A25.892 25.892 0 0 0 126 38Z"
              ></path>
            </g>
          </svg>
        </LinkField>
        <LinkField title={"Line"}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#133157"
            stroke-width="0.9"
            className="w-14 h-14"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M21.9999 10.0588C21.9999 5.58405 17.5141 1.94354 12 1.94354C6.48627 1.94354 1.99994 5.58405 1.99994 10.0588C1.99994 14.0702 5.55749 17.4299 10.3632 18.065C10.6887 18.1354 11.132 18.2798 11.244 18.5582C11.3449 18.8109 11.31 19.207 11.2765 19.4623C11.2765 19.4623 11.1591 20.168 11.1336 20.3184C11.09 20.571 10.9327 21.3072 12 20.8576C13.0672 20.4078 17.7588 17.4664 19.8569 15.0518H19.8564C21.3056 13.4624 21.9999 11.8495 21.9999 10.0588Z"
                stroke="#133157"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.3139 8.53744H18.4141V8.34641H16.1227V12.1925H18.4141V12.0014H16.3139V10.365H18.4141V10.1739H16.3139V8.53744ZM5.92147 12.0014V8.34641H5.73044V12.1925H8.02179V12.0014H5.92147ZM14.35 12.0433L11.6125 8.34634H11.295V12.1925H11.486V8.49641L14.223 12.1925H14.541V8.34634H14.35V12.0433ZM9.52202 8.34634V12.1925H9.71305V8.34634H9.52202Z"
                stroke="#133157"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </LinkField>
        <LinkField
          title={"Other"}
          link={"https://www.facebook.com/profile.linklinklink"}
        >
          <svg
            fill="#133157"
            viewBox="0 0 16 16"
            id="external-link-16px"
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 p-1.5"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                id="Path_113"
                data-name="Path 113"
                d="M37,9.5v4A2.5,2.5,0,0,1,34.5,16h-11A2.5,2.5,0,0,1,21,13.5V2.5A2.5,2.5,0,0,1,23.5,0h4a.5.5,0,0,1,0,1h-4A1.5,1.5,0,0,0,22,2.5v11A1.5,1.5,0,0,0,23.5,15h11A1.5,1.5,0,0,0,36,13.5v-4a.5.5,0,0,1,1,0ZM36.962.309A.5.5,0,0,0,36.5,0h-5a.5.5,0,0,0,0,1h3.793L25.146,11.146a.5.5,0,0,0,.708.708L36,1.707V5.5a.5.5,0,0,0,1,0V.5A.5.5,0,0,0,36.962.309Z"
                transform="translate(-21)"
              ></path>{" "}
            </g>
          </svg>
        </LinkField>
      </section>
    </section>
  );
}

// User image and name
function UserImageAndName() {
  const { data: session } = useSession();
  console.log(session);
  const [EditUsername, setEditUsername] = useState<string>("off");

  const toggleEditUsername = () => {
    setEditUsername((prevEditUsername) =>
      prevEditUsername === "on" ? "off" : "on"
    );
  };
  const text = EditUsername === "on" ? "Save" : "Edit";
  if (session && session.user) {
    return (
      <section className="flex flex-row">
        <div className="flex flex-col justify-center">
          <Image
            unoptimized
            src={session?.user.avatar as string}
            alt="user image"
            width={154}
            height={154}
          />

          <Dialog>
            <div className="flex py-1 px-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Edit / Edit_Pencil_Line_01">
                    {" "}
                    <path
                      id="Vector"
                      d="M4 20.0001H20M4 20.0001V16.0001L12 8.00012M4 20.0001L8 20.0001L16 12.0001M12 8.00012L14.8686 5.13146L14.8704 5.12976C15.2652 4.73488 15.463 4.53709 15.691 4.46301C15.8919 4.39775 16.1082 4.39775 16.3091 4.46301C16.5369 4.53704 16.7345 4.7346 17.1288 5.12892L18.8686 6.86872C19.2646 7.26474 19.4627 7.46284 19.5369 7.69117C19.6022 7.89201 19.6021 8.10835 19.5369 8.3092C19.4628 8.53736 19.265 8.73516 18.8695 9.13061L18.8686 9.13146L16 12.0001M12 8.00012L16 12.0001"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <p className="text-sm font-light">Change Photo</p>
            </div>
          </Dialog>
        </div>
        <div className="h-full pt-12 pl-9 pr-24">
          <p className="text-xl font-normal">Username</p>
          <div className="h-20 flex items-end">
            <Input
              disabled={EditUsername !== "on"}
              type="string"
              placeholder={session.user.name!.toString()}
              className="text-5xl font-bold border-b-[#466d9e] border-2 border-x-0 border-t-0 rounded-none w-full h-16 focus-visible:ring-0"
            />
          </div>
          <div className="flex justify-end">
            <button onClick={toggleEditUsername} className="flex">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Edit / Edit_Pencil_Line_01">
                    {" "}
                    <path
                      id="Vector"
                      d="M4 20.0001H20M4 20.0001V16.0001L12 8.00012M4 20.0001L8 20.0001L16 12.0001M12 8.00012L14.8686 5.13146L14.8704 5.12976C15.2652 4.73488 15.463 4.53709 15.691 4.46301C15.8919 4.39775 16.1082 4.39775 16.3091 4.46301C16.5369 4.53704 16.7345 4.7346 17.1288 5.12892L18.8686 6.86872C19.2646 7.26474 19.4627 7.46284 19.5369 7.69117C19.6022 7.89201 19.6021 8.10835 19.5369 8.3092C19.4628 8.53736 19.265 8.73516 18.8695 9.13061L18.8686 9.13146L16 12.0001M12 8.00012L16 12.0001"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <p>{text} Username</p>
            </button>
          </div>
        </div>
      </section>
    );
  }
}

// User Introduction
function UserIntroduction() {
  const [EditUsername, setEditUsername] = useState<string>("off");

  const toggleEditUsername = () => {
    setEditUsername((prevEditUsername) =>
      prevEditUsername === "on" ? "off" : "on"
    );
  };
  const text = EditUsername === "on" ? "Save" : "Edit";
  return (
    <section className="">
      <div className="pt-28 pl-9 pr-24 flex flex-col">
        <p className="text-xl font-normal">Introduction:</p>
        <div className="h-60">
          <Input
            disabled={EditUsername !== "on"}
            type="string"
            placeholder="Lorem ipsum dolor sit amet 
              consectetur. Orci commodo 
              pharetra vestibulum eleifend 
              semper. Mi risus enim velit 
              nulla quis fermentum feu
              ac. Nisi morbi fermentum feugiat "
            className="text-base font-normal border-[#466d9e] border-2 rounded-none h-full focus-visible:ring-0flex justify-item-start ustify-start items-start"
          />
        </div>
        <div className="flex justify-end">
          <button onClick={toggleEditUsername} className="flex">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="Edit / Edit_Pencil_Line_01">
                  {" "}
                  <path
                    id="Vector"
                    d="M4 20.0001H20M4 20.0001V16.0001L12 8.00012M4 20.0001L8 20.0001L16 12.0001M12 8.00012L14.8686 5.13146L14.8704 5.12976C15.2652 4.73488 15.463 4.53709 15.691 4.46301C15.8919 4.39775 16.1082 4.39775 16.3091 4.46301C16.5369 4.53704 16.7345 4.7346 17.1288 5.12892L18.8686 6.86872C19.2646 7.26474 19.4627 7.46284 19.5369 7.69117C19.6022 7.89201 19.6021 8.10835 19.5369 8.3092C19.4628 8.53736 19.265 8.73516 18.8695 9.13061L18.8686 9.13146L16 12.0001M12 8.00012L16 12.0001"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
            <p>{text} Introduction</p>
          </button>
        </div>
      </div>
    </section>
  );
}

interface LinkFieldProps {
  title: string;
  children?: React.ReactNode;
  link?: string;
}

function LinkField({ title, children, link = "" }: LinkFieldProps) {
  const [editable, setEditable] = useState<string>("off");

  const toggleEditable = () => {
    setEditable((prevEditable) => (prevEditable === "on" ? "off" : "on"));
  };
  const content =
    link.trim() === "" ? (
      <Input
        type="string"
        placeholder="Add Link"
        className="bg-[#dfe7f1] border-0 rounded-none w-full h-full focus-visible:ring-0"
      />
    ) : (
      <Input
        disabled={editable !== "on"}
        type="string"
        placeholder={link}
        className="text-sm font-normal border-b-[#466d9e] border-2 border-x-0 border-t-0 rounded-none w-full h-full focus-visible:ring-0"
      />
    );
  const text = editable === "on" ? "Save" : "Edit";

  const editbutton =
    link.trim() === "" ? (
      <div></div>
    ) : (
      <button onClick={toggleEditable} className="flex">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g id="Edit / Edit_Pencil_Line_01">
              {" "}
              <path
                id="Vector"
                d="M4 20.0001H20M4 20.0001V16.0001L12 8.00012M4 20.0001L8 20.0001L16 12.0001M12 8.00012L14.8686 5.13146L14.8704 5.12976C15.2652 4.73488 15.463 4.53709 15.691 4.46301C15.8919 4.39775 16.1082 4.39775 16.3091 4.46301C16.5369 4.53704 16.7345 4.7346 17.1288 5.12892L18.8686 6.86872C19.2646 7.26474 19.4627 7.46284 19.5369 7.69117C19.6022 7.89201 19.6021 8.10835 19.5369 8.3092C19.4628 8.53736 19.265 8.73516 18.8695 9.13061L18.8686 9.13146L16 12.0001M12 8.00012L16 12.0001"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
        <p>{text}</p>
      </button>
    );

  return (
    <div className="w-full flex">
      <div className="w-[10%]">{children}</div>
      <div className="w-[18%] flex items-end pl-8 pb-2">
        <p className="text-lg font-normal">{title}</p>
      </div>
      <div className="w-[60%]">{content}</div>
      <div className="w-[10%]">
        <div className="pt-4">{editbutton}</div>
      </div>
    </div>
  );
}
