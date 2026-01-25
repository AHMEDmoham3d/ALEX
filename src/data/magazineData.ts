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
    title: 'الدوري العالمي بتركيا',
    issue: 'العدد 1',
    date: 'يناير 2026',
    cover: '/لدوري العالمي بتركيا1.jpeg',
    description: 'الدوري العالمي بتركيا يخوض كل من ابناء الاسكندريه بطوله بريملج الدوليه واسمائهم ١ ياسين فرحات ٢حازم احمد زياد الغريب',
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
