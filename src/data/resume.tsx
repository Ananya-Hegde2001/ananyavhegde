import { Icons } from "@/components/icons";
import { Icon } from '@iconify/react';
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
 "name": "Ananya V Hegde",
  "initials": "DV",
  "url": "https://github.com/Ananya-Hegde2001",
  "location": "Bengaluru, India",
  "locationLink": "https://www.google.com/maps/place/bengaluru",
  "description": "Front-End Engineer | React, Next.js & MongoDB | Amazon Web Services | Expanding into Full-Stack with NestJS",
  "summary": "I have worked on web and mobile application development, cloud deployment, and data-driven projects through internships and academic work. My experience includes building applications with React, Node.js, MongoDB, and Python, along with working on projects such as a job portal, real-time crowd density estimator, and driver drowsiness detection system. I enjoy learning new technologies and applying them to create practical solutions.",
avatarUrl: "/ananya.png",
   skills: [
    { title: "React JS", icon: "logos:react" },
    { title: "React Native", icon: "logos:react" },
    { title: "Next.js", icon: "logos:nextjs" },
    { title: "Python", icon: "logos:python" },
    { title: "Material UI", icon: "logos:material-ui" },
    { title: "JSON", icon: "vscode-icons:file-type-json" },
    { title: "Axios", icon: "simple-icons:axios" },
    { title: "Node.js", icon: "logos:nodejs-icon" },
    { title: "JavaScript", icon: "logos:javascript" },
    { title: "HTML/CSS", icon: "vscode-icons:file-type-html" },
    { title: "Bootstrap", icon: "logos:bootstrap" },
    { title:'Tailwind CSS',icon:'logos:tailwindcss-icon'},
    {title:'Git',icon:'logos:git-icon'},
    {title:'Postman',icon:'logos:postman-icon'},
    {title:'Docker',icon:'logos:docker-icon'},
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://ananyamca.blogspot.com", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ananyavhegde2001@gmail.com",
    tel: "+917795116340",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ananya-Hegde2001",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ananyahegde-",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/HegdeAnany49037",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "rrsrrsrajeev@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "LMG8 Tech",
      title: "Software Developer Intern",
      location: "Bengaluru, India",
      start: "Aug 2025",
      end: "Sep 2025",
      logoUrl: "/lmg8.png",
      description: "Worked as a Software Intern on full-stack web applications using React.js and Node.js, focusing on building features and fixing bugs. Integrated REST APIs with MongoDB and used Git/GitHub for version control in a collaborative environment."
    },
    {
      company: "Evolvetech",
      title: "Frontend Developer",
      logoUrl: "/evolvetech.png",
      start: "Feb 2025",
      end: "Apr 2025",
      description: "Built a Job Portal Website with React, React Native, Node.js, and MongoDB. Added features like job search, authentication, and real-time updates for web and mobile.",
    },
    {
      company: "Sun Ites Consulting Pvt Ltd.",
      location: "Brahmavara",
      title: "Web/ePub Developer",
      logoUrl: "/sunilts.png",
      start: "Sep 2022",
      end: "Oct 2023",
      description:
        "Worked as a Web/ePub Developer creating accessible ePub3 digital books with XML and InDesign. Improved workflows by automating layouts, building reusable templates, and reducing manual effort.",
    },



  ],
  education: [
    {
      school: "Acharya Institute of Technology, Bangalore",
      href: "https://www.m.acharya.ac.in/",
      degree: "Master's Degree of Computer Application (MCA)",
      logoUrl: "/acharya.png",
      start: "2024",
      end: "2025",
    },
    {
      school: "Saint Mary’s Syrian College, Udupi",
      href: "https://smscollegebrahmavar.com/",
      degree: "Bachelor's Degree of Computer Application (BCA)",
      logoUrl: "/sms.png",
      start: "2019",
      end: "2022",
    },

  ],
  projects: [
    {
      title: "Real-Time Crowd Density Estimator",
      href: "https://github.com/Ananya-Hegde2001/Crowd_Density_Estimator",
      dates: "Jun 2025 - Sep 2025",
      active: true,
      description:
        "Developed CrowdVision, an AI-powered real-time crowd monitoring system using YOLOv8 and OpenCV. Achieved 95%+ accuracy at 30+ FPS with zone-based alerts. Built a Flask dashboard with live feeds, heatmaps, and Firebase integration for authentication, data sync, and user management.",
      technologies: [
        "Python",
        "YOLOv8",
        "OpenCV",
        "Flask",
        "Firebase",
        "WebSockets",
        "Heatmap Visualization",
        "NumPy",
        "Pandas",
        "HTML/CSS",
        "JavaScript"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Ananya-Hegde2001/Crowd_Density_Estimator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/eduley/Crowd.png",
    },
    {
      title: "Driver Drowsiness Detection",
      href: "https://github.com/Ananya-Hegde2001/Driver_Drowsiness_Detection",
      dates: "Feb 2025 - Mar 2025",
      active: true,
      description:
        "Created a real-time driver drowsiness detection system with ESP32, IR eye-blink sensors, and an accelerometer. Integrated Firebase for live storage, multi-driver monitoring, and remote authority access. Added automated email alerts for prolonged drowsiness to enhance road safety and proactive accident prevention.",
      technologies: [
        "ESP32",
        "IOT",
        "Arduino IDE",
        "IR Sensor",
        "Accelerometer",
        "Firebase",
        "Email Alerts (SMTP)",
        "Python",
        "Real-time Monitoring"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Ananya-Hegde2001/Driver_Drowsiness_Detection",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/voicemate/driver.png",
    },
    {
      title: "HR Analytics Employee Retention",
      href: "https://hr-analytics-employee-retention.streamlit.app",
      dates: "Apr 2025 - May 2025",
      active: true,
      description:
        "Implemented an HR analytics platform using Python, ML models, and Streamlit dashboards to analyze employee data, visualize attrition trends, and predict churn. Helps organizations identify at-risk employees and improve retention strategies through actionable, data-driven insights.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Streamlit",
        "Matplotlib",
        "Seaborn",
        "Predictive Modeling",
        "Data Visualization"
      ],
      links: [
        {
          type: "Website",
          href: "https://hr-analytics-employee-retention.streamlit.app",
          icon: <Icons.globe className="size-3" />,
        },
        
      ],
      image: "/projects/spendthebits/HR.png",
    },
    {
      title: "School-Bus Tracker App",
      href: "https://github.com/Ananya-Hegde2001/School-Bus-Tracker-App",
      dates: "May 2022 - Aug 2022",
      active: true,
      description:
        "Built an Android application in Java for real-time school bus tracking. Integrated Firebase Realtime Database for live updates accessible to parents and administrators. Designed a user-friendly map interface showing bus location, route details, and estimated arrival times.",
      technologies: [
        "Java",
        "Android",
        "Firebase Realtime DB",
        "Google Maps API",
        "GPS Tracking",
        "XML UI",
        "Real-time Updates"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Ananya-Hegde2001/School-Bus-Tracker-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/mustmate/School.jpg",
    },
  ],
  testimonials: [
  { quote: "Ananya is an outstanding developer with great attention to detail.", author: "Team Lead at LMG8.Tech" },
  { quote: "Very creative and collaborative—always delivers top-notch UI!", author: "Project Manager of Evolvetech" },
],
} as const;
