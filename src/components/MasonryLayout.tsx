"use client";
import React, { useState, useEffect } from "react";
import { ImageCard, ImageModal } from ".";

interface MasonryLayoutProps {
  ImageCardArr: string[];
  searchState: string;
}

export const MasonryLayout = ({
  ImageCardArr,
  searchState = "",
}: MasonryLayoutProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [imageFilter, setImageFilter] = useState<string[]>(ImageCardArr);
  useEffect(() => {
    filterImageValue();
  }, [searchState]);

  const filterImageValue = () => {
    const filtered = ImageCardArr.filter((i) => i.includes(searchState));
    setImageFilter(filtered);
  };

  return (
    <div className="flex w-full justify-center">
      {imageFilter.length > 0 ? (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-5 gap-4 relative transition-all">
          {imageFilter.map((h, index) => (
            <ImageCard
              key={index}
              height={h}
              title={h}
              onClick={() => setModalVisible(true)}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-[60vh]">
          <p className="text-medium16 dark:text-gray600 text-gray300">
            검색 결과가 없습니다
          </p>
        </div>
      )}
      {modalVisible && (
        <ImageModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      )}
    </div>
  );
};
