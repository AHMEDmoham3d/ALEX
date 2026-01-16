import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Instagram, X } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// ننقل تعريف واجهة Article وبيانات المقالات إلى ملف مستقل
import { Article, articles } from '../data/articles';

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();

<<<<<<< HEAD
  // البحث عن المقال بناءً على المعرّف
  const article = articles.find((a: Article) => a.id === parseInt(id || '1'));
=======
  const articles: Article[] = [
    {
      id: 1,
      title: 'اختبار يناير 2026',
      date: '2026-01-01',
      author: 'إدارة المنطقة',
      image: '/اختبار يناير2026.jpeg',
      excerpt: 'اختبار لشهر يناير 2026',
      content: `
        <p>اختبار لشهر يناير 2026</p>

      `
    },
    {
      id: 2,
      title: 'تكريم الأبطال في حفل سنوي',
      date: '2024-01-08',
      author: 'إدارة المنطقة',
      image: 'https://images.pexels.com/photos/7045714/pexels-photo-7045714.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'أقامت المنطقة حفل تكريم للاعبين المميزين والمدربين الذين ساهموا في تحقيق الإنجازات',
      content: `
        <p>أقامت منطقة الإسكندرية للكاراتيه حفل تكريم سنوي للأبطال والمتميزين في رياضة الكاراتيه. حضر الحفل 25 لاعباً و5 مدربين محترفين و3 إداريين بارزين، بالإضافة إلى شخصيات رياضية وإعلامية من الإسكندرية.</p>

        <p>صرح مدير المنطقة أن هذا التكريم يهدف إلى تقدير الجهود وتحفيز الجميع على تحقيق المزيد من الإنجازات في البطولات القادمة. وأضاف أن منطقة الإسكندرية تسعى دائماً لخلق بيئة مشجعة لتطوير رياضة الكاراتيه وإعداد أجيال جديدة من الأبطال.</p>

        <p>تم توزيع الجوائز والدروع التكريمية على المتميزين، مع التركيز على أهمية الاعتراف بالإنجازات وتشجيع الروح الرياضية في المجتمع.</p>
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

  const article = articles.find(a => a.id === parseInt(id || '1'));
>>>>>>> e5ad4097d968f8b9612809eb1fe5fb0c28959ffe

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [zoom, setZoom] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const openModal = (src: string) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
    setZoom(1);
    setPanX(0);
    setPanY(0);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setZoom(prev => Math.max(0.5, Math.min(5, prev * delta)));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - panX, y: e.clientY - panY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPanX(e.clientX - dragStart.x);
    setPanY(e.clientY - dragStart.y);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({ x: e.touches[0].clientX - panX, y: e.touches[0].clientY - panY });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    e.preventDefault();
    setPanX(e.touches[0].clientX - dragStart.x);
    setPanY(e.touches[0].clientY - dragStart.y);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const zoomIn = () => setZoom(prev => Math.min(5, prev * 1.2));
  const zoomOut = () => setZoom(prev => Math.max(0.5, prev / 1.2));
  const resetZoom = () => {
    setZoom(1);
    setPanX(0);
    setPanY(0);
  };

  useEffect(() => {
    const handleImageClick = (event: Event) => {
      const target = event.target as HTMLImageElement;
      if (target.tagName === 'IMG') {
        event.preventDefault();
        openModal(target.src);
      }
    };

    const contentDiv = document.querySelector('.prose');
    if (contentDiv) {
      contentDiv.addEventListener('click', handleImageClick);
    }

    return () => {
      if (contentDiv) {
        contentDiv.removeEventListener('click', handleImageClick);
      }
    };
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">المقال غير موجود</h1>
          <Link to="/" className="text-red-600 hover:text-red-700 font-semibold">
            العودة للرئيسية
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold">
              <ArrowLeft size={20} />
              <span>العودة للرئيسية</span>
            </Link>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User size={16} />
                <span>{article.author}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-contain rounded-lg shadow-lg cursor-pointer"
              onClick={() => openModal(article.image)}
            />
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 mb-8 p-4 bg-white rounded-lg shadow-sm">
            <Share2 size={20} className="text-gray-600" />
            <span className="text-gray-600 font-semibold">شارك المقال:</span>
            <div className="flex gap-2">
              <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook size={18} />
              </button>
              <button className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter size={18} />
              </button>
              <button className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors">
                <Instagram size={18} />
              </button>
            </div>
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 منطقة الإسكندرية للكاراتيه. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full p-4 overflow-auto">
            {/* Zoom Controls */}
            <div className="absolute top-2 left-2 flex gap-2 z-10">
              <button
                onClick={(e) => { e.stopPropagation(); zoomIn(); }}
                className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                title="تكبير"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); zoomOut(); }}
                className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                title="تصغير"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); resetZoom(); }}
                className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                title="إعادة تعيين"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                  <path d="M21 3v5h-5"></path>
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                  <path d="M8 16H3v5"></path>
                </svg>
              </button>
            </div>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
            >
              <X size={24} />
            </button>
            <div
              className="relative overflow-hidden cursor-move"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{ touchAction: 'none' }}
            >
              <img
                src={selectedImage}
                alt="Zoomed"
                className="max-w-none object-contain select-none"
                style={{
                  transform: `scale(${zoom}) translate(${panX / zoom}px, ${panY / zoom}px)`,
                  transformOrigin: 'center center',
                  cursor: isDragging ? 'grabbing' : 'grab',
                }}
                onClick={(e) => e.stopPropagation()}
                draggable={false}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}