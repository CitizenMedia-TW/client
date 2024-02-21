import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";

export default function Notification() {
  return (
    <div className="w-full h-screen pt-14">
      <div className="flex px-36 place-content-between">
        <p className="text-2xl font-bold">Pause all</p>
        <Switch id="" />
      </div>

      <div className="w-full pt-14 pl-52 pr-36 flex flex-col gap-y-12">
        <div>
          <p className="font-bold text-2xl">Comments</p>
          <div className="flex flex-col gap-y-7 pt-5 pl-9">
            <div className="flex  place-content-between">
              <p className="font-normal text-xl">New comments on your post</p>
              <Checkbox className="h-7 w-7 rounded-md" />
            </div>
            <div className="flex  place-content-between">
              <p className="font-normal text-xl">
                New comments on post you liked
              </p>
              <Checkbox className="h-7 w-7 rounded-md" />
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold text-2xl">Likes</p>
          <div className="flex flex-col gap-y-7 pt-5 pl-9">
            <div className="flex  place-content-between">
              <p className="font-normal text-xl">Likes on your post</p>
              <Checkbox className="h-7 w-7 rounded-md" />
            </div>
            <div className="flex  place-content-between">
              <p className="font-normal text-xl">Likes on post you liked</p>
              <Checkbox className="h-7 w-7 rounded-md" />
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold text-2xl">Stories</p>
          <div className="flex flex-col gap-y-7 pt-5 pl-9">
            <div className="flex  place-content-between">
              <p className="font-normal text-xl">
                New stories from writers you are following
              </p>
              <Checkbox className="h-7 w-7 rounded-md" />
            </div>
            <div className="flex  place-content-between">
              <p className="font-normal text-xl">
                New stories from tags you are following
              </p>
              <Checkbox className="h-7 w-7 rounded-md" />
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold text-2xl">Follows</p>
          <div className="flex flex-col gap-y-7 pt-5 pl-9">
            <div className="flex  place-content-between">
              <p className="font-normal text-xl">New follower</p>
              <Checkbox className="h-7 w-7 rounded-md" />
            </div>
            <div className="flex  place-content-between">
              <p className="font-normal text-xl">Forward post</p>
              <Checkbox className="h-7 w-7 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
