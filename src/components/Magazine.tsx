import { BookOpen, Download, Eye } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface MagazineIssue {
  id: number;
  title: string;
  issue: string;
  date: string;
  cover: string;
  description: string;
}

export default function Magazine() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const issues: MagazineIssue[] = [
    {
      id: 1,
      title: 'أبناؤنا في الخارج ',
      issue: 'العدد 15',
      date: 'يناير 2024',
      cover: 'تكريم-الرئيس.jpg',
      description: 'في هذا العدد: مقابلة حصرية مع أبطالنا فى الخارج تغطية شاملة للإنجازات',
    },
    {
      id: 2,
      title: 'أبناء الصعيد ',
      issue: 'العدد 14',
      date: 'ديسمبر 2023',
      cover: 'ابناء الصعيد.jpg',
      description: 'تغطية شاملة لبطولة الجمهورية، قصص النجاح، وملف خاص عن تطوير المواهب الشابة بالصعيد ',
    },
    {
      id: 3,
      title: 'الدوريات والمسابقات ',
      issue: 'العدد 13',
      date: 'نوفمبر 2023',
      cover: 'مسابقات.jpeg',
      description: 'ملف خاص عن مستقبل الكاراتيه في الإسكندرية، لقاءات مع المدربين، وخطط التطوير',
    },
  ];

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
          {issues.map((issue, index) => (
            <div
              key={issue.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={issue.cover}
                  alt={issue.title}
                  className="w-full h-80 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold animate-pulse">
                  {issue.issue}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  {issue.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{issue.date}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {issue.description}
                </p>
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                    <Eye size={20} />
                    <span>اقرأ الآن</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-gray-200 text-gray-700 px-4 rounded-lg hover:bg-gray-300 transition-all duration-300 transform hover:scale-105">
                    <Download size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl animate-pulse">
            عرض جميع الأعداد
          </button>
        </div>
      </div>
    </section>
  );
}
