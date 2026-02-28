export default function App() {
  return (
    <div className="max-h-screen flex flex-col items-center justify-center p-10 ">
      <div className=" w-full flex flex-col items-center gap-8 text-5xl">
        <img
          className="w-full max-w-sm rounded-2xl shadow-2xl"
          src="/home.png"
          alt="home page photo"
        />
        <h1 className=" md:text-6xl font-bold text-center">
          Welcome to{" "}
          <span className=" font-black tracking-tighter  bg-linear-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent ">
            Bookie
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 text-center max-w-2xl">
          Discover, track, and organize your reading journey
        </p>
      </div>
    </div>
  );
}
