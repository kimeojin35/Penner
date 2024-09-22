// signup-form-schema.tsx
import { z } from "zod";

export const emailSchema = z.object({
  email: z.string().email({
    message: "이메일 형식이 잘못되었습니다",
  }),
});

export const signUpFormSchema = z
  .object({
    id: z
      .string()
      .min(3, { message: "ID는 최소 3자 이상이어야 합니다." })
      .max(20, { message: "ID는 최대 20자 이하여야 합니다." })
      .regex(/^[a-zA-Z0-9_]+$/, {
        message: "ID는 영문자, 숫자, 밑줄(_)만 포함할 수 있습니다.",
      }),
    nickname: z
      .string()
      .min(2, { message: "닉네임은 최소 2자 이상이어야 합니다." })
      .max(20, { message: "닉네임은 최대 20자 이하여야 합니다." }),
    emailCode: z
      .string()
      .length(6, { message: "인증 코드는 6자리 숫자여야 합니다." })
      .regex(/^[0-9]+$/, {
        message: "인증 코드는 숫자만 포함할 수 있습니다.",
      }),
    password: z
      .string()
      .regex(
        /^(?=.*[a-zA-Z])(?=.*[0-9]).{2,20}$/,
        "숫자를 포함하여 2자 이상 입력해주세요."
      ),
    passwordCheck: z.string(),
  })
  .refine((data) => data.password === data.passwordCheck, {
    path: ["passwordCheck"],
    message: "비밀번호를 확인해주세요",
  });

export type SignUpFormValues = z.infer<typeof signUpFormSchema>;

export const defaultValues: SignUpFormValues = {
  id: "",
  nickname: "",
  emailCode: "",
  password: "",
  passwordCheck: "",
};
