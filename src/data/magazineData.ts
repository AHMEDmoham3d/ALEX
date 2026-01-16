export interface MagazineIssue {
  id: number;
  title: string;
  issue: string;
  date: string;
  cover: string;
  description: string;
}

export const magazineIssues: MagazineIssue[] = [
  {
    id: 1,
    title: 'أبناؤنا في الخارج',
    issue: 'العدد 15',
    date: 'يناير 2024',
    cover: '/تكريم-الرئيس.jpg',
    description: 'في هذا العدد: مقابلة حصرية مع أبطالنا فى الخارج وتغطية شاملة للإنجازات.',
  },
  {
    id: 2,
    title: 'أبناء الصعيد',
    issue: 'العدد 14',
    date: 'ديسمبر 2023',
    cover: '/ابناء الصعيد.jpg',
    description: 'تغطية شاملة لبطولة الجمهورية، قصص النجاح، وملف خاص عن تطوير المواهب الشابة بالصعيد.',
  },
  {
    id: 3,
    title: 'الدوريات والمسابقات',
    issue: 'العدد 13',
    date: 'نوفمبر 2023',
    cover: '/مسابقات.jpeg',
    description: 'ملف خاص عن مستقبل الكاراتيه في الإسكندرية، لقاءات مع المدربين، وخطط التطوير.',
  },
];
