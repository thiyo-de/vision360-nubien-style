import { motion } from 'framer-motion';
import { Camera, Building, Home, Store, MapPin, Zap, Users, Globe } from 'lucide-react';

const ServicesPage = () => {
  const allServices = [
    {
      icon: Camera,
      title: 'Virtual Tours',
      description: 'Immersive 360° virtual tours that let customers explore your space from anywhere in the world.',
      features: ['4K Quality Recording', 'Interactive Hotspots', 'Mobile Friendly', 'Custom Branding'],
      price: 'Starting at $299',
      popular: true
    },
    {
      icon: MapPin,
      title: 'Google Street View',
      description: 'Professional Google Street View imagery to boost your local search presence and discovery.',
      features: ['Google Certified', 'SEO Benefits', 'Local Discovery', 'Business Listings'],
      price: 'Starting at $199'
    },
    {
      icon: Building,
      title: 'Commercial Spaces',
      description: 'Showcase offices, retail spaces, and commercial properties with professional virtual tours.',
      features: ['Professional Lighting', 'Brand Integration', 'Lead Generation', 'Analytics Dashboard'],
      price: 'Starting at $399'
    },
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Help properties sell faster with stunning virtual walkthroughs that engage buyers.',
      features: ['Faster Sales', 'Remote Viewing', 'Premium Presentation', 'MLS Integration'],
      price: 'Starting at $249'
    },
    {
      icon: Store,
      title: 'Hospitality',
      description: 'Hotels, restaurants, and venues that drive more bookings and customer engagement.',
      features: ['Booking Integration', 'Virtual Concierge', 'Enhanced Experience', 'Social Sharing'],
      price: 'Starting at $349'
    },
    {
      icon: Zap,
      title: '360° Photography',
      description: 'High-resolution 360° photography for any application or marketing platform.',
      features: ['HDR Processing', 'Custom Branding', 'Multiple Formats', 'Print Ready'],
      price: 'Starting at $149'
    },
    {
      icon: Users,
      title: 'Event Spaces',
      description: 'Perfect for venues, conference centers, and event spaces to showcase their capabilities.',
      features: ['Event Layouts', 'Capacity Planning', 'Vendor Integration', 'Booking Tools'],
      price: 'Starting at $299'
    },
    {
      icon: Globe,
      title: 'Educational Institutions',
      description: 'Virtual campus tours for schools, universities, and training facilities.',
      features: ['Campus Navigation', 'Student Engagement', 'Virtual Open Houses', 'Accessibility'],
      price: 'Starting at $499'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

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
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 px-4">
              Comprehensive virtual tour solutions tailored to your industry needs. 
              From real estate to hospitality, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
          >
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2,
                }}
                className={`glass-card gradient-border hover:shadow-glow transition-all duration-500 group relative ${
                  service.popular ? 'ring-2 ring-primary/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-primary text-white text-sm font-bold py-1 px-4 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition-all duration-300">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                    {service.description}
                  </p>
                  
                  <div className="text-primary font-bold text-lg mb-4">
                    {service.price}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary text-center"
                >
                  Get Quote
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
              Need Something Custom?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every business is unique. Let's discuss your specific needs and create 
              a tailored solution that works perfectly for you.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Contact Us Today</span>
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

export default ServicesPage;