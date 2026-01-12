import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'الرئيسية', path: '/' },
    { id: 'news', label: 'الأخبار', path: '/#news' },
    { id: 'magazine', label: 'المجلة الرياضية', path: '/#magazine' },
    { id: 'achievements', label: 'الإنجازات', path: '/#achievements' },
  ];

  return (
    <header className="bg-gradient-to-r from-red-800 to-red-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-red-800 font-bold text-2xl">AK</span>
            </div>
            <div className="text-right">
              <h1 className="text-xl font-bold">منطقة الإسكندرية للكاراتيه</h1>
              <p className="text-sm text-red-100"></p>
            </div>
          </Link>

          <nav className="hidden md:flex gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="hover:text-yellow-300 transition-colors duration-200 font-semibold"
                onClick={(e) => {
                  if (item.path.includes('#')) {
                    e.preventDefault();
                    onNavigate(item.id);
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={(e) => {
                  if (item.path.includes('#')) {
                    e.preventDefault();
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  } else {
                    setIsMenuOpen(false);
                  }
                }}
                className="block w-full text-right py-2 px-4 hover:bg-red-700 rounded transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
