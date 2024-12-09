const events = [
    {
      id: 1,
      name: "Event One",
      date: "2023-10-01",
      location: "Location One",
      description:"",
      // description: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:"/wce_acm_team.jpg",
    },
    {
      id: 2,
      name: "Event Two",
      date: "2023-11-15",
      location: "Location Two",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:"/wce_acm_team.jpg",
    },
    {
      id: 3,
      name: "Event Three",
      date: "2023-12-05",
      location: "Location Three",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:"/wce_acm_team.jpg",
    },
    {
      id: 4,
      name: "Event Four",
      date: "2024-01-20",
      location: "Location Four",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:"/wce_acm_team.jpg",
    },
  ];
  
  export default events;
  
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
  
  

  export const event = [
    {
      id: 1,
      title: "AI Hackathon 2024",
      date: "March 15-17, 2024",
      description: "Join us for an exhilarating 48-hour AI hackathon! Develop cutting-edge AI solutions and compete for amazing prizes. Network with industry experts and showcase your skills in machine learning, natural language processing, and computer vision.",
      images: ["/wce_acm_team.jpg", "/wce_acm_team.jpg", "/wce_acm_team.jpg", "/wce_acm_team.jpg"],
      color: "#FF6B6B",
      icon: "🤖",
      isUpcoming: true
    },
    {
      id: 2,
      title: "Blockchain Summit",
      date: "April 5-7, 2024",
      description: "Explore the future of blockchain technology with industry experts. Network, learn, and discover new opportunities in the crypto world. Attend workshops on smart contracts, DeFi, and the latest blockchain platforms.",
      images: ["/wce_acm_team.jpg", "/wce_acm_team.jpg", "/wce_acm_team.jpg", "/wce_acm_team.jpg"],
      color: "#4ECDC4",
      icon: "🔗",
      isUpcoming: true
    },
    {
      id: 3,
      title: "VR Gaming Expo",
      date: "May 20-22, 2024",
      description: "Experience the next generation of gaming in our immersive VR Gaming Expo. Try out the latest VR technologies and meet game developers. Participate in VR gaming tournaments and attend panels on the future of virtual reality in gaming.",
      images: ["/wce_acm_team.jpg", "/wce_acm_team.jpg", "/wce_acm_team.jpg", "/wce_acm_team.jpg"],
      color: "#FF9FF3",
      icon: "🎮",
      isUpcoming: true
    },
    {
      id: 4,
      title: "Cybersecurity Conference 2023",
      date: "November 10-12, 2023",
      description: "Stay ahead of cyber threats at our annual Cybersecurity Conference. Learn from top security experts and discover the latest in digital defense. Attend workshops on ethical hacking, threat intelligence, and secure software development.",
      images: ["/wce_acm_team.jpg", "/wce_acm_team.jpg", "/wce_acm_team.jpg", "/wce_acm_team.jpg"],
      color: "#54A0FF",
      icon: "🛡️",
      isUpcoming: false
    }
  ];
  
  export const upcoming = [
    {
      id: 5,
      title: "Tech Innovation Hackathon 2024",
      date: "February 1-3, 2024",
      description: "Join us for an exciting hackathon focused on innovative tech solutions. Collaborate with fellow developers, designers, and entrepreneurs to create groundbreaking projects.",
      image:"/wce_acm_team.jpg",
      color: "#FFD700",
      icon: "💡"
    },
    {
      id: 5,
      title: "Tech Innovation Hackathon 2024",
      date: "February 1-3, 2024",
      description: "Join us for an exciting hackathon focused on innovative tech solutions. Collaborate with fellow developers, designers, and entrepreneurs to create groundbreaking projects.",
      image:"/wce_acm_team.jpg",
      color: "#FFD700",
      icon: "💡"
    },
  ];

  export const blogPosts = [
    {
      id: 1,
      title: "Helpful Tips for Working from Home as a Freelancer",
      excerpt: "Goth jaguar ostrich quail pea excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far",
      category: "Working Tips",
      image:"/wce_acm_team.jpg",
      readTime: "3 mins read",
      tags: ["Freelancing", "Remote Work", "Productivity"],
      likes: 24,
      content: "Full blog post content goes here...",
    },
    {
      id: 2,
      title: "Essential Tools for Remote Development Teams",
      excerpt: "Discover the most effective tools and practices for managing remote development teams and maintaining high productivity levels.",
      category: "Working Tips",
      image:"/wce_acm_team.jpg",
      readTime: "4 mins read",
      tags: ["Development", "Tools", "Team Management"],
      likes: 32,
      content: "Full blog post content goes here...",
    },
    {
      id: 3,
      title: "Building a Successful Freelance Portfolio",
      excerpt: "Learn how to create an impressive portfolio that attracts clients and showcases your best work effectively.",
      category: "Working Tips",
      image:"/wce_acm_team.jpg",
      readTime: "5 mins read",
      tags: ["Portfolio", "Freelancing", "Marketing"],
      likes: 45,
      content: "Full blog post content goes here...",
    },
  ]
  
  
  
  