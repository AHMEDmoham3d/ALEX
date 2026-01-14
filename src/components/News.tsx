import { Calendar, ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export default function News() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const openModal = (src: string) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'اختبار يناير 2026',
      date: '2026-01-01',
      image: '/اختبار يناير2026.jpeg',
      excerpt: 'اختبار لشهر يناير 2026',
    },
    {
      id: 2,
      title: 'تكريم الأبطال في حفل سنوي',
      date: '2024-01-08',
      image: '/تكريم.jpg',
      excerpt: 'أقامت المنطقة حفل تكريم للاعبين المميزين والمدربين الذين ساهموا في تحقيق الإنجازات',
    },
    {
      id: 3,
      title: 'انطلاق معسكر تدريبي للناشئين',
      date: '2024-01-05',
      image: 'https://images.pexels.com/photos/7045729/pexels-photo-7045729.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'بدأت المنطقة معسكراً تدريبياً مكثفاً للناشئين استعداداً للبطولات القادمة',
    },
  ];

  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          أحدث الأخبار
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => openModal(item.image)}
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar size={16} />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.excerpt}
                </p>
                <button
                  onClick={() => navigate(`/article/${item.id}`)}
                  className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors"
                >
                  <span>اقرأ المزيد</span>
                  <ArrowLeft size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full p-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Zoomed"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
