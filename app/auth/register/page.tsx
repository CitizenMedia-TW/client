"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Block from "../Block";
const API_URL = "http://localhost:8080";

type User = {
  username: string;
  email: string;
  password: string;
};

async function register(newUser: User) {
  const res = await axios.post(`${API_URL}/auth/register`, newUser);
  if (res.status != 200) return window.alert("Error");
  window.alert("Success");
  window.location.href = "/auth/signin";
}

export default function Page() {
  const [newUser, setNewUser] = React.useState<User>({
    username: "",
    email: "",
    password: "",
  });
  return (
    <Block title={"Register"}>
      <div className="flex justify-center">
        <div className="md:h-full md:w-1/2 w-full flex flex-col relative gap-y-2 md:gap-y-5 md:py-3">
          <input
            type="text"
            className="relative left-1/2 -translate-x-1/2 h-14 rounded-xl border-2 border-[#5778a2] bg-white shrink-0 justify-center text-[#9E9E9E] font-sans not-italic font-medium leading-normal w-[70%] 2xl:w-96 px-4"
            placeholder="username"
            onChange={(e) =>
              setNewUser({ ...newUser, username: e.target.value })
            }
          />
          <input
            type="text"
            className="relative left-1/2 -translate-x-1/2 h-14 rounded-xl border-2 border-[#5778a2] bg-white shrink-0 justify-center text-[#9E9E9E] font-sans not-italic font-medium leading-normal w-[70%] 2xl:w-96 px-4"
            placeholder="email"
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <input
            type="text"
            className="relative left-1/2 -translate-x-1/2 h-14 rounded-xl border-2 border-[#5778a2] bg-white shrink-0 justify-center text-[#9E9E9E] font-sans not-italic font-medium leading-normal w-[70%] 2xl:w-96 px-4"
            placeholder="password"
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
          />
          <button
            className="relative left-1/2 -translate-x-1/2 w-[70%] 2xl:w-48 h-12 bg-[#fbd06e] rounded-xl text-[#0F3E7A] font-sans not-italic font-normal leading-normal"
            onClick={() => register(newUser)}
          >
            Register
          </button>
        </div>
      </div>
    </Block>
  );
}
