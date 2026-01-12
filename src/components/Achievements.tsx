import { Medal, Star, Target } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: 'medal' | 'star' | 'target';
  color: string;
}

export default function Achievements() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'بطولة الجمهورية 2024',
      description: '15 ميدالية ذهبية و 12 فضية و 8 برونزية',
      icon: 'medal',
      color: 'bg-yellow-500',
    },
    {
      id: 2,
      title: 'المركز الأول على مستوى الجمهورية',
      description: 'للمرة الخامسة على التوالي',
      icon: 'star',
      color: 'bg-blue-500',
    },
    {
      id: 3,
      title: 'تأهيل 20 لاعب للمنتخب الوطني',
      description: 'أكبر عدد من المتأهلين على مستوى المناطق',
      icon: 'target',
      color: 'bg-green-500',
    },
  ];

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'medal':
        return <Medal size={48} />;
      case 'star':
        return <Star size={48} />;
      case 'target':
        return <Target size={48} />;
      default:
        return <Medal size={48} />;
    }
  };

  return (
    <section ref={ref} id="achievements" className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-4">
            إنجازاتنا
          </h2>
          <p className="text-gray-300 mb-12 text-lg">
            فخورون بما حققناه معاً
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl border border-white/20"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`${achievement.color} w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto animate-pulse`}>
                {getIcon(achievement.icon)}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">
                {achievement.title}
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-500/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className={`mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-center transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold mb-4">انضم إلينا</h3>
          <p className="text-lg mb-6 text-red-100">
            كن جزءاً من قصة النجاح وحقق أحلامك الرياضية معنا
          </p>
          <button className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl animate-pulse">
            سجل الآن
          </button>
        </div>
      </div>
    </section>
  );
}
