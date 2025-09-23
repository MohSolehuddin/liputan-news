"use client";
import AuthContainer from "@/components/container/AuthContainer";
import InputGroup from "@/components/input/InputGroup";
import InputPassword from "@/components/input/InputPassword";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/lib/axiosIntance";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import loginSchema from "./loginSchema";

export default function page() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await axiosInstance.post("/auth/login", data);
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      router.push("/");
    } catch (error) {
      console.log("Error", error);
    }
  });

  return (
    <AuthContainer onSubmit={onSubmit}>
      <section className="flex flex-col gap-3">
        <InputGroup
          label="Username"
          placeholder="Input username"
          register={register("username")}
          error={errors.username?.message}
        />
        <InputPassword
          label="Password"
          placeholder="Input password"
          register={register("password")}
          error={errors.password?.message}
        />
      </section>
      <Button className="w-full">Login</Button>
      <p className="m-auto text-sm font-normal text-slate-600">
        Don't have an account?{" "}
        <a className="underline text-primary" href="/register">
          Register
        </a>
      </p>
    </AuthContainer>
  );
}
