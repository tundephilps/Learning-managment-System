// mockData.js
import moment from "moment";
import English from "../../public/English.png";
import Biology from "../../public/Biology.jpg";
import Maths from "../../public/maths.png";
import Chemistry from "../../public/Chemistry.png";
import Teacher from "../../public/teacher.jpeg";

// export interface CardProps {
//   src: string  | StaticImageData;;
//   alt: string;
//   subject: string;
//   author: string;
//   subjectDetails: string;
//   time: string;
//   lessons: string;
//   difficulty: string;
// }

export const myEventsList = [
  {
    title: "PTA MEETING",
    start: moment("2024-03-22").hour(1).minute(45).toDate(),
    end: moment("2024-03-24").hour(14).minute(0).toDate(),
  },
  {
    title: "GYM CLASS",
    start: moment("2024-03-10").toDate(),
    end: moment("2024-03-11").toDate(),
  },
];

export const homeworkData = [
  // Sample data
  {
    id: 1,
    class: "Class 3",
    section: "A",
    subjects: "Math (210)",
    homeworkDate: "2022-01-01",
    submissionDate: "2022-01-10",
    evaluationDate: "2022-01-15",
    maxMarks: 100,
    marksObtained: 85,
    note: "Complete the exercises",
    status: "Submitted",
  },
  {
    id: 2,
    class: "Class 2",
    section: "E",
    subjects: "Biology (442)",
    homeworkDate: "2022-01-01",
    submissionDate: "2022-01-10",
    evaluationDate: "2022-01-15",
    maxMarks: 100,
    marksObtained: 85,
    note: "Very Good",
    status: "Evaluated",
  },
  {
    id: 3,
    class: "Class 2",
    section: "E",
    subjects: "Chemistry (302)",
    homeworkDate: "2022-01-01",
    submissionDate: "2022-01-10",
    evaluationDate: "2022-01-15",
    maxMarks: 100,
    marksObtained: 55,
    note: "Good",
    status: "Pending",
  },

  // Add more sample data as needed
];
// courseObjectivesData.js
export const courseObjectives = [
  "You will have an advanced understanding of how to set up and administrate an SAP Hybrids Landscape in production environment",
  "You will gain practical experience in configuring and managing SAP Hybrids systems and components",
  "You will learn best practices and techniques for troubleshooting and optimizing SAP Hybrids landscapes",
  "You will understand security concepts and mechanisms in SAP Hybrids environments",
];
export const courseRequirements = [
  "You should have a basic understanding of the Hybrid System",
  "Experience with programming languages like JavaScript and Python is beneficial",
  "Access to a computer with internet connectivity",
];

export const cards = [
  {
    src: English,
    alt: "Eng",
    subject: "English",
    author: "By John Letterman",
    subjectDetails:
      "Fully concentrated topic of magical language that got people talking for decades...",
    time: "42 hours",
    lessons: "31 Lessons",
    difficulty: "Medium Adv",
  },
  {
    src: Biology,
    alt: "Bio",
    subject: "Biology",
    author: "By John Letterman",
    subjectDetails:
      "Fully concentrated topic of magical language that got people talking for decades...",
    time: "42 hours",
    lessons: "31 Lessons",
    difficulty: "Medium Adv",
  },
  {
    src: Maths,
    alt: "Math",
    subject: "Maths",
    author: "By John Letterman",
    subjectDetails:
      "Fully concentrated topic of magical language that got people talking for decades...",
    time: "42 hours",
    lessons: "31 Lessons",
    difficulty: "Medium Adv",
  },
  {
    src: Chemistry,
    alt: "Chem",
    subject: "Chemistry",
    author: "By John Letterman",
    subjectDetails:
      "Fully concentrated topic of magical language that got people talking for decades...",
    time: "42 hours",
    lessons: "31 Lessons",
    difficulty: "Medium Adv",
  },
];

export const headerCardData = {
  imageSrc: Maths,
  alt: "Maths",
  breadCrumb: "Subjects - Maths 12 (sy23-math12)",
  subjectTitle: "Math 12",
  subjectDetails:
    "Maths class of high school class 12. Taught in class online and studied self at home. Homeworks, group works. This is good stuff by seasoned professionals....",
  authorImageSrc: Teacher,
  authorName: "Glenn Williams",
};
