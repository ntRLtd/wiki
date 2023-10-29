"use client";
import { Suspense } from "react";
import { Divider, Skeleton } from "@chakra-ui/react";
import cx from "classnames";

// import { Anton } from "next/font/google";
import FileList from "@/components/FileList";
import { FileListAction } from "@/components/FileListAction";
import { Editor } from "@/components/Editor";

// const anton = Anton({
//   weight: "400",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <div className="w-full h-screen bg-white flex-col">
      <div className="h-16 sticky top-0 p-4 shadow-sm shadow-gray-200 flex items-center bg-[#2f3439] z-50">
        <h1 className="text-lg text-white">
          <strong>规则编辑器</strong>
        </h1>
      </div>
      <div className="h-screen flex">
        <div className="w-[300px] h-full overscroll-y-auto py-4 border-r-[1px] border-r-gray-200">
          <FileListAction />
          <Divider />
          <Suspense
            fallback={
              <Skeleton>
                <div className="w-full h-[400px]" />
              </Skeleton>
            }
          >
            <FileList queryKey="root" />
          </Suspense>
        </div>
        <Suspense
          fallback={
            <Skeleton>
              <div className="w-full h-[500px]" />
            </Skeleton>
          }
        >
          <Editor />
        </Suspense>
      </div>
    </div>
  );
}
