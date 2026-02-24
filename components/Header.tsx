import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <nav className="flex justify-between items-center px-6 sm:px-12 py-6 relative">
      <div className="text-xl font-bold bg-gradient-to-r from-sky-500 to-blue-500 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
        Ali
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6">
        <button className="text-zinc-700 dark:text-zinc-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-200 font-medium">
          Work
        </button>
        <button className="text-zinc-700 dark:text-zinc-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-200 font-medium">
          Contact
        </button>
      </div>

      {/* Mobile Navigation */}
      <MobileMenu />
    </nav>
  );
}
