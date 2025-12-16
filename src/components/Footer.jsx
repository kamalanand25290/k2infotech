import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  return (
    <footer className="py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between gap-3">
        <div className="text-sm text-gray-600">
          © 2025 Your IT Company. All Rights Reserved.
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-blue-600">
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="/terms" className="hover:underline">Terms</a>
          <a href="/cookies" className="hover:underline">Cookies Policy</a>
        </div>
      </div>
      <ThemeToggle />
    </footer>

  );
}
