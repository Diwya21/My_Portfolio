import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Users } from 'lucide-react';

const achievements = [
  {
    title: "A Member",
    organization: "Institution of Incorporated  Engineers, Sri Lanka (IIESL)",
    period: "Now",
    icon: <Users />
  },
  {
    title: "Committee Member",
    organization: "ITUM Computer Society",
    period: "Present",
    icon: <Users />
  },
  {
    title: "The Presenter",
    organization: "ITUM Announcing Club",
    period: "Present",
    icon: <Users />
  },
  {
    title: "A Member",
    organization: "Editorial Board of ITUM Sports Club",
    period: "Present",
    icon: <Users />
  },
  {
    title: "The Head Prefect",
    organization: "Poramadulla Central College",
    period: "2018-2019",
    icon: <Trophy />
  },
  {
    title: "The Western Band Leader",
    organization: "Poramadulla Central College",
    period: "2018-2019",
    icon: <Trophy />
  },
  {
    title: "The Sports Captain",
    organization: "Poramadulla Central College",
    period: "2018-2019",
    icon: <Trophy />
  },
  {
    title: "The Deputy Head Prefect",
    organization: "Viharamahadevi Dhamma School",
    period: "2015-2016",
    icon: <Trophy />
  },
];

export const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Leadership & Achievements
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <div className="text-purple-400 w-6 h-6">
                      {achievement.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-purple-400 mb-1">{achievement.organization}</p>
                    <p className="text-gray-400 text-sm">{achievement.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};