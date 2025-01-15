import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Twitter, 
  Instagram,
  Code,
  Heart,
  Terminal,
  Coffee
} from 'lucide-react';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#reviews" },
    { name: "Contact", href: "#contact" }
  ];
  // somesh  link dalna hai href me
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "#", label: "Email" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    // { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-blue-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Somesh Soni
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              DevOps & Full Stack Developer building scalable solutions and creating impactful experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technology Stack */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-white font-semibold">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "Python", "AWS", "Docker"].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-gray-800 rounded-full text-gray-400 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-white font-semibold">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              variants={itemVariants}
              className="text-gray-400 text-sm flex items-center space-x-1"
            >
              <span>&copy; {new Date().getFullYear()} Somesh Soni.</span>
              <span>All rights reserved.</span>
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-2 mt-4 md:mt-0"
            >
              <Code className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-sm">Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-gray-400 text-sm">and</span>
              <Coffee className="w-4 h-4 text-yellow-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;