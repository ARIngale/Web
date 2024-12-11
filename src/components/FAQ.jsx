import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../constants/index';

const FAQ = () => {
    return (
        <motion.div 
            className='container mx-auto px-4 py-16 text-white overflow-x-hidden'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h2 
                className='text-4xl md:text-5xl font-bold text-center mb-12 bg-heading-bg text-transparent bg-clip-text'
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
            <motion.button
                className="flex justify-between items-center w-full py-4 text-left transition-colors duration-300  rounded-lg px-4"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <span className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="text-cyan-400" />
                </motion.div>
            </motion.button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4 text-gray-300 px-4">
                            {typeof answer === 'string' ? <p>{answer}</p> : answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default FAQ;

