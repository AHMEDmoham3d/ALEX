import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    if (inView) {
      const interval1 = setInterval(() => {
        setCount1(prev => prev < 120 ? prev + 1 : 120);
      }, 10);
      return () => clearInterval(interval1);
    }
  }, [inView]);

  useEffect(() => {
    if (inView) {
      const interval2 = setInterval(() => {
        setCount2(prev => prev < 500 ? prev + 5 : 500);
      }, 10);
      return () => clearInterval(interval2);
    }
  }, [inView]);

  useEffect(() => {
    if (inView) {
      const interval3 = setInterval(() => {
        setCount3(prev => prev < 25 ? prev + 1 : 25);
      }, 10);
      return () => clearInterval(interval3);
    }
  }, [inView]);
  return (
    <section className="relative text-white py-32 overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900" style={{ backgroundImage: 'url(/main.jpg)', backgroundSize: 'cover', backgroundPosition: '50% 80%' }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            منطقة الإسكندرية للكاراتيه
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            طريقنا نحو البطولات والتميز
          </p>

          <div ref={ref} className="flex flex-wrap justify-center gap-8 mt-12 transition-all duration-1000 delay-500 opacity-100 translate-y-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 min-w-[200px] hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy mx-auto mb-3 text-yellow-400 animate-pulse">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
              </svg>
              <p className="text-3xl font-bold">{count1}+</p>
              <p className="text-sm text-gray-300">بطولة</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 min-w-[200px] hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users mx-auto mb-3 text-blue-400 animate-pulse" style={{animationDelay: '0.5s'}}>
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <p className="text-3xl font-bold">{count2}+</p>
              <p className="text-sm text-gray-300">لاعب</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 min-w-[200px] hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award mx-auto mb-3 text-green-400 animate-pulse" style={{animationDelay: '1s'}}>
                <circle cx="12" cy="8" r="6"></circle>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
              </svg>
              <p className="text-3xl font-bold">{count3}+</p>
              <p className="text-sm text-gray-300">مدرب محترف</p>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-16">
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg text-xl font-semibold">
              اكتشف إنجازاتنا
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
