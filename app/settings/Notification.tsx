import React from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { Label } from '@radix-ui/react-label'

export default function Notification() {
  return (
    <form className="px-4 lg:px-12 space-y-16">
      <section className="flex justify-between items-center">
        <Label htmlFor="pauseAll" className="text-2xl font-bold cursor-pointer">
          Pause all
        </Label>
        <Switch id="pauseAll" />
      </section>

      <ul className="space-y-12 sm:px-4 lg:px-24">
        <li className="space-y-4">
          <h2 className="font-bold text-2xl">Comments</h2>

          <section className="space-y-8 sm:pl-10">
            <div className="flex justify-between items-center gap-4">
              <Label
                htmlFor="newCommentsOnYourPost"
                className="font-normal text-xl cursor-pointer"
              >
                New comments on your post
              </Label>
              <Checkbox
                id="newCommentsOnYourPost"
                className="size-8 rounded-md transition-all"
              />
            </div>
            <div className="flex  justify-between items-center gap-4">
              <Label
                htmlFor="newCommentsOnPostYouLiked"
                className="font-normal text-xl cursor-pointer"
              >
                New comments on post you liked
              </Label>
              <Checkbox
                id="newCommentsOnPostYouLiked"
                className="size-8 rounded-md transition-all"
              />
            </div>
          </section>
        </li>

        <li className="space-y-4">
          <h2 className="font-bold text-2xl">Likes</h2>

          <section className="space-y-8 sm:pl-10">
            <div className="flex justify-between items-center gap-4">
              <Label
                htmlFor="likesOnYourPost"
                className="font-normal text-xl cursor-pointer"
              >
                Likes on your post
              </Label>
              <Checkbox
                id="likesOnYourPost"
                className="size-8 rounded-md transition-all"
              />
            </div>
            <div className="flex justify-between items-center gap-4">
              <Label
                htmlFor="Likes on post you liked"
                className="font-normal text-xl cursor-pointer"
              >
                Likes on post you liked
              </Label>
              <Checkbox
                id="LikesOnPostYouLiked"
                className="size-8 rounded-md transition-all"
              />
            </div>
          </section>
        </li>

        <li className="space-y-4">
          <h2 className="font-bold text-2xl">Stories</h2>

          <section className="space-y-8 sm:pl-10">
            <div className="flex  justify-between items-center gap-4">
              <Label
                htmlFor="newStoriesFromWriters"
                className="font-normal text-xl cursor-pointer"
              >
                New stories from writers you are following
              </Label>
              <Checkbox
                id="newStoriesFromWriters"
                className="size-8 rounded-md transition-all"
              />
            </div>
            <div className="flex justify-between items-center gap-4">
              <Label
                htmlFor="newStoriesFromTags"
                className="font-normal text-xl cursor-pointer"
              >
                New stories from tags you are following
              </Label>
              <Checkbox
                id="newStoriesFromTags"
                className="size-8 rounded-md transition-all"
              />
            </div>
          </section>
        </li>

        <li className="space-y-4">
          <h2 className="font-bold text-2xl">Follows</h2>

          <section className="space-y-8 sm:pl-10">
            <div className="flex justify-between items-center gap-4">
              <Label
                htmlFor="newFollower"
                className="font-normal text-xl cursor-pointer"
              >
                New follower
              </Label>
              <Checkbox
                id="newFollower"
                className="size-8 rounded-md transition-all"
              />
            </div>
            <div className="flex justify-between items-center gap-4">
              <Label
                htmlFor="forwardPost"
                className="font-normal text-xl cursor-pointer"
              >
                Forward post
              </Label>
              <Checkbox
                id="forwardPost"
                className="size-8 rounded-md transition-all"
              />
            </div>
          </section>
        </li>
      </ul>
    </form>
  )
}
