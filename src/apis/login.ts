import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export const loginHandler = async (loginData: {
  email: string;
  password: string;
}) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginData.email,
      password: loginData.password,
    });

    if (error) {
      throw error;
    }

    return { data };
  } catch (error) {
    console.error("Error signing in:", error);
    return { error };
  }
};
