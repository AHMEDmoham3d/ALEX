import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">AK</span>
              </div>
              <div className="text-right">
                <h3 className="font-bold">منطقة الإسكندرية</h3>
                <p className="text-sm text-gray-400">للكاراتيه</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              نسعى لتطوير رياضة الكاراتيه في الإسكندرية وتخريج أبطال على مستوى الجمهورية والعالم
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#news" className="text-gray-400 hover:text-white transition-colors">الأخبار</a></li>
              <li><a href="#magazine" className="text-gray-400 hover:text-white transition-colors">المجلة الرياضية</a></li>
              <li><a href="#board" className="text-gray-400 hover:text-white transition-colors">مجلس الإدارة</a></li>
              <li><a href="#achievements" className="text-gray-400 hover:text-white transition-colors">الإنجازات</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} />
                <span dir="ltr">+20 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} />
                <span>info@alex-karate.eg</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} />
                <span>الإسكندرية، مصر</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">تابعنا</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>&copy; 2024 منطقة الإسكندرية للكاراتيه. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
