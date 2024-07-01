import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

import {
  Trash2,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Star,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import headshot from "@/public/notifications-head.svg";
import { StoryServices, UserServices } from "@/api/services";
import { cn } from "@/lib/utils";

interface time {
  seconds: number;
  nanos: number;
}
interface Comment {
  id: string;
  content: string;
  commenter: string;
  commenterId: string;
}
interface Story {
  id: string;
  author: string;
  authorId: string;
  content: string;
  comments: Comment[];
  title: string;
  subTitle: string;
  createdAt: time;
  tags: string[];
}
interface FrontendComment {
  id: string;
  Head: any;
  Text: string;
  Start: boolean;
  Like: boolean;
  Dislike: boolean;
  Comments: boolean;
  commenterId: string;
}

const example_comments: FrontendComment = {
  id: "tmp",
  Head: headshot,
  Text: "Lorem ipsum dolor sit amet consectetur. Netus ut accumsan fames morbi consectetur adipiscing sem turpis dictumst vulputate. Semper mattis mattis pulvinar sed dolor eu.",
  Start: true,
  Like: false,
  Dislike: false,
  Comments: false,
  commenterId: "tmpPerson",
};
const mapStoryToClass = (data: Story) => {
  var _comment = data.comments;
  if (_comment.length == 0) {
    return [];
  }
  return _comment.map((comment) => {
    const newComment: FrontendComment = { ...example_comments };
    newComment.Text = comment.content;
    newComment.id = comment.id;
    newComment.commenterId = comment.commenterId;
    return newComment;
  });
};

export default function Comments({
  isShow,
  setShow,
  storyId,
  className,
}: {
  isShow: string;
  setShow: Function;
  storyId: string;
  className?: string;
}) {
  const { data: session } = useSession();
  const handleClickClose = () => {
    if (isShow == "hidden") {
      setShow("");
    } else {
      setShow("hidden");
    }
  };
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const [comments, setComments] = useState<FrontendComment[]>([
    example_comments,
  ]);

  const [refresh, setRefresh] = useState(0);
  React.useEffect(() => {
    setRefresh(0);
    async function fetchData() {
      const res = await StoryServices.getStoryById(storyId);
      if (res && res.status === 200) {
        let story_res = res.data.story;
        console.log("getStoryById", story_res);
        let _comment = mapStoryToClass(story_res);
        setComments(_comment);
      }
    }
    fetchData();
  }, [session, refresh]);
  const [added, setAdded] = useState<string>("");
  React.useEffect(() => {
    async function modify() {
      if (!added) return;
      const resSet = await StoryServices.addComment(
        session?.user.jwtToken as string,
        added,
        storyId
      );

      setAdded(""); // reset modified state
      setInputValue("");
      setRefresh(1);
    }
    modify();
  }, [added]);
  const [deleted, setDeleted] = useState<string>("");
  //comment.commenterId == session?.user.email
  React.useEffect(() => {
    async function deleteComment() {
      if (deleted == "") return;
      const res = await StoryServices.getStoryById(storyId);
      const resSet = await StoryServices.deleteComment(
        session?.user.jwtToken as string,
        deleted
      );
      setDeleted(""); // reset modified state
      setRefresh(1);
    }
    deleteComment();
  }, [deleted]);

  const handleClickLike = (index: number, status: string) => {
    const _comment = [...comments];
    if (status == "Like") {
      if (_comment[index].Like) {
        _comment[index].Like = false;
      } else {
        _comment[index].Like = true;
        _comment[index].Dislike = false;
      }
    } else if (status == "Dislike") {
      if (_comment[index].Dislike) {
        _comment[index].Dislike = false;
      } else {
        _comment[index].Dislike = true;
        _comment[index].Like = false;
      }
    }
    setComments(_comment);
  };
  const onSaveComment = () => {
    setAdded(inputValue);
    setInputValue("");
  };
  const handleDelete = (id: string, commenterId: string) => {
    console.log("id:", id, "commenterId:", commenterId);
    if (commenterId == session?.user.email) {
      setDeleted(id);
    }
  };
  const stars = Array.from({ length: 10 }, (_, index) => (
    <div key={index} className="flex flex-row">
      <Star className="w-4 h-4" />
    </div>
  ));

  return (
    <div
      className={cn(
        "w-1/4 h-[450px] bg-background rounded-2xl border-2 border-slate-200",
        className
      )}
    >
      <div className="h-[7%] w-full">
        <div
          className="hover:bg-slate-100 w-8 h-8 rounded-2xl m-1/2"
          onClick={handleClickClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M24 8L8 24"
              stroke="#133157"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 8L24 24"
              stroke="#133157"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="h-[95%] w-full border-t-2 grid justify-items-center">
        <ScrollArea className="h-full w-11/12 m-2">
          {comments &&
            comments[0].id != "00000000-0000-0000-0000-000000000000" &&
            comments.map((comment, index) => (
              <div key={index} className="w-full flex flex-col">
                <div className="w-full flex flex-row">
                  <div className="w-1/6 m-2">
                    <Image src={comment.Head} alt="" className="w-2/3" />
                  </div>
                  <div className="w-5/6 flex flex-col">
                    <div className="w-full text-xs">{comment.Text}</div>
                    <div className="w-full flex flex-row gap-1 mt-1">
                      <div className="hover:-translate-y-0.5 pr-1">
                        <Star className="w-4 h-4" />
                      </div>
                      <div
                        onClick={() => handleClickLike(index, "Like")}
                        className="hover:-translate-y-0.5 pr-1"
                      >
                        {comment.Like ? (
                          <ThumbsUp className="fill-black w-4 h-4" />
                        ) : (
                          <ThumbsUp className="w-4 h-4" />
                        )}
                      </div>

                      <div
                        onClick={() => handleClickLike(index, "Dislike")}
                        className="hover:-translate-y-0.5 pr-1"
                      >
                        {comment.Dislike ? (
                          <ThumbsDown className="fill-black w-4 h-4" />
                        ) : (
                          <ThumbsDown className="w-4 h-4" />
                        )}
                      </div>
                      <div className="hover:-translate-y-0.5">
                        <MessageSquare className="w-4 h-4" />
                      </div>

                      <div
                        onClick={() =>
                          handleDelete(comment.id, comment.commenterId)
                        }
                        className="hover:-translate-y-0.5"
                      >
                        <Trash2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <Separator className="my-1" />
              </div>
            ))}
        </ScrollArea>
        <div className="flex flex-row">
          <div className="w-2/12 mt-3 pt-2">
            <Image
              unoptimized
              src={session?.user?.avatar as string}
              alt="here was a logo:("
              width={30}
              height={30}
              className="rounded-full w-8 h-8 m-1"
            />
          </div>
          <div className="flex flex-col m-2 gap-1">
            <div className="flex flex-row">
              <>{stars}</>
            </div>
            <div className="w-full flex flex-row gap-1">
              <Input
                placeholder="comment"
                className="w-3/4 h-2/3 text-sm border-2 border-slate-400 bg-background text-slate-600 rounded-3xl hover:bg-slate-200"
                value={inputValue}
                onChange={handleInputChange}
              />
              <Button
                type="submit"
                className="text-xs w-1/4 h-2/3 rounded-3xl hover:bg-slate-700"
                onClick={onSaveComment}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
