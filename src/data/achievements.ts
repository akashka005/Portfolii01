export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  rank?: string;
}

export const achievements: Achievement[] = [
  {
    id: "01",
    title: "Top 10 Finalist in Code-A-Haunt Hackathon",
    description: "Ranked among the top 10 teams for building an innovative solution under time constraints.",
    year: "2024",
    rank: "TOP 10"
  },
  {
    id: "02",
    title: "Actively Solving Coding Problems on LeetCode",
    description: "Strengthening problem-solving and algorithmic thinking through consistent practice, aiming to solve 300+ problems.",
    year: "2024",
    rank: "LEETCODE"
  },
  {
    id: "03",
    title: "Participated in Adobe India Hackathon",
    description: "Selected for round 2, gaining hands-on experience in brainstorming, prototyping and presenting skills.",
    year: "2024",
    rank: "ROUND 2"
  },
  {
    id: "04",
    title: "First Place in Communication Skills Workshop",
    description: "Secured 94% and received a trophy for excellence in articulation, clarity and presentation skills.",
    year: "2024",
    rank: "1ST PLACE"
  }
];
