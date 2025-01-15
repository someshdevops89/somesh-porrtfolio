import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Cloud, 
  Server, 
  Database,
  Github ,
  Monitor,
  Terminal,
  Coffee
} from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const experienceTimeline = [
    {
      year: "2024",
      title: "DevOps Intern",
      company: "Unified Mentor",
      description: "Working on CI/CD pipelines and cloud infrastructure",
      icon: <Cloud size={24} />,
      color: "blue"
    },
    {
      year: "2023",
      title: "Full Stack Development",
      company: "Personal Projects",
      description: "Built multiple web applications using modern technologies",
      icon: <Code size={24} />,
      color: "purple"
    },
    {
      year: "2022",
      title: "Cloud Technologies",
      company: "Self-Learning",
      description: "Mastered AWS services and cloud architecture",
      icon: <Server size={24} />,
      color: "green"
    }
  ];

  const skills = [
    { name: "Frontend", icon: <Monitor />, items: ["React", "JavaScript", "Tailwind CSS"] },
    { name: "Backend", icon: <Server />, items: ["Python", "Node.js", "Express"] },
    { name: "DevOps", icon: <Cloud />, items: ["AWS", "Docker", "Kubernetes"] },
    { name: "Database", icon: <Database />, items: ["MongoDB", "PostgreSQL", "Redis"] }
  ];

  return (
    <div id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block p-2 rounded-full bg-blue-500/10 mb-4"
            >
              <Coffee size={24} className="text-blue-400" />
            </motion.div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-2">
              About Me
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
              A passionate developer combining DevOps expertise with full-stack development skills
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - About Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="prose prose-invert max-w-none"
              >
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm currently working as a DevOps professional while pursuing my journey in full-stack development.
                  My experience includes working with various technologies including JavaScript, Python, AWS, Docker,
                  and Kubernetes. I'm particularly interested in CI/CD pipelines and cloud infrastructure.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mt-4">
                  During my internship at Unified Mentor, I've had the opportunity to work on real-world projects
                  and enhance my skills in both development and operations. I believe in continuous learning and
                  staying updated with the latest technologies in the field.
                </p>
              </motion.div>

              {/* Skills Grid */}
              <motion.div variants={itemVariants} className="mt-8 grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-2 text-blue-400 mb-2">
                      {skill.icon}
                      <h3 className="font-semibold">{skill.name}</h3>
                    </div>
                    <ul className="space-y-1">
                      {skill.items.map((item) => (
                        <li key={item} className="text-gray-400 text-sm">{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Timeline */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-800" />
              {experienceTimeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={itemVariants}
                  className="relative pl-12 pb-8"
                >
                  <div className="absolute left-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <div className={`text-${item.color}-400`}>{item.icon}</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                    <span className={`text-${item.color}-400 text-sm font-semibold`}>
                      {item.year}
                    </span>
                    <h3 className="text-white font-semibold mt-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{item.company}</p>
                    <p className="text-gray-500 mt-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: "Years of Experience", value: "3+" },
              { label: "Projects Completed", value: "10+" },
              { label: "Technologies", value: "15+" },
              { label: "Coffee Cups", value: "∞" }
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 text-center"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;