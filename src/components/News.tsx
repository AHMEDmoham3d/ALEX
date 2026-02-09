import { Calendar, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { articles } from '../data/articles';

export default function News() {
  const navigate = useNavigate();

  const newsItems = articles;

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
              <div className="w-full h-48 overflow-y-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar size={16} />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {item.title}
                </h3>
                <div className="text-gray-600 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.excerpt }} />
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


    </section>
  );
}
