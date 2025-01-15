import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  User, 
  MessageSquare, 
  Github, 
  Linkedin, 
  Phone,
  MapPin 
} from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formState);
  };

  const contactInfo = [
    { icon: <Phone size={20} />, text: "+91 7905855182" },
    { icon: <Mail size={20} />, text: "someshdevops89@gmail.com" },
    { icon: <MapPin size={20} />, text: "Noida Sector 15 , UttarPradesh India" }
  ];

  return (
    <div id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20 opacity-20" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.7),rgba(0,0,0,0))]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block p-2 rounded-full bg-blue-500/10 mb-4"
            >
              <Mail className="w-6 h-6 text-blue-400" />
            </motion.div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
              Interested in working together? Let's connect and create something amazing!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 text-gray-300"
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-2 rounded-lg bg-gray-700/50">
                        {info.icon}
                      </div>
                      <span>{info.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Connect with Me
                </h3>
                <div className="flex space-x-4">
                  {[
                    { icon: <Github size={24} />, href: "https://github.com/someshdevops89?tab=repositories" },
                    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/somesh-soni-0bb895311/" },
                    { icon: <Mail size={24} />, href: "mailto:someshdevops89@gmail.com" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="p-3 rounded-lg bg-gray-700/50 text-gray-300 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <div className="mt-1 relative rounded-lg">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-800/50 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                      placeholder="Your name"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <div className="mt-1 relative rounded-lg">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-800/50 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <div className="mt-1 relative rounded-lg">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-800/50 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                      placeholder="Your message"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center space-x-2 px-8 py-3 border border-transparent rounded-lg text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;