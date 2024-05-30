import React from "react";

interface TagProps {
  text: string;
}

function Tag({ text }: TagProps) {
  return (
    <div className="flex rounded-lg bg-gray100 px-1.5 py-1">
      <p className="text-gray500 text-details14Medium">{text}</p>
    </div>
  );
}

export default Tag;
