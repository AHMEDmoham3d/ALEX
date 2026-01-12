import { Trophy, Users, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

export default function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [tournaments, setTournaments] = useState(0);
  const [players, setPlayers] = useState(0);
  const [coaches, setCoaches] = useState(0);

  useEffect(() => {
    if (inView) {
      const animateCounter = (setter: (value: number) => void, target: number, duration: number, delay: number = 0) => {
        setTimeout(() => {
          let current = 0;
          const increment = target / (duration / 16); // 60fps
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setter(target);
              clearInterval(timer);
            } else {
              setter(Math.floor(current));
            }
          }, 16);
        }, delay);
      };

      animateCounter(setTournaments, 120, 2000, 0);
      animateCounter(setPlayers, 500, 2000, 500);
      animateCounter(setCoaches, 25, 2000, 1000);
    }
  }, [inView]);

  return (
    <section ref={ref} className="relative bg-gradient-to-br from-gray-900 via-red-900 to-black text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-bottom opacity-50"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-500/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-500/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${inView ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            منطقة الإسكندرية للكاراتيه
          </h2>
          <p className={`text-xl md:text-2xl mb-8 text-gray-200 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            طريقنا نحو البطولات والتميز
          </p>

          <div className={`flex flex-wrap justify-center gap-8 mt-12 transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 min-w-[200px] hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <Trophy className="mx-auto mb-3 text-yellow-400 animate-pulse" size={48} />
              <p className="text-3xl font-bold">{tournaments}+</p>
              <p className="text-sm text-gray-300">بطولة</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 min-w-[200px] hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <Users className="mx-auto mb-3 text-blue-400 animate-pulse" size={48} style={{ animationDelay: '0.5s' }} />
              <p className="text-3xl font-bold">{players}+</p>
              <p className="text-sm text-gray-300">لاعب</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 min-w-[200px] hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <Award className="mx-auto mb-3 text-green-400 animate-pulse" size={48} style={{ animationDelay: '1s' }} />
              <p className="text-3xl font-bold">{coaches}+</p>
              <p className="text-sm text-gray-300">مدرب محترف</p>
            </div>
          </div>

          {/* Call to action */}
          <div className={`mt-16 transition-all duration-1000 delay-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse">
              اكتشف إنجازاتنا
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
