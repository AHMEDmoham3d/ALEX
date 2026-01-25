import { useParams, Link } from 'react-router-dom';
import { magazineIssues } from '../data/magazineData';
import { ArrowRight } from 'lucide-react';

export default function MagazineDetails() {
  const { id } = useParams<{ id: string }>();
  const issue = magazineIssues.find(item => item.id === Number(id));

  if (!issue) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-bold">
        المقال غير موجود
      </div>
    );
  }

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
          <img
            src={issue.cover}
            alt={issue.title}
            className="w-full h-[400px] object-cover"
          />

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

            <p className="text-lg text-gray-700 leading-relaxed">
              {issue.description}
            </p>

            {issue.id === 2 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">صور الدوري العالمي بتركيا</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <img src="/لدوري العالمي بتركيا1.jpeg" alt="لدوري العالمي بتركيا 1" className="w-full h-48 object-cover rounded-lg shadow-md" />
                  <img src="/لدوري العالمي بتركيا2.jpeg" alt="لدوري العالمي بتركيا 2" className="w-full h-48 object-cover rounded-lg shadow-md" />
                  <img src="/لدوري العالمي بتركيا3.jpeg" alt="لدوري العالمي بتركيا 3" className="w-full h-48 object-cover rounded-lg shadow-md" />
                  <img src="/لدوري العالمي بتركيا4.jpeg" alt="لدوري العالمي بتركيا 4" className="w-full h-48 object-cover rounded-lg shadow-md" />
                  <img src="/لدوري العالمي بتركيا5.jpeg" alt="لدوري العالمي بتركيا 5" className="w-full h-48 object-cover rounded-lg shadow-md" />
                  <img src="/لدوري العالمي بتركيا6.jpeg" alt="لدوري العالمي بتركيا 6" className="w-full h-48 object-cover rounded-lg shadow-md" />
                  <img src="/لدوري العالمي بتركيا7.jpeg" alt="لدوري العالمي بتركيا 7" className="w-full h-48 object-cover rounded-lg shadow-md" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
