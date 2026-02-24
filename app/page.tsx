import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 dark:from-zinc-900 dark:to-zinc-900 transition-colors duration-300">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 sm:px-12 text-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-bold text-zinc-700 dark:text-zinc-300 mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-sky-500 to-blue-500 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent">Ali</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed mb-8">
            I'm a designer and developer passionate about helping organizations establish a meaningful digital presence. I combine thoughtful design with clean code to create digital experiences that make a real impact.
          </p>

          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-blue-500 dark:from-sky-400 dark:to-blue-400 text-white font-semibold hover:shadow-lg hover:shadow-sky-500/30 dark:hover:shadow-sky-400/30 transition-all duration-200 transform hover:-translate-y-0.5">
              Let's Work Together
            </button>
            <button className="px-8 py-3 rounded-lg border-2 border-sky-500 dark:border-sky-400 text-sky-600 dark:text-sky-400 font-semibold hover:bg-sky-50 dark:hover:bg-zinc-800 transition-all duration-200">
              View My Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
