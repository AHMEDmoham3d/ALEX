import { useInView } from 'react-intersection-observer';

export default function BoardOfDirectors() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const directors = [
    {
      name: 'كابتن زمزم',
      image: '/كابتن زمزم.png',
    },
    {
      name: 'كابتن عادل',
      image: '/كابتن عادل.png',
    },
    {
      name: 'كابتن كامل',
      image: '/كابتن كامل.jpeg',
    },
  ];

  return (
    <section ref={ref} id="board" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
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
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {director.name}
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  {director.name}
                </h3>
                <p className="text-gray-600">
                  عضو مجلس الإدارة
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-500/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-500/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </section>
  );
}
