function LandingPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="max-w-3xl px-6 text-center">
        <div className="mb-6 inline-flex rounded-full bg-indigo-100 px-4 py-2 font-semibold text-indigo-600">
          Media & Information Literacy
        </div>

        <h1 className="text-6xl font-extrabold tracking-tight text-slate-900">
          Think Before You
          <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            {" "}
            Trust.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Face realistic digital situations, make your decisions and discover
          what happens next.
        </p>

        <button
          className="
            mt-8 rounded-2xl
            bg-gradient-to-r
            from-indigo-500
            to-cyan-500
            px-7 py-4
            font-bold text-white
            shadow-lg
            transition
            hover:-translate-y-1
            hover:shadow-xl
          "
        >
          Start Your Digital Challenge →
        </button>
      </div>
    </main>
  );
}

export default LandingPage;