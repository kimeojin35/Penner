import React from "react";

interface TagPropsType {
  text?: string;
  onClick?: () => void;
}

export const RelatedSearchTag = ({ text, onClick }: TagPropsType) => {
  return (
    <div
      onClick={onClick}
      className="flex px-4 py-2 transition-all bg-white border rounded-full cursor-pointer border-gray200 hover:bg-gray50 dark:bg-gray900 dark:border-gray800 dark:hover:bg-gray800"
    >
      <p className="text-medium16 text-gray700 dark:text-white">{text}</p>
    </div>
  );
};
