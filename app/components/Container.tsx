export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}