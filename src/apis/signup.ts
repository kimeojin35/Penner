import { createClient } from "@/utils/supabase/client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const supabase = createClient();

export const signupHandler = async (
  data: any,
  router: string[] | AppRouterInstance
) => {
  try {
    const { email, password, nickname } = data;

    // 먼저 이메일이 이미 존재하는지 확인
    const { data: existingUser, error: checkError } = await supabase
      .from("user")
      .select("email")
      .eq("email", email);

    if (existingUser && existingUser.length > 0) {
      console.error("가입되어 있는 이메일입니다.");
      return;
    }

    const { data: signupData, error: signupError } = await supabase.auth.signUp(
      {
        email,
        password,
      }
    );

    // if (signupError) {
    //   console.error("Signup error:", signupError);
    //   return;
    // }

    // 새로운 유저 정보 추가
    const user = signupData?.user;

    // if (!user) {
    //   console.error("No user returned after signup");
    //   return;
    // }

    const { error: userInfoError } = await supabase.from("user").insert({
      id: user?.id, // Supabase 유저 ID
      email: email,
      nickname: nickname,
      password: password,
    });

    // if (userInfoError) {
    //   console.error("Error inserting into userinfo:", userInfoError);
    //   return;
    // }
    router.push("/login");
  } catch (error) {}
};
