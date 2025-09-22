import InputGroup from "@/components/input/InputGroup";
import InputPassword from "@/components/input/InputPassword";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <main className="w-screen h-screen bg-gray-100 flex justify-center align-center items-center">
      <section className="w-[400px] bg-background rounded-xl px-6 py-8 flex flex-col gap-6">
        <img
          className="m-auto"
          width={134}
          height={24}
          src="/logo.svg"
          alt="logo"
        />
        <section className="flex flex-col gap-3">
          <InputGroup label="Email" placeholder="Input email" />
          <InputPassword label="Password" placeholder="Input password" />
        </section>
        <Button className="w-full">Login</Button>
        <p className="m-auto">
          Don't have an account?{" "}
          <a className="underline text-primary" href="/register">
            Register
          </a>
        </p>
      </section>
    </main>
  );
}
