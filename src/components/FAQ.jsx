import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    return (
        <motion.div 
            className='container mx-auto px-4 py-16 text-white'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h2 
                className='text-4xl md:text-5xl font-bold text-center mb-12'
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                FAQs
            </motion.h2>
            <div className="space-y-4">
                {faqData.map((faq) => (
                    <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
                ))}
                <FAQItem 
                    question="Contact Information" 
                    answer={
                        <div>
                            <p className="mb-2">
                                For queries contact:
                                <br />
                                Viraj Takone: +91 7420098224
                                <br />
                                Vaibhav Fulmali: +91 8530084596
                                <br />
                                Sanika Patil: +91 9423236973
                            </p>
                            <p>
                                You can also reach us by email at:
                                <br />
                                - wceacmsc@gmail.com
                                <br />
                                - wcehackathon@walchandsangli.ac.in
                            </p>
                        </div>
                    } 
                />
            </div>
        </motion.div>
    );
};

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <motion.div 
            className="border-b border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <button
                className="flex justify-between items-center w-full py-4 text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-semibold">{question}</span>
                <ChevronDown 
                    className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                />
            </button>
            <motion.div 
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <div className="pb-4 text-gray-300">
                    {typeof answer === 'string' ? <p>{answer}</p> : answer}
                </div>
            </motion.div>
        </motion.div>
    );
};

const faqData = [
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
    }
];

export default FAQ;

