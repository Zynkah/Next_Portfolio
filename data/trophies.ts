export interface Trophy {
  title: string;
  image: string;
  kind: "CERTIFICATION" | "ACHIEVEMENT";
}

const certifications: Trophy[] = [
  {
    title: "Full Stack Web & Mobile",
    image: "/image/FullStack.png",
    kind: "CERTIFICATION",
  },
  {
    title: "Backend & DevOps",
    image: "/image/Backend.png",
    kind: "CERTIFICATION",
  },
];

const achievements: Trophy[] = [
  {
    title: "Importing & Cleaning Data",
    image: "/image/data_in_python.png",
    kind: "ACHIEVEMENT",
  },
  {
    title: "Python Programming",
    image: "/image/python_programming.png",
    kind: "ACHIEVEMENT",
  },
  {
    title: "Python Fundamentals",
    image: "/image/python_fundamentals.png",
    kind: "ACHIEVEMENT",
  },
  {
    title: "Data Visualization",
    image: "/image/data_visualization.png",
    kind: "ACHIEVEMENT",
  },
  {
    title: "Algorithms & DS in JS",
    image: "/image/JS_algorithms_ds.png",
    kind: "ACHIEVEMENT",
  },
  {
    title: "Responsive Web Design",
    image: "/image/responsive_web_design.png",
    kind: "ACHIEVEMENT",
  },
  {
    title: "Design Principles",
    image: "/image/design.png",
    kind: "ACHIEVEMENT",
  },
  {
    title: "AI Text Summarizer",
    image: "/image/postman.png",
    kind: "ACHIEVEMENT",
  },
];

export const trophies: Trophy[] = [...certifications, ...achievements];
