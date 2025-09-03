import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Camera, Building, Home, Store, MapPin, Users } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  client: string;
  completedDate: string;
};

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { name: 'All', icon: Camera },
    { name: 'Real Estate', icon: Home },
    { name: 'Commercial', icon: Building },
    { name: 'Retail', icon: Store },
    { name: 'Hospitality', icon: Users },
    { name: 'Street View', icon: MapPin },
  ];

  const projects = [
    {
      id: 1,
      title: 'Luxury Downtown Penthouse',
      category: 'Real Estate',
      image: '/api/placeholder/600/400',
      description: 'Stunning 3-bedroom penthouse with city views and modern amenities.',
      features: ['4K Virtual Tour', 'Interactive Floor Plan', '360° Balcony Views'],
      client: 'Premium Properties LLC',
      completedDate: 'March 2024'
    },
    {
      id: 2,
      title: 'Modern Office Complex',
      category: 'Commercial',
      image: '/api/placeholder/600/400',
      description: 'State-of-the-art office building with collaborative workspaces.',
      features: ['Google Street View', 'Interior Navigation', 'Meeting Room Tours'],
      client: 'TechCorp Industries',
      completedDate: 'February 2024'
    },
    {
      id: 3,
      title: 'Boutique Fashion Store',
      category: 'Retail',
      image: '/api/placeholder/600/400',
      description: 'High-end fashion boutique with immersive shopping experience.',
      features: ['Product Hotspots', 'Virtual Shopping', 'Brand Integration'],
      client: 'Elite Fashion House',
      completedDate: 'January 2024'
    },
    {
      id: 4,
      title: 'Five-Star Resort & Spa',
      category: 'Hospitality',
      image: '/api/placeholder/600/400',
      description: 'Luxury resort showcasing amenities and beautiful landscapes.',
      features: ['Pool & Spa Tours', 'Room Showcases', 'Dining Experiences'],
      client: 'Paradise Resort Group',
      completedDate: 'December 2023'
    },
    {
      id: 5,
      title: 'Historic Downtown District',
      category: 'Street View',
      image: '/api/placeholder/600/400',
      description: 'Complete Google Street View coverage of historic shopping district.',
      features: ['360° Street Coverage', 'Business Integration', 'Tourist Navigation'],
      client: 'City Tourism Board',
      completedDate: 'November 2023'
    },
    {
      id: 6,
      title: 'Suburban Family Home',
      category: 'Real Estate',
      image: '/api/placeholder/600/400',
      description: 'Beautiful family home with spacious rooms and backyard.',
      features: ['Virtual Walkthrough', 'Garden Tour', 'Neighborhood Views'],
      client: 'Sunshine Realty',
      completedDate: 'October 2023'
    },
    {
      id: 7,
      title: 'Tech Startup Office',
      category: 'Commercial',
      image: '/api/placeholder/600/400',
      description: 'Creative workspace designed for innovation and collaboration.',
      features: ['Open Space Tours', 'Creative Zones', 'Amenity Showcase'],
      client: 'InnovateTech Solutions',
      completedDate: 'September 2023'
    },
    {
      id: 8,
      title: 'Artisan Coffee Shop',
      category: 'Retail',
      image: '/api/placeholder/600/400',
      description: 'Cozy coffee shop with artisanal atmosphere and local art.',
      features: ['Ambient Experience', 'Menu Integration', 'Local Art Gallery'],
      client: 'Bean There Café',
      completedDate: 'August 2023'
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-24">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 px-4">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 px-4">
              Explore our collection of immersive virtual experiences. Each project 
              tells a unique story and showcases our commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`glass-card px-4 sm:px-6 py-3 flex items-center space-x-2 transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-primary text-white'
                    : 'hover:bg-white/10'
                }`}
              >
                <category.icon size={20} />
                <span className="font-medium">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ 
                    scale: 1.03,
                    rotateY: 5,
                  }}
                  className="glass-card gradient-border group cursor-pointer overflow-hidden"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-600/20 mb-6 rounded-lg overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-full h-full bg-gradient-to-br from-primary/30 to-purple-600/30 flex items-center justify-center"
                    >
                      <Camera size={48} className="text-white/60" />
                    </motion.div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-primary font-medium mb-2">
                        {project.category}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {project.completedDate}
                      </span>
                      <ExternalLink size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              className="glass-card gradient-border max-w-2xl w-full max-h-[90vh] overflow-y-auto mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>

              <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-600/20 mb-6 rounded-lg flex items-center justify-center">
                <Camera size={64} className="text-white/60" />
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="text-white font-medium mb-1">Client</h4>
                    <p className="text-muted-foreground">{selectedProject.client}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Completed</h4>
                    <p className="text-muted-foreground">{selectedProject.completedDate}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                  <button className="btn-primary flex-1">
                    View Live Tour
                  </button>
                  <button className="btn-glass">
                    Share Project
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-purple-600/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's work together to bring your vision to life with our premium 
              virtual tour services.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;