export interface Article {
  id: number;
  title: string;
  date: string;
  author: string;
  image: string;
  content: string;
  excerpt: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: 'اختبار يناير 2026',
    date: '2026-01-01',
    author: 'إدارة المنطقة',
    image: '/اختبار يناير2026.jpeg',
    excerpt: 'اختبار لشهر يناير 2026',
    content: `
      <p>اختبار لشهر يناير 2026</p>

      <p>هذا هو المقال الكامل لاختبار يناير 2026. يمكنك قراءة التفاصيل هنا</p>
    `
  },
  {
    id: 2,
    title: 'الكشف الطبى المقام فى منطقه اسكندريه للكاراتيه',
    date: '2026-01-04',
    author: 'إدارة المنطقة',
    image: '/medical.jpeg',
    excerpt: 'الكشف الطبى المقام فى منطقه اسكندريه للكاراتيه - عرض الملفات الطبية',
    content: `
      <p>الكشف الطبى المقام فى منطقه اسكندريه للكاراتيه</p>

      <h3>المستوي التالت</h3>
      <div style="margin: 10px 0; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
        <iframe src="/المستوي التالت merged (2).pdf" width="100%" height="300px" style="border: none; border-radius: 5px;"></iframe>
      </div>

      <h3>المستوي التاني بعد التعديل</h3>
      <div style="margin: 10px 0; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
        <iframe src="/المستوي التاني بعد التعديل merged (2).pdf" width="100%" height="300px" style="border: none; border-radius: 5px;"></iframe>
      </div>
    `
  },
  {
    id: 3,
    title: 'انطلاق معسكر تدريبي للناشئين',
    date: '2024-01-05',
    author: 'إدارة المنطقة',
    image: 'https://images.pexels.com/photos/7045729/pexels-photo-7045729.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'بدأت المنطقة معسكراً تدريبياً مكثفاً للناشئين استعداداً للبطولات القادمة',
    content: `
      <p>أطلقت منطقة الإسكندرية للكاراتيه معسكراً تدريبياً مكثفاً لأكثر من 50 لاعباً ناشئاً، استعداداً للبطولات القادمة والموسم الرياضي الجديد. يشرف على المعسكر مدربون محترفون ذوو خبرة عالية في رياضة الكاراتيه.</p>

      <p>يهدف المعسكر إلى تطوير المهارات الفنية وتحسين اللياقة البدنية وتعزيز روح الفريق والانضباط لدى اللاعبين. يتضمن البرنامج تدريبات نظرية وعملية يومية، بالإضافة إلى محاضرات توعوية لدعم نمو اللاعبين الشباب.</p>

      <p>يستمر المعسكر لمدة أسبوعين، مع التركيز على اكتشاف المواهب الجديدة وإعداد جيل جديد من الأبطال الذين سيمثلون الإسكندرية بكفاءة في البطولات القادمة.</p>
    `
  }
];