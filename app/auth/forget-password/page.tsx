"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import Block from "../Block";
const API_URL = process.env.API_URL || "http://localhost:8080";

async function sendMail(email: string) {
  const result = await axios.post(API_URL + "/auth/forget-password", {
    email: email,
  });
  console.log("result");
  console.log(result);
  if (result.data.message === "User not found") window.alert("User not found");
  else {
    window.alert("Email sent");
    return window.location.replace("/auth/signin");
  }
}

export default function Home() {
  const [email, setEmail] = useState("");

  /* Redirect to homepage if user is logged in */
  const { data: session } = useSession();
  if (session) return window.location.replace("/");
  return (
    <Block title={"Forget Password"}>
      <div className="flex justify-center">
        <div className="md:h-full md:w-1/2 w-full flex flex-col relative gap-y-2 md:gap-y-5 md:py-3">
          <input
            type="email"
            className="relative left-1/2 -translate-x-1/2 h-14 rounded-xl border-2 border-[#5778a2] bg-white shrink-0 justify-center text-[#9E9E9E] font-sans not-italic font-medium leading-normal w-[70%] 2xl:w-96 px-4"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="relative left-1/2 -translate-x-1/2 w-[70%] 2xl:w-48 h-12 bg-[#fbd06e] rounded-xl text-[#0F3E7A] font-sans not-italic font-normal leading-normal"
            onClick={() => sendMail(email)}
          >
            Send email
          </button>
        </div>
      </div>
    </Block>
  );
}
