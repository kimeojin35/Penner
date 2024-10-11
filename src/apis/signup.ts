import { createClient } from "@/utils/supabase/client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const supabase = createClient();

export const signupHandler = async (
  router: AppRouterInstance,
  signupData: {
    email: any;
    id?: string;
    nickname?: string;
    password: any;
    passwordCheck?: string;
  }
) => {
  const { data, error } = await supabase.auth.signUp({
    email: signupData.email,
    password: signupData.password,
    options: {
      data: {
        id: signupData.id,
        nickname: signupData.nickname,
      },
    },
  });

  if (error) {
    console.error("회원가입 오류:", error.message);
    return { error }; // 오류를 반환
  } else {
    router.push("/login");
  }

  return { data }; // 성공적으로 가입된 데이터 반환
};
