"use client";
import AuthContainer from "@/components/container/AuthContainer";
import InputGroup from "@/components/input/InputGroup";
import InputPassword from "@/components/input/InputPassword";
import InputSelect from "@/components/input/InputSelect";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import registerSchema from "./registerSchema";
export default function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const onSubmit = handleSubmit((data) => console.log(data));

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
        <InputSelect
          label="Role"
          placeholder="Select Role"
          options={["User", "Admin"]}
        />
      </section>
      <Button className="w-full">Login</Button>
      <p className="m-auto text-sm font-normal text-slate-600">
        Already have an account?{" "}
        <a className="underline text-primary" href="/login">
          Login
        </a>
      </p>
    </AuthContainer>
  );
}
