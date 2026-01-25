 import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function BoardOfDirectors() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [hoveredDirector, setHoveredDirector] = useState<number | null>(null);

  const directors = [
    {
      name: 'اللواء:معتز زمزم',
      image: '/كابتن زمزم.png',
      position: 'رئيس مجلس الإدارة',
      experience: '15 سنة في رياضة الكاراتيه',
      achievements: 'بطل الجمهورية 5 مرات، مدرب دولي معتمد',
      bio: 'قائد مخضرم في مجال الكاراتيه، ساهم في تطوير الرياضة محلياً ودولياً.'
    },
    {
      name: 'كابتن عادل حمدى',
      image: '/كابتن عادل.png',
      position: 'نائب الرئيس',
      experience: '12 سنة في التدريب والإدارة',
      achievements: 'مدرب المنتخب الوطني، منظم بطولات دولية',
      bio: 'خبير في تطوير البرامج التدريبية وتنظيم الفعاليات الرياضية.'
    },
    {
      name: 'كابتن كامل',
      image: '/كابتن كامل.jpeg',
      position: 'أمين الصندوق',
      experience: '10 سنوات في الإدارة المالية',
      achievements: 'خبير في إدارة الميزانيات الرياضية، منظم مالي معتمد',
      bio: 'مسؤول عن الشؤون المالية والإدارية للمنطقة بكفاءة عالية.'
    },
  ];

  return (
    <section ref={ref} id="board" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-white font-bold text-xl">BD</span>
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            مجلس الإدارة
          </h2>
          <p className="text-xl text-gray-600">
            قيادة المنطقة نحو التميز والإنجازات
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {directors.map((director, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-110 group-hover:rotate-y-12 group cursor-pointer"
              style={{
                animationDelay: `${index * 200}ms`,
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
              onMouseEnter={() => setHoveredDirector(index)}
              onMouseLeave={() => setHoveredDirector(null)}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-full h-full object-contain transition-all duration-1000 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Floating particles animation */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-red-400 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{ animationDelay: '0.8s' }}></div>
                  <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{ animationDelay: '1.1s' }}></div>
                </div>
              </div>

              <div className={`p-6 text-center bg-gradient-to-r from-blue-50 to-indigo-50 transition-all duration-700 ${hoveredDirector === index ? 'h-auto' : 'h-20'}`}>
                {hoveredDirector === index ? (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {director.name}
                    </h3>
                    <p className="text-lg font-semibold text-yellow-400">{director.position}</p>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-semibold text-green-400">الخبرة:</span> {director.experience}</p>
                      <p><span className="font-semibold text-purple-400">الإنجازات:</span> {director.achievements}</p>
                      <p className="leading-relaxed text-xs">{director.bio}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {director.name}
                    </h3>
                    <p className="text-gray-600 group-hover:text-indigo-600 transition-colors duration-300">
                      {director.position}
                    </p>
                  </>
                )}
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              {/* Glowing border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-700 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Advanced animated background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse shadow-2xl shadow-blue-500/20"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-500/10 rounded-full animate-bounce shadow-2xl shadow-indigo-500/20" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-500/10 rounded-full animate-pulse shadow-2xl shadow-purple-500/20" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/4 right-1/2 w-20 h-20 bg-red-500/10 rounded-full animate-ping shadow-2xl shadow-red-500/20" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-28 h-28 bg-green-500/10 rounded-full animate-pulse shadow-2xl shadow-green-500/20" style={{ animationDelay: '4s' }}></div>

          {/* Floating geometric shapes */}
          <div className="absolute top-1/3 left-1/5 w-4 h-4 border-2 border-blue-300 rotate-45 animate-spin opacity-30" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-1/3 right-1/5 w-6 h-6 border-2 border-indigo-300 rounded-full animate-bounce opacity-20" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 left-2/3 w-3 h-3 bg-purple-300 rounded-full animate-ping opacity-40" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>
    </section>
  );
}
