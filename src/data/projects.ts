export interface Project {
  id: string;
  title: string;
  tech: string;
  description: string;
  date: string;
  challenges: string;
  solutions: string;
  fullTech: string[];
  longDescription: string;
  results: string[];
  image: string;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Fraud Detection",
    tech: "ML / Python / Flask / Streamlit",
    description: "Real-time classification pipeline for fraudulent transactions using behavioral patterns.",
    date: "2025",
    challenges: "Identifying subtle anomalies in massive transaction datasets while maintaining low false-positive rates.",
    solutions: "Implemented a hybrid model using XGBoost and Random Forest with custom feature engineering for user behavior patterns.",
    fullTech: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Flask", "Streamlit"],
    longDescription: "The Fraud Detection project was designed to address the growing complexity of financial cybercrime. By leveraging advanced machine learning algorithms, we developed a system capable of analyzing millions of transactions in real-time to identify suspicious patterns that traditional rule-based systems often miss.",
    results: [
      "98.5% detection accuracy on historical test data.",
      "Reduced false positives by 40% compared to previous systems.",
      "Real-time processing latency of less than 200ms per transaction."
    ],
    // Replace with your local image path, e.g., "/fraud-detection.jpg"
    image: "/img/fraud.png"
  },
  {
    id: "02",
    title: "Aplytics",
    tech: "NLP / AI / Web / Render",
    description: "AI-powered resume analysis system that extracts text and identifies key skills.",
    date: "2025",
    challenges: "Parsing diverse resume formats and accurately mapping extracted text to standardized skill sets.",
    solutions: "Developed a custom NLP pipeline for entity recognition and integrated it with a Flask-based interactive frontend.",
    fullTech: ["Python", "Flask", "NLP", "JavaScript", "Render", "UptimeRobot"],
    longDescription: "Aplytics streamlines the recruitment process by using Natural Language Processing to automatically parse and analyze resumes. It doesn't just look for keywords; it understands the context of a candidate's experience, mapping their skills to a standardized taxonomy for easier comparison.",
    results: [
      "Automated parsing of PDF, DOCX, and TXT formats with 95% accuracy.",
      "Reduced initial screening time for HR teams by over 60%.",
      "Integrated skill-gap analysis to suggest relevant training for candidates."
    ],
    // Replace with your local image path, e.g., "/aplytics.jpg"
    image: "/img/aplytics.png"
  },
  {
    id: "03",
    title: "Churn Predictor",
    tech: "ML / Data Viz / JS",
    description: "Predictive system for customer retention analysis and real-time visualization.",
    date: "2025",
    challenges: "Creating a lightweight model that could run efficiently while providing high accuracy for non-technical users.",
    solutions: "Built a churn interactive logic using a lightweight ML model integrated with a clean, responsive frontend.",
    fullTech: ["HTML", "CSS", "JavaScript", "Machine Learning", "Scikit-learn"],
    longDescription: "Churn Predictor provides businesses with actionable insights into customer retention. By analyzing historical usage data and customer interactions, the system identifies 'at-risk' customers before they leave, allowing companies to proactively engage and retain them.",
    results: [
      "Identified 85% of churning customers at least 30 days in advance.",
      "Interactive dashboard allows for 'what-if' scenario analysis.",
      "Successfully deployed as a lightweight web application for small business use."
    ],
    // Replace with your local image path, e.g., "/churn-predictor.jpg"
    image: "/img/churn.png"
  }
];
