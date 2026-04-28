export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-gray-500">
          © 2026 Alex Chen. Built with React and Tailwind.
        </div>
        <div className="flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-blue-600 transition-colors">Twitter</a>
          <a href="#" className="hover:text-blue-600 transition-colors">GitHub</a>
          <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
