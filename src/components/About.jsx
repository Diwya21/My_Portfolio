import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Languages, Award } from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    { icon: <Phone className="w-5 h-5" />, text: "076 9747397" },
    { icon: <Mail className="w-5 h-5" />, text: "diwyanjaliwijerathna@gmail.com" },
    { icon: <MapPin className="w-5 h-5" />, text: "Sri Wijaya, Mahapitiya, Rikillagaskada" },
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Sinhala", level: "Native" },
  ];

  return (
    <section className="py-20 bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Award className="w-6 h-6 text-purple-400" />
              Personal Profile
            </h3>
            <p className="text-gray-300 leading-relaxed">
              A self-motivated IT professional specializing in quality assurance tools and techniques, 
              proficient in HTML, JavaScript, Java, and React. Currently pursuing studies at the Institute 
              of Technology, University of Moratuwa, with a strong foundation in IT concepts and a passion 
              for real-world application. Actively seeking collaborative opportunities to enhance technical 
              skills and contribute to dynamic teams.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Languages className="w-5 h-5 text-purple-400" />
                Languages
              </h3>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between text-gray-300">
                    <span>{lang.name}</span>
                    <span className="text-purple-400">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};