// "use client";
// import { Buttons } from "@/components";
// import React, { useRef, useState, useEffect } from "react";
// import { signUpFormSchema } from "@/utils/signup-form-schema"; // 이메일 코드 유효성 검사 스키마 가져오기
// import { z } from "zod";

// interface SignupProps {
//   onNext?: () => void;
// }

// function EmailCode({ onNext }: SignupProps) {
//   const [emailCode, setEmailCode] = useState<string[]>([
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//   ]);
//   const initialTime = 300;
//   const [remainingTime, setRemainingTime] = useState<number>(initialTime);
//   const inputsRef = useRef<HTMLInputElement[]>([]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       if (remainingTime > 0) {
//         setRemainingTime((prevTime) => prevTime - 1);
//       } else {
//         clearInterval(timer);
//       }
//     }, 1000);
//     return () => clearInterval(timer);
//   }, [remainingTime]);

//   const formatTime = (timeInSeconds: number) => {
//     const minutes = Math.floor(timeInSeconds / 60);
//     const seconds = timeInSeconds % 60;
//     return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
//       2,
//       "0"
//     )}`;
//   };

//   const handleResendClick = () => {
//     setRemainingTime(initialTime);
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     index: number
//   ) => {
//     const { value } = e.target;

//     if (/^[0-9a-zA-Z]*$/.test(value)) {
//       const newEmailCode = [...emailCode];
//       newEmailCode[index] = value;
//       setEmailCode(newEmailCode);

//       if (value && index < emailCode.length - 1) {
//         inputsRef.current[index + 1]?.focus();
//       }

//       if (newEmailCode.every((code) => code.length === 1)) {
//         console.log("All codes entered:", newEmailCode.join(""));
//       }
//     }
//   };

//   const handleKeyDown = (
//     e: React.KeyboardEvent<HTMLInputElement>,
//     index: number
//   ) => {
//     if (e.key === "Backspace" && !emailCode[index] && index > 0) {
//       inputsRef.current[index - 1]?.focus();
//     }
//   };

//   const handleNext = () => {
//     const enteredCode = emailCode.join("");

//     try {
//       // 인증 코드 필드만 유효성 검사
//       signUpFormSchema.shape.emailCode.parse(enteredCode);
//       onNext?.();
//     } catch (e) {
//       if (e instanceof z.ZodError) {
//         const errorMessage = e.errors[0]?.message || "유효성 검사 실패";
//         alert(errorMessage);
//       }
//     }
//   };

//   return (
//     <>
//       <div className="w-full flex flex-col gap-3">
//         <div className="w-full flex justify-center items-center gap-2">
//           {emailCode.map((txt, idx) => (
//             <div
//               key={idx}
//               className="h-[66px] w-[66px] rounded-lg border border-gray300 focus-within:border-black flex justify-center items-center"
//             >
//               <input
//                 ref={(el) => {
//                   if (el) inputsRef.current[idx] = el;
//                 }}
//                 maxLength={1}
//                 type="text"
//                 className="text-medium24 w-full text-center"
//                 value={txt}
//                 onChange={(e) => handleChange(e, idx)}
//                 onKeyDown={(e) => handleKeyDown(e, idx)}
//                 autoFocus={idx === 0}
//               />
//             </div>
//           ))}
//         </div>
//         <div className="w-full flex px-1 justify-between">
//           <div className="flex gap-1.5">
//             <p className="text-medium16 text-gray600">
//               이메일을 받지 못했나요?
//             </p>
//             <p
//               onClick={() => handleResendClick()}
//               className="text-semibold16 cursor-pointer"
//             >
//               재전송
//             </p>
//           </div>
//           <p className="text-medium16 text-gray600">
//             {formatTime(remainingTime)}
//           </p>
//         </div>
//       </div>
//       <Buttons onClick={handleNext} text="인증코드 보내기" />
//     </>
//   );
// }

// export default EmailCode;
