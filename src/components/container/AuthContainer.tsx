export default function AuthContainer({
  children,
  onSubmit,
}: {
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}) {
  return (
    <main className="w-screen h-screen bg-gray-100 flex justify-center align-center items-center">
      <form
        className="w-[400px] bg-background rounded-xl px-6 py-8 flex flex-col gap-6"
        onSubmit={onSubmit}>
        <img
          className="m-auto"
          width={134}
          height={24}
          src="/logo.svg"
          alt="logo"
        />
        {children}
      </form>
    </main>
  );
}
