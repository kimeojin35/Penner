import React from "react";

function Banner() {
  return (
    <div className="flex w-full h-[280px] items-center justify-center bg-gray100">
      <div className="flex flex-col w-full max-w-[1400px] h-full p-6 gap-4 justify-end">
        <p className="text-black text-header32Bold">아름다운 그림</p>
        <p className="text-gray500 text-details18Medium">
          당신은 아름답고 화려한 그림으로 배틀을 할 수 있다.
          <br />
          이런 놀라운! 힘세고 강한 그림
        </p>
      </div>
    </div>
  );
}

export default Banner;
