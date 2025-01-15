import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Sun, 
  DollarSign, 
  TrendingUp, 
  Gamepad2,
  ExternalLink,
  Github
} from 'lucide-react';

const Review = () => {
  const projects = [
    {
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts. Get accurate weather updates with beautiful visualizations.",
      tech: ["JavaScript", "API Integration", "React"],
      icon: <Sun className="w-6 h-6" />,
      gradient: "from-orange-400 to-pink-600",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Expense Tracker",
      description: "Personal finance management application with analytics. Track expenses, create budgets, and visualize spending patterns.",
      tech: ["React", "Node.js", "MongoDB"],
      icon: <DollarSign className="w-6 h-6" />,
      gradient: "from-green-400 to-cyan-500",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "CIBIL Score Tracker",
      description: "Credit score monitoring and analysis application. Track your credit score and get personalized improvement recommendations.",
      tech: ["Python", "Data Analysis", "APIs"],
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-purple-400 to-blue-500",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Tic Tac Toe Game",
      description: "Interactive game with AI opponent option. Challenge yourself against a smart AI or play with friends.",
      tech: ["JavaScript", "HTML/CSS", "Algorithm"],
      icon: <Gamepad2 className="w-6 h-6" />,
      gradient: "from-red-400 to-yellow-500",
      demoLink: "#",
      githubLink: "#"
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

  const cardVariants = {
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

  return (
    <div id="reviews" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block p-2 rounded-full bg-blue-500/10 mb-4"
            >
              <Cloud className="w-6 h-6 text-blue-400" />
            </motion.div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Explore some of my recent work and personal projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r bg-opacity-50 rounded-xl blur-xl transition-all duration-300 group-hover:opacity-70"
                     style={{ backgroundImage: `linear-gradient(to right, ${project.gradient})` }} />
                
                <div className="relative bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm overflow-hidden">
                  {/* Project Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient}`}>
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                    
                    {/* Links */}
                    <div className="flex space-x-2">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demoLink}
                        className="p-2 rounded-full bg-gray-700/50 text-gray-300 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubLink}
                        className="p-2 rounded-full bg-gray-700/50 text-gray-300 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-300 mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.gradient} text-white`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-r rounded-xl p-6 flex items-center justify-center opacity-0 transition-opacity"
                    style={{ 
                      backgroundImage: `linear-gradient(to right, ${project.gradient})`,
                      backgroundColor: 'rgba(0,0,0,0.7)'
                    }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-white text-gray-900 rounded-full font-semibold"
                    >
                      View Project
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Review;