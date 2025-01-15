import React from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  Layout,
  Database,
  Wrench ,
  Server,
  Code,
  Github,
  Terminal,
  Monitor,
  Box,
  Cpu,
  Command
} from 'lucide-react';

const Feature = () => {
  const skills = [
    {
      name: "DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "blue",
      items: [
        { name: "AWS", progress: 90 },
        { name: "Docker", progress: 85 },
        { name: "Kubernetes", progress: 80 },
        { name: "CI/CD", progress: 85 }
      ]
    },
    {
      name: "Frontend",
      icon: <Monitor className="w-6 h-6" />,
      color: "purple",
      items: [
        { name: "JavaScript", progress: 90 },
        { name: "React", progress: 85 },
        { name: "Tailwind CSS", progress: 90 },
        { name: "HTML/CSS", progress: 95 }
      ]
    },
    {
      name: "Backend",
      icon: <Server className="w-6 h-6" />,
      color: "green",
      items: [
        { name: "Python", progress: 85 },
        { name: "Node.js", progress: 80 },
        { name: "Express", progress: 85 },
        { name: "APIs", progress: 90 }
      ]
    },
    {
      name: "Tools",
      icon: <Wrench  className="w-6 h-6" />,
      color: "orange",
      items: [
        { name: "Git", progress: 90 },
        { name: "Linux", progress: 85 },
        { name: "VS Code", progress: 95 },
        { name: "Terminal", progress: 90 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: width => ({
      width: `${width}%`,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    })
  };

  return (
    <div id="features" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block p-2 rounded-full bg-blue-500/10 mb-4"
            >
              <Cpu className="w-6 h-6 text-blue-400" />
            </motion.div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Skills & Technologies
            </h2>
            <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
              Expertise across the full development stack and DevOps technologies
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`text-${skill.color}-400`}>{skill.icon}</div>
                  <h3 className="text-lg font-medium text-white">{skill.name}</h3>
                </div>
                
                <div className="space-y-4">
                  {skill.items.map((item) => (
                    <div key={item.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{item.name}</span>
                        <span className="text-gray-400">{item.progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          custom={item.progress}
                          variants={progressVariants}
                          className={`h-full rounded-full bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-400`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {[
              { icon: <Github />, label: "Version Control" },
              { icon: <Command />, label: "Command Line" },
              { icon: <Box />, label: "Package Management" },
              { icon: <Code />, label: "Code Review" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center space-x-2 p-4 rounded-lg bg-gray-800/30 border border-gray-700/50"
              >
                <span className="text-blue-400">{item.icon}</span>
                <span className="text-gray-300 text-sm">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Feature;