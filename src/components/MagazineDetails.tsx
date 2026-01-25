import { useParams, Link } from 'react-router-dom';
import { magazineIssues } from '../data/magazineData';
import { ArrowRight, X } from 'lucide-react';
import { useState } from 'react';

export default function MagazineDetails() {
  const { id } = useParams<{ id: string }>();
  const issue = magazineIssues.find(item => item.id === Number(id));
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!issue) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-bold">
        المقال غير موجود
      </div>
    );
  }

  const images = [
    '/لدوري العالمي بتركيا1.jpeg',
    '/لدوري العالمي بتركيا2.jpeg',
    '/لدوري العالمي بتركيا3.jpeg',
    '/لدوري العالمي بتركيا4.jpeg',
    '/لدوري العالمي بتركيا5.jpeg',
    '/لدوري العالمي بتركيا6.jpeg',
    '/لدوري العالمي بتركيا7.jpeg',
  ];

  return (
    <section className="min-h-screen py-16 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 mb-6 font-semibold"
        >
          <ArrowRight />
          الرجوع للمجلة
        </Link>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="p-8">
            <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg font-bold mb-4">
              {issue.issue}
            </span>

            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {issue.title}
            </h1>

            <p className="text-sm text-gray-500 mb-6">
              {issue.date}
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {issue.description}
            </p>

            {issue.id === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">صور الدوري العالمي بتركيا</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image}
                        alt={`لدوري العالمي بتركيا ${index + 1}`}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg font-bold">
                          عرض الصورة
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="صورة مكبرة"
                className="max-w-full max-h-full object-contain"
              />
              {issue.id === 2 && (
                <div className="mt-4 text-center text-white">
                  <div className="flex flex-col items-center space-y-2">
                    <p className="text-lg font-bold">1 ياسين فرحات</p>
                    <p className="text-lg font-bold">2 حازم احمد زياد الغريب</p>
                  </div>
                </div>
              )}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
