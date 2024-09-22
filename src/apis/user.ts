import { createClient } from "@/utils/supabase/client";
import { FormEvent } from "react";
const supabase = createClient();

const signupHandler = async (e: FormEvent) => {
  e.preventDefault();
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) console.error(error);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

const loginHandler = async (e: FormEvent) => {
  e.preventDefault();
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) console.error(error);
    if (data) {
      dispatch({
        type: "LOGIN",
        payload: { email: data.user?.email, id: data.user?.id },
      });
    }
  } catch (error) {
    console.error(error);
  }
};
