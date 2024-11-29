"use client";
import { Arrow, FileUpload, Grid, List } from "@/assets";
import { Input } from "@/components";
import React, { useState } from "react";

function Edit() {
  const [listType, setListType] = useState<boolean>(false);

  return (
    <div className="flex justify-center pb-40 w-full bg-gray50 dark:bg-gray950 pr-6 pl-32">
      <div className="flex flex-col gap-10 p-6 w-full max-w-[1200px] min-h-screen">
        <div className="w-full gap-10 flex flex-col pt-24">
          <div className="flex p-3 w-fit rounded-md border border-gray200 hover:bg-gray50 cursor-pointer">
            <Arrow size={20} direction="left" className="text-gray600" />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-bold40">갤러리 업로드</p>
            <p className="text-medium16 text-gray500">
              사진을 선택해 갤러리에 이것저것 올려보세요.
            </p>
          </div>
        </div>
        <div className="w-full flex gap-10">
          <div className="flex flex-col gap-3">
            <div className="border border-gray200 rounded-2xl bg-gray100 flex flex-col justify-center items-center w-[400px] h-[480px] gap-5">
              <FileUpload size={48} className="text-gray400" />
              <p className="text-gray500 text-medium16 text-center">
                파일을 선택하거나
                <br />
                여기로 끌어다 놓으세요.
              </p>
            </div>
            <ul className="text-medium14 text-gray400 list-disc pl-4">
              <li>50MB 미만의 고화질 jpg 파일</li>
              <li>200MB 미만의 mp4 파일 권장</li>
            </ul>
          </div>
          <div className="w-full flex flex-col gap-8">
            <Input
              title={
                <>
                  제목 <span className="text-pink500">*</span>
                </>
              }
              placeholder="제목"
            />
            <Input title="태그" placeholder="공백이나 Enter로 태그 삽입" />
            <div className="w-full flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-medium16">
                  이미지 <span className="text-pink500">*</span>
                </p>
                <div className="flex items-center justify-center gap-3">
                  <List size={20} className="text-gray300" />
                  <div className="h-3 w-[1px] bg-gray200" />
                  <Grid size={20} className="" />
                </div>
              </div>
              <div className="flex gap-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
