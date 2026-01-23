import { BookOpen, Download, Eye } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { magazineIssues } from '../data/magazineData';

export default function Magazine() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} id="magazine" className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center items-center gap-3 mb-4">
            <BookOpen className="text-red-600 animate-pulse" size={48} />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            المجلة الرياضية
          </h2>
          <p className="text-xl text-gray-600">
            أخبار وتغطيات حصرية من منطقة الإسكندرية للكاراتيه
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {magazineIssues.map((issue, index) => (
            <div
              key={issue.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={issue.cover}
                  alt={issue.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold">
                  {issue.issue}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  {issue.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{issue.date}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {issue.description}
                </p>

                <Link
                  to={`/magazine/${issue.id}`}
                  className="text-red-600 hover:text-red-800 font-semibold mb-6 inline-block"
                >
                  اقرأ المزيد
                </Link>

                <div className="flex gap-3">
                  <Link to={`/magazine/${issue.id}`} className="flex-1">
                    <button className="w-full flex items-center justify-center gap-2 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
                      <Eye size={20} />
                      اقرأ الآن
                    </button>
                  </Link>

                  <button className="flex items-center justify-center gap-2 bg-gray-200 text-gray-700 px-4 rounded-lg hover:bg-gray-300">
                    <Download size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
