import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

const certificates = [
  "Complete Python 2023 For Absolute Beginners By Udemy",
  "Software Testing Tutorial By Great Learning",
  "Java Programming By Great Learning",
  "Android Application Development By Great Learning",
  "Database Management System By Great Learning",
  "Python for Beginners By Open University of Moratuwa",
  "Web Design for Beginners By Open University of Moratuwa",
  "Front-End Web Development By Open University of Moratuwa",
  "Azure AI Fundamentals challenge provided by Microsoft Learn",
  "Data Science with Python By Southern IRRA",
];

export const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg flex items-start gap-4 hover:bg-gray-700 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GraduationCap className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
              <p className="text-gray-300">{cert}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};