"use client";
import React from "react";
import Image from "next/image";
import Library from "./Library";
import Stories from "./Stories";
import Userbar from "./Userbar";
import Link from "next/link";

import { useSession } from "next-auth/react";
import { ScrollArea } from "@/components/ui/scroll-area";

const stories_blocks = Array.from({ length: 30 }).map((_, i) => ({
  title: "Why everyone should try GPT-4, even the CEO",
  subtitle: "(Besides the fact that you don’t need technical skills to do it)",
  text: "Lorem ipsum dolor sit amet consectetur. Orci commodo pharetra vestibulum eleifensemper. Mi risus enim velit nulla quis fermentum feuac. Nisi morbi fermentum feugiat ...",
  tags: ["#TAGSTAGS", "#TAGS", "#TAGS", "#TAGSTAGS", "#TAGS"],
}));

export default function Home() {
  const { data: session } = useSession();

  const [library, setLibrary] = React.useState("btn"); // Default to library
  const [stories, setStories] = React.useState("btn btn-outline");

  function toggle_lib() {
    setLibrary("btn");
    setStories("btn btn-outline");
  }
  function toggle_stories() {
    setLibrary("btn btn-outline");
    setStories("btn");
  }

  return (
    <main className="flex min-h-screen justify-between p-16 space-x-24">
      <div className="w-8/12">
        <div className="w-full border-b-2 border-border">
          <section className="flex flex-row items-center">
            {session && (
              <Image
                unoptimized
                src={session?.user.avatar as string}
                alt="image"
                width="90"
                height="90"
                className="rounded-full m-3.5"
              />
            )}
            <p className="text-4xl font-bold flex m-3.5 text-primary">
              {session?.user?.name}
            </p>
          </section>
          <section className="flex flex-row gap-2 justify-end">
            {/* <button className={library} onClick={() => toggle_lib()}>
              Library
            </button>
            <button className={stories} onClick={() => toggle_stories()}>
              Stories
            </button> */}
            <button
              className={
                library == "btn"
                  ? "font-bold text-slate-800 text-2xl -translate-y-1 hover:-translate-y-2"
                  : "text-slate-500 hover:-translate-y-2"
              }
              onClick={() => toggle_lib()}
            >
              Library
            </button>
            <button
              className={
                stories == "btn"
                  ? "font-bold text-slate-800 text-2xl -translate-y-1 hover:-translate-y-2"
                  : "text-slate-500 hover:-translate-y-2"
              }
              onClick={() => toggle_stories()}
            >
              Stories
            </button>
          </section>
        </div>
        <ScrollArea className="h-[960px] w-full rounded-md my-4">
          <div className="p-4">
            {stories_blocks.map((story) => (
              <>
                <div className="text-2xl font-extrabold">{story.title}</div>
                <div className="my-4 flex flex-row w-full gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="font-light text-sm">{story.subtitle}</div>
                    <div className="font-light text-sm">{story.text}</div>
                    <div className="my-2 flex flex-row gap-3">
                      {story.tags.map((tag, tagIndex) => (
                        <div
                          key={tagIndex}
                          className="rounded-3xl bg-gray-200 hover:bg-gray-100 hover:-translate-y-1"
                        >
                          <div className="text-xs m-2">{tag}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-6/12 h-36 bg-gray-300"></div>
                </div>
                <div className="border-b-2 my-4"></div>
              </>
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="w-4/12">
        <Userbar />
      </div>
    </main>
  );
}
