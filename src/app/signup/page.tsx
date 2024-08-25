"use client";
import { useState } from "react";
import Email from "./Email";
import EmailCode from "./EmailCode";
import IdAndNickname from "./IdAndNickname";
import Password from "./Password";

function Signup() {
  const [step, setStep] = useState<number>(0);

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  return (
    <div className="flex items-center justify-center w-full py-10 min-h-screen bg-gray50 dark:bg-gray950">
      {step === 0 && <Email onNext={nextStep} />}
      {step === 1 && <EmailCode onNext={nextStep} onBack={prevStep} />}
      {step === 2 && <IdAndNickname onNext={nextStep} onBack={prevStep} />}
      {step === 3 && <Password onBack={prevStep} />}
    </div>
  );
}

export default Signup;
