import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Terminal, 
  Code, 
  Cloud, 
  Github, 
  Linkedin, 
  Mail,
  Server,
  Container,
  Database
} from 'lucide-react';

const Hero = () => {
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
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const skills = [
    { icon: <Terminal size={24} />, name: "DevOps", color: "blue" },
    { icon: <Code size={24} />, name: "Full Stack", color: "blue" },
    { icon: <Cloud size={24} />, name: "AWS", color: "blue" },
    { icon: <Server size={24} />, name: "CI/CD", color: "blue" },
    { icon: <Container size={24} />, name: "Docker", color: "blue" },
    { icon: <Database size={24} />, name: "Databases", color: "blue" },
  ];

  const socialLinks = [
    { icon: <Github size={24} />, href: "#", label: "GitHub" },
    { icon: <Linkedin size={24} />, href: "#", label: "LinkedIn" },
    { icon: <Mail size={24} />, href: "#", label: "Email" },
  ];

  return (
    <div id="home" className="pt-16 bg-black min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20 opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
        <motion.div 
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Floating Badges */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            initial="hidden"
            animate="visible"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${10 + i * 20}%`
                }}
                variants={floatingAnimation}
                animate="animate"
              >
                <div className={`w-3 h-3 rounded-full bg-blue-${400 + i * 100} opacity-30`} />
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-900/30 text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse" />
              Available for DevOps & Full Stack Projects
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="mt-8 text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            <span className="block">Hi, I'm Somesh Soni</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              DevOps & Full Stack Developer
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="mt-6 max-w-md mx-auto text-base text-gray-400 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl"
          >
            Transforming ideas into scalable solutions with modern DevOps practices,Aws
            and full-stack development. Currently enhancing my skills at Unified Mentor.
          </motion.p>

          {/* Skills Grid */}
          <motion.div
            variants={itemVariants}
            className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={`text-${skill.color}-400`}>{skill.icon}</span>
                <span className="text-gray-300 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12 gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full shadow-lg shadow-blue-500/20"
            >
              <a 
                href="#contact" 
                className="w-full flex items-center justify-center px-8 py-3 border-2 border-blue-500 text-base font-medium rounded-full text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-200 md:py-4 md:text-lg md:px-10"
              >
                Get in Touch
                <ArrowRight className="ml-2" size={20} />
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 sm:mt-0"
            >
              <a 
                href="#projects" 
                className="w-full flex items-center justify-center px-8 py-3 border-2 border-gray-700 text-base font-medium rounded-full text-gray-300 bg-transparent hover:bg-gray-800 transition-colors duration-200 md:py-4 md:text-lg md:px-10"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { label: "Years Experience", value: "3+" },
              { label: "Projects Completed", value: "10+" },
              { label: "Technologies", value: "15+" },
              { label: "Certifications", value: "5+" }
            ].map((stat, index) => (
              <div key={stat.label} className="p-4 rounded-lg bg-gray-800/30 border border-gray-700/50">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 flex justify-center space-x-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
