export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link: string;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    id: "01",
    title: "Basics of Data Structures and Algorithms using C++",
    issuer: "Lovely Professional University",
    date: "Nov 2025",
    link: "/certs/lpu.pdf",
    skills: ["C++", "DSA", "Algorithms"]
  },
  {
    id: "02",
    title: "Mastering Generative AI and Generative AI Tools",
    issuer: "Udemy",
    date: "Sep 2025",
    link: "/certs/genai.pdf",
    skills: ["Generative AI", "LLMs", "AI Tools"]
  },
  {
    id: "03",
    title: "Unveiling Basic Python Towards AI/ML",
    issuer: "CSE PathShala",
    date: "Mar 2024",
    link: "/certs/python.pdf",
    skills: ["Python", "AI", "Machine Learning"]
  },
  {
    id: "04",
    title: "Beginning C++ Programming from Beginner to Beyond",
    issuer: "Udemy",
    date: "Feb 2024",
    link: "/certs/cpp.pdf",
    skills: ["C++", "Programming", "Basics"]
  }
];
