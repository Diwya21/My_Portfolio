import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.img
            src="./src/Assest/My_PhotoCrop.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-purple-500"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.h1 
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Diwyanjali Wijerathna
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            QA Engineer & Software Engineer
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a href="mailto:diwyanjaliwijerathna@gmail.com" className="hover:text-purple-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://github.com/Diwya21" className="hover:text-purple-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="www.linkedin.com/in/diwyanjali-wijerathna" className="hover:text-purple-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <MapPin className="w-5 h-5 mr-2" />
            <span>Sri Wijaya, Mahapitiya, Rikillagaskada</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};