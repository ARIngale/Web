export const upcoming = [
  {
    id: 1,
    name: "Tech Innovation Summit",
    date: "2023-10-01",
    location: "Silicon Valley Convention Center",
    description: "Join us for a day of cutting-edge technology presentations and networking opportunities.",
    image: "/wce_acm_team.jpg",
    detailedInfo: {
      schedule: [
        { time: "09:00 AM", activity: "Registration and Welcome Coffee" },
        { time: "10:00 AM", activity: "Keynote Speech: The Future of AI" },
        { time: "12:00 PM", activity: "Lunch Break and Networking" },
        { time: "02:00 PM", activity: "Panel Discussion: Blockchain in Finance" },
        { time: "04:00 PM", activity: "Closing Remarks and Networking Mixer" }
      ],
      speakers: [
        { name: "Dr. Jane Smith", role: "AI Research Lead at TechCorp" },
        { name: "John Doe", role: "Blockchain Expert and Author" }
      ],
      ticketPrice: "$299"
    }
  },
  {
    id: 2,
    name: "Startup Pitch Competition",
    date: "2023-11-15",
    location: "Downtown Innovation Hub",
    description: "Watch promising startups pitch their ideas to top investors and win funding.",
    image: "/wce_acm_team.jpg",
    detailedInfo: {
      schedule: [
        { time: "10:00 AM", activity: "Opening Ceremony" },
        { time: "11:00 AM", activity: "First Round of Pitches" },
        { time: "01:00 PM", activity: "Lunch and Networking" },
        { time: "02:30 PM", activity: "Final Round of Pitches" },
        { time: "04:30 PM", activity: "Awards Ceremony" }
      ],
      prizes: [
        { place: "1st", amount: "$100,000 in funding" },
        { place: "2nd", amount: "$50,000 in funding" },
        { place: "3rd", amount: "$25,000 in funding" }
      ],
      entryFee: "$50 for attendees, Free for selected startups"
    }
  },
  // Add more events with detailed info...
];

export const pastEvents = [
  {
    id: 1,
    title: "AI Conference 2023",
    date: "2023-05-15",
    description: "A groundbreaking conference on the latest advancements in Artificial Intelligence.",
    images: ["/wce_acm_team.jpg", "/wce_acm_team.jpg", "/wce_acm_team.jpg"],
    color: "#4A90E2",
    highlights: [
      "Keynote by Dr. Alan Turing II on 'The Future of Machine Learning'",
      "Live demonstration of an advanced neural network",
      "Panel discussion on AI ethics with industry leaders"
    ],
    attendees: 5000
  },
  {
    id: 2,
    title: "Hackathon for Social Good",
    date: "2023-06-20",
    description: "A 48-hour coding marathon to create innovative solutions for social issues.",
    images: ["/wce_acm_team.jpg", "/wce_acm_team.jpg", "/wce_acm_team.jpg"],
    color: "#50E3C2",
    highlights: [
      "Over 200 participants from 20 countries",
      "Top project: An app for connecting food donors with local shelters",
      "$50,000 in prizes awarded to the best solutions"
    ],
    attendees: 500
  },
  {
    id: 3,
    title: "AI Conference 2023",
    date: "2023-05-15",
    description: "A groundbreaking conference on the latest advancements in Artificial Intelligence.",
    images: ["/wce_acm_team.jpg", "/wce_acm_team.jpg", "/wce_acm_team.jpg"],
    color: "#4A90E2",
    highlights: [
      "Keynote by Dr. Alan Turing II on 'The Future of Machine Learning'",
      "Live demonstration of an advanced neural network",
      "Panel discussion on AI ethics with industry leaders"
    ],
    attendees: 5000
  },
  {
    id: 4,
    title: "AI Conference 2023",
    date: "2023-05-15",
    description: "A groundbreaking conference on the latest advancements in Artificial Intelligence.",
    images: ["/wce_acm_team.jpg", "/wce_am_team.jpg", "/wce_acm_team.jpg"],
    color: "#4A90E2",
    highlights: [
      "Keynote by Dr. Alan Turing II on 'The Future of Machine Learning'",
      "Live demonstration of an advanced neural network",
      "Panel discussion on AI ethics with industry leaders"
    ],
    attendees: 5000
  },
  // Add more past events...
];


  

  
  import { Facebook, Twitter, Linkedin } from 'lucide-react';

  export const teamMembers = [
    // {
    //   name: "John Doe",
    //   designation: "Chair",
    //   image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    //   socials: [
    //     { icon: <Facebook />, link: "https://facebook.com" },
    //     { icon: <Twitter />, link: "https://twitter.com" },
    //     { icon: <Linkedin />, link: "https://linkedin.com" },
    //   ],
    // },
    // {
    //   name: "Jane Smith",
    //   designation: "Product Manager",
    //   image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    //   socials: [
    //     { icon: <Facebook />, link: "https://facebook.com" },
    //     { icon: <Twitter />, link: "https://twitter.com" },
    //     { icon: <Linkedin />, link: "https://linkedin.com" },
    //   ],
    // },
    // {
    //   name: "Mike Johnson",
    //   designation: "Developer",
    //   image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    //   socials: [
    //     { icon: <Facebook />, link: "https://facebook.com" },
    //     { icon: <Twitter />, link: "https://twitter.com" },
    //     { icon: <Linkedin />, link: "https://linkedin.com" },
    //   ],
    // },
    {
      name: 'John Doe',
      designation: 'President',
      image:"/placeholder.svg?height=300&width=300",
    
      linkedin: 'https://www.linkedin.com/in/johndoe',
      instagram: 'https://www.instagram.com/johndoe'
    },
    {
      name: 'John Doe',
      designation: 'Vice-President',
      image:"/placeholder.svg?height=300&width=300",
    
      linkedin: 'https://www.linkedin.com/in/johndoe',
      instagram: 'https://www.instagram.com/johndoe'
    },
    {
      name: 'John Doe',
      designation: 'Secretary',
      image:"/placeholder.svg?height=300&width=300",
    
      linkedin: 'https://www.linkedin.com/in/johndoe',
      instagram: 'https://www.instagram.com/johndoe'
    },
   
  ];
  
  export const faqData = [
    {
      id: 0,
      question: "Who can participate in WCE Hackathon '24?",
      answer: "WCE Hackathon '24 is open to a diverse range of participants, including students, professionals, and individuals with varying skill levels. Whether you are a beginner or an experienced developer, despite the field of academic discipline chosen, you are eligible to join us! 🚀",
    },
    {
      id: 1,
      question: "What if this is my first hackathon?",
      answer: "Congratulations on considering your first hackathon! Hackathon '24 is a great opportunity for beginners. We would be having expert sessions, guidance by mentors along the way to help you out in executing your ideas into projects. See you in the hackathon! 🤖",
    },
    {
      id: 2,
      question: "What should be the team size?",
      answer: "The team size can range from a minimum of 1 participant to a maximum of 4 participants. 🤝",
    },
    {
      id: 3,
      question: "Are team members from other colleges allowed?",
      answer: "Yes, WCE Hackathon '24 welcomes participants from diverse backgrounds, including those from different colleges. The hackathon encourages collaboration and networking among individuals with varied experiences and expertise. 🌍",
    },
  ];
  
  

 
  
  export const blogPosts = [
    {
      id: '1',
      title: 'Getting Started with React',
      excerpt: 'Learn the basics of React and start building your first application.',
      content: 'React is a popular JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently. In this post, we\'ll cover the basics of React, including components, props, and state.React is a popular JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently. In this post, we\'ll cover the basics of React, including components, props, and state.',
      image: '/wce_acm_team.jpg',
      category: 'Frontend',
      readTime: '5 min read',
      likes: 42,
      tags: ['React', 'JavaScript', 'Frontend']
    },
    {
      id: '2',
      title: 'CSS Grid Layout: A Comprehensive Guide',
      excerpt: 'Master CSS Grid Layout and create complex layouts with ease.',
      content: 'CSS Grid Layout is a powerful tool for creating two-dimensional layouts on the web. It provides a flexible way to arrange content in rows and columns, making it easier to create complex layouts that were previously difficult to achieve with CSS.',
      image: '/wce_acm_team.jpg',
      category: 'CSS',
      readTime: '8 min read',
      likes: 35,
      tags: ['CSS', 'Layout', 'Web Design']
    },
    // Add more blog posts as needed
  ];
  
  
  
  
  
  export const facilitators = [
    {
      name: "Jane Smith",
      designation: "Lead Facilitator",
      image: "/path/to/image.jpg",
      // linkedin: "https://linkedin.com/in/janesmith",
      // instagram: "https://instagram.com/janesmith",
      positon:"HOD CSE",
      college: "Another University"
    },
  ];


  