import { z } from "zod";

const emailValidator = z
  .string()
  .min(1, { message: "این فیلد اجباری است." })
  .email({ message: "ایمیل نامعتبر می باشد." });

const phoneValidator = z
  .string()
  .min(1, { message: "این فیلد اجباری است." })
  .regex(/((0?9)|(\+?989))\d{9}/g, {
    message: "شماره موبایل نامعتبر می باشد.",
  });

const usernameValidator = z
  .string()
  .min(1, { message: "این فیلد اجباری است." })
  .min(3, { message: "نام کاربری باید حداقل 3 کاراکتر باشد." });

const nameValidator = z.string().min(1, { message: "این فیلد اجباری است." });

const passwordValidator = z
  .string()
  .min(1, { message: "این فیلد اجباری می باشد." })
  .min(8, { message: "رمز عبور باید حداقل 8 کاراکتر باشد." })
  .regex(/[A-Za-z]/, {
    message: "رمز عبور باید شامل حداقل یک حرف انگلیسی باشد.",
  })
  .regex(/[0-9]/, {
    message: "رمز عبور باید شامل حداقل یک عدد باشد.",
  });

export {
  emailValidator,
  phoneValidator,
  usernameValidator,
  nameValidator,
  passwordValidator,
};
