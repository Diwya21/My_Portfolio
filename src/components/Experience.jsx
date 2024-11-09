import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap } from 'lucide-react';

export const Experience = () => {
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
          Experience & Education
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-500/30" />
            
            {/* Work Experience */}
            <motion.div
              className="mb-12 relative"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-purple-500 p-2 rounded-full">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Work Experience</h3>
              </div>
              
              <div className="ml-14 space-y-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-white mb-2">Trainee Bank Assistant</h4>
                  <p className="text-purple-400 mb-2">People's Bank, Rikillagaskada • 2021 - 2023</p>
                  <p className="text-gray-400">Gained expertise in customer service and team collaboration while handling banking operations and customer inquiries.</p>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-white mb-2">Member of Moraspirit Crew</h4>
                  <p className="text-purple-400 mb-2">University of Moratuwa • 2023 - Present</p>
                  <p className="text-gray-400">Active member of the HRM pillar at Sri Lanka's largest university sports media organization.</p>
                </div>
              </div>
            </motion.div>
            
            {/* Education */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-purple-500 p-2 rounded-full">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Education</h3>
              </div>
              
              <div className="ml-14 space-y-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-white mb-2">Institute of Technology, University of Moratuwa</h4>
                  <p className="text-purple-400 mb-2">Information Technology • 2022 - Present</p>
                  <p className="text-gray-400">Undergraduate student specializing in Information Technology.</p>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-white mb-2">Poramadulla Central College</h4>
                  <p className="text-purple-400 mb-2">GCE A/L - Physical Science • 2020</p>
                  <p className="text-gray-400">Completed Advanced Level education in Physical Science stream.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};