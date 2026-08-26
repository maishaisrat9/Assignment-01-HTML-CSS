import app1 from "../assets/demo-app (1).webp";
import app2 from "../assets/demo-app (2).webp";
import app3 from "../assets/demo-app (3).webp";
import app4 from "../assets/demo-app (4).webp";
import app5 from "../assets/demo-app (5).webp";
import app6 from "../assets/demo-app (6).webp";

const apps = [
  {
    image: app1,
    title: "Forest: Focus For Productivity",
    companyName: "forestapp.cc",
    id: 1,
    description:
      "Forest helps you stay focused by turning your work sessions into a simple and rewarding experience. Plant a virtual tree, stay focused, and build productive habits while reducing distractions.",
    size: 258,
    reviews: 54000,
    ratingAvg: 4.9,
    downloads: 9000000,
    ratings: [
      { name: "1 star", count: 850 },
      { name: "2 star", count: 1200 },
      { name: "3 star", count: 2800 },
      { name: "4 star", count: 6500 },
      { name: "5 star", count: 10500 },
    ],
  },

  {
    image: app2,
    title: "SmPlan:ToDo List With Reminder",
    companyName: "productive.io",
    id: 2,
    description:
      "SmPlan is a practical task management application designed to help users organize daily activities, create reminders, manage priorities, and maintain a productive routine.",
    size: 291,
    reviews: 54000,
    ratingAvg: 4.9,
    downloads: 8000000,
    ratings: [
      { name: "1 star", count: 900 },
      { name: "2 star", count: 1300 },
      { name: "3 star", count: 2900 },
      { name: "4 star", count: 6400 },
      { name: "5 star", count: 11000 },
    ],
  },

  {
    image: app3,
    title: "FLIP - Focus Timer For Study",
    companyName: "flip.study",
    id: 3,
    description:
      "FLIP is a focus timer made for students. It helps you divide your study sessions into manageable periods and provides useful statistics about your learning habits.",
    size: 184,
    reviews: 42000,
    ratingAvg: 4.8,
    downloads: 7200000,
    ratings: [
      { name: "1 star", count: 700 },
      { name: "2 star", count: 1100 },
      { name: "3 star", count: 2300 },
      { name: "4 star", count: 5700 },
      { name: "5 star", count: 9200 },
    ],
  },

  {
    image: app4,
    title: "Pomocat - Cute Pomodoro Timer",
    companyName: "pomocat.app",
    id: 4,
    description:
      "Pomocat combines a cute visual experience with the Pomodoro technique. Focus on your work, complete sessions, and build a healthier productivity routine.",
    size: 156,
    reviews: 38000,
    ratingAvg: 4.7,
    downloads: 6800000,
    ratings: [
      { name: "1 star", count: 650 },
      { name: "2 star", count: 1000 },
      { name: "3 star", count: 2100 },
      { name: "4 star", count: 5200 },
      { name: "5 star", count: 8500 },
    ],
  },

  {
    image: app5,
    title: "Time Planner: Schedule & Tasks",
    companyName: "timeplanner.io",
    id: 5,
    description:
      "Time Planner helps users organize schedules, tasks, appointments, and daily goals in one convenient productivity application.",
    size: 203,
    reviews: 33000,
    ratingAvg: 4.6,
    downloads: 6200000,
    ratings: [
      { name: "1 star", count: 600 },
      { name: "2 star", count: 900 },
      { name: "3 star", count: 1800 },
      { name: "4 star", count: 4800 },
      { name: "5 star", count: 7900 },
    ],
  },

  {
    image: app6,
    title: "Morning Habits - Daily Routine",
    companyName: "habitlab.io",
    id: 6,
    description:
      "Morning Habits helps you create consistent routines by tracking daily habits and giving you a clear view of your progress.",
    size: 172,
    reviews: 31000,
    ratingAvg: 4.6,
    downloads: 5900000,
    ratings: [
      { name: "1 star", count: 500 },
      { name: "2 star", count: 850 },
      { name: "3 star", count: 1700 },
      { name: "4 star", count: 4500 },
      { name: "5 star", count: 7600 },
    ],
  },

  {
    image: app1,
    title: "Focus Plant: Pomodoro Forest",
    companyName: "focusplant.app",
    id: 7,
    description:
      "Focus Plant turns productive time into a growing virtual forest. It combines focus sessions, task management, and visual progress tracking.",
    size: 224,
    reviews: 29000,
    ratingAvg: 4.5,
    downloads: 5500000,
    ratings: [
      { name: "1 star", count: 700 },
      { name: "2 star", count: 900 },
      { name: "3 star", count: 1600 },
      { name: "4 star", count: 4300 },
      { name: "5 star", count: 7200 },
    ],
  },

  {
    image: app2,
    title: "Alarmy - Alarm Clock & Sleep",
    companyName: "alarmy.app",
    id: 8,
    description:
      "Alarmy is an alarm application designed to help people wake up on time with creative missions and useful sleep-management features.",
    size: 198,
    reviews: 27000,
    ratingAvg: 4.5,
    downloads: 5100000,
    ratings: [
      { name: "1 star", count: 650 },
      { name: "2 star", count: 850 },
      { name: "3 star", count: 1500 },
      { name: "4 star", count: 4100 },
      { name: "5 star", count: 6900 },
    ],
  },

  {
    image: app3,
    title: "Todoist - To Do List",
    companyName: "todoist.com",
    id: 9,
    description:
      "Todoist is a powerful task manager that helps users organize personal and professional tasks, projects, deadlines, and priorities.",
    size: 240,
    reviews: 26000,
    ratingAvg: 4.4,
    downloads: 4900000,
    ratings: [
      { name: "1 star", count: 600 },
      { name: "2 star", count: 800 },
      { name: "3 star", count: 1400 },
      { name: "4 star", count: 3900 },
      { name: "5 star", count: 6700 },
    ],
  },

  {
    image: app4,
    title: "Notion - Notes & Projects",
    companyName: "notion.so",
    id: 10,
    description:
      "Notion combines notes, documents, databases, projects, and task management into one flexible workspace.",
    size: 310,
    reviews: 25000,
    ratingAvg: 4.7,
    downloads: 4700000,
    ratings: [
      { name: "1 star", count: 400 },
      { name: "2 star", count: 700 },
      { name: "3 star", count: 1300 },
      { name: "4 star", count: 3700 },
      { name: "5 star", count: 7200 },
    ],
  },

  {
    image: app5,
    title: "Trello - Manage Projects",
    companyName: "trello.com",
    id: 11,
    description:
      "Trello provides boards, lists, and cards that make project planning and collaboration simple.",
    size: 267,
    reviews: 23000,
    ratingAvg: 4.5,
    downloads: 4300000,
    ratings: [
      { name: "1 star", count: 550 },
      { name: "2 star", count: 720 },
      { name: "3 star", count: 1300 },
      { name: "4 star", count: 3500 },
      { name: "5 star", count: 6500 },
    ],
  },

  {
    image: app6,
    title: "Evernote - Notes Organizer",
    companyName: "evernote.com",
    id: 12,
    description:
      "Evernote helps you capture notes, organize information, create checklists, and keep important ideas accessible.",
    size: 280,
    reviews: 21000,
    ratingAvg: 4.3,
    downloads: 4100000,
    ratings: [
      { name: "1 star", count: 700 },
      { name: "2 star", count: 900 },
      { name: "3 star", count: 1500 },
      { name: "4 star", count: 3300 },
      { name: "5 star", count: 6000 },
    ],
  },

  {
    image: app1,
    title: "Google Keep - Notes",
    companyName: "google.com",
    id: 13,
    description:
      "Google Keep lets you quickly capture ideas, reminders, lists, and notes and access them across your devices.",
    size: 145,
    reviews: 19000,
    ratingAvg: 4.4,
    downloads: 3900000,
    ratings: [
      { name: "1 star", count: 450 },
      { name: "2 star", count: 650 },
      { name: "3 star", count: 1200 },
      { name: "4 star", count: 3100 },
      { name: "5 star", count: 5900 },
    ],
  },

  {
    image: app2,
    title: "TickTick - To Do List",
    companyName: "ticktick.com",
    id: 14,
    description:
      "TickTick combines tasks, reminders, habits, calendars, and focus tools to help users manage their time effectively.",
    size: 215,
    reviews: 18000,
    ratingAvg: 4.6,
    downloads: 3700000,
    ratings: [
      { name: "1 star", count: 400 },
      { name: "2 star", count: 600 },
      { name: "3 star", count: 1100 },
      { name: "4 star", count: 2900 },
      { name: "5 star", count: 6100 },
    ],
  },

  {
    image: app3,
    title: "Habitica - Gamified Tasks",
    companyName: "habitica.com",
    id: 15,
    description:
      "Habitica turns everyday tasks and habits into a game. Complete goals, earn rewards, and stay motivated.",
    size: 190,
    reviews: 17000,
    ratingAvg: 4.4,
    downloads: 3400000,
    ratings: [
      { name: "1 star", count: 450 },
      { name: "2 star", count: 620 },
      { name: "3 star", count: 1000 },
      { name: "4 star", count: 2800 },
      { name: "5 star", count: 5600 },
    ],
  },

  {
    image: app4,
    title: "Focus To-Do: Pomodoro",
    companyName: "focustodo.app",
    id: 16,
    description:
      "Focus To-Do combines Pomodoro timing with task management so you can organize tasks and maintain concentration.",
    size: 178,
    reviews: 16000,
    ratingAvg: 4.5,
    downloads: 3200000,
    ratings: [
      { name: "1 star", count: 400 },
      { name: "2 star", count: 550 },
      { name: "3 star", count: 1000 },
      { name: "4 star", count: 2700 },
      { name: "5 star", count: 5400 },
    ],
  },

  {
    image: app5,
    title: "Study Bunny - Focus Timer",
    companyName: "studybunny.app",
    id: 17,
    description:
      "Study Bunny is a friendly productivity app that encourages students to study consistently using timers, rewards, and progress tracking.",
    size: 165,
    reviews: 15000,
    ratingAvg: 4.5,
    downloads: 3000000,
    ratings: [
      { name: "1 star", count: 350 },
      { name: "2 star", count: 500 },
      { name: "3 star", count: 900 },
      { name: "4 star", count: 2500 },
      { name: "5 star", count: 5200 },
    ],
  },

  {
    image: app6,
    title: "Headspace - Meditation",
    companyName: "headspace.com",
    id: 18,
    description:
      "Headspace provides guided meditation, mindfulness exercises, sleep support, and relaxation tools for everyday life.",
    size: 350,
    reviews: 14000,
    ratingAvg: 4.6,
    downloads: 2800000,
    ratings: [
      { name: "1 star", count: 300 },
      { name: "2 star", count: 450 },
      { name: "3 star", count: 850 },
      { name: "4 star", count: 2400 },
      { name: "5 star", count: 5000 },
    ],
  },

  {
    image: app1,
    title: "Calm - Sleep & Meditation",
    companyName: "calm.com",
    id: 19,
    description:
      "Calm offers meditation, sleep stories, breathing exercises, and relaxing audio designed to support a calmer daily routine.",
    size: 330,
    reviews: 13000,
    ratingAvg: 4.7,
    downloads: 2600000,
    ratings: [
      { name: "1 star", count: 250 },
      { name: "2 star", count: 400 },
      { name: "3 star", count: 800 },
      { name: "4 star", count: 2200 },
      { name: "5 star", count: 4900 },
    ],
  },

  {
    image: app2,
    title: "Productive - Habit Tracker",
    companyName: "productive.app",
    id: 20,
    description:
      "Productive is a habit tracker that helps users build routines, maintain streaks, and reach personal goals through simple daily tracking.",
    size: 205,
    reviews: 12000,
    ratingAvg: 4.4,
    downloads: 2400000,
    ratings: [
      { name: "1 star", count: 300 },
      { name: "2 star", count: 450 },
      { name: "3 star", count: 750 },
      { name: "4 star", count: 2100 },
      { name: "5 star", count: 4700 },
    ],
  },
];

export default apps;