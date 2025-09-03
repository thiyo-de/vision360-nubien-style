import { motion } from 'framer-motion';
import { Camera, Building, Home, Store, MapPin, Zap, X } from 'lucide-react';
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const Services = () => {
  const [visibleTabs, setVisibleTabs] = useState<string[]>(['virtual-tours', 'street-view', 'commercial', 'real-estate', 'hospitality', 'photography']);
  const [activeTab, setActiveTab] = useState('virtual-tours');

  const services = [
    {
      id: 'virtual-tours',
      icon: Camera,
      title: 'Virtual Tours',
      description: 'Immersive 360° virtual tours that let customers explore your space from anywhere.',
      features: ['4K Quality', 'Interactive Hotspots', 'Mobile Friendly'],
      content: 'Create stunning virtual experiences that allow customers to explore your space as if they were physically there. Our state-of-the-art cameras capture every detail in crisp 4K resolution.'
    },
    {
      id: 'street-view',
      icon: MapPin,
      title: 'Google Street View',
      description: 'Professional Google Street View imagery to boost your local search presence.',
      features: ['Google Certified', 'SEO Benefits', 'Local Discovery'],
      content: 'Boost your online presence with official Google Street View integration. Our certified photographers ensure your business appears prominently in local search results.'
    },
    {
      id: 'commercial',
      icon: Building,
      title: 'Commercial Spaces',
      description: 'Showcase offices, retail spaces, and commercial properties professionally.',
      features: ['Professional Lighting', 'Brand Integration', 'Lead Generation'],
      content: 'Transform your commercial property marketing with professional virtual tours that showcase your space in the best possible light, generating more qualified leads.'
    },
    {
      id: 'real-estate',
      icon: Home,
      title: 'Real Estate',
      description: 'Help properties sell faster with stunning virtual walkthroughs.',
      features: ['Faster Sales', 'Remote Viewing', 'Premium Presentation'],
      content: 'Sell properties faster with immersive virtual tours that allow potential buyers to explore homes remotely, saving time and increasing engagement.'
    },
    {
      id: 'hospitality',
      icon: Store,
      title: 'Hospitality',
      description: 'Hotels, restaurants, and venues that drive more bookings.',
      features: ['Booking Integration', 'Virtual Concierge', 'Enhanced Experience'],
      content: 'Increase bookings and guest confidence with virtual tours that showcase your hospitality space, from hotel rooms to restaurant ambiance.'
    },
    {
      id: 'photography',
      icon: Zap,
      title: '360° Photography',
      description: 'High-resolution 360° photography for any application or platform.',
      features: ['HDR Processing', 'Custom Branding', 'Multiple Formats'],
      content: 'Professional 360° photography services for any application, delivered in multiple formats with custom branding options to match your business needs.'
    },
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

  const closeTab = (tabId: string) => {
    const newVisibleTabs = visibleTabs.filter(id => id !== tabId);
    setVisibleTabs(newVisibleTabs);
    if (activeTab === tabId && newVisibleTabs.length > 0) {
      setActiveTab(newVisibleTabs[0]);
    }
  };

  const resetTabs = () => {
    const allTabIds = services.map(s => s.id);
    setVisibleTabs(allTabIds);
    setActiveTab(allTabIds[0]);
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-900 scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive virtual tour solutions tailored to your industry and needs
          </p>
        </motion.div>

        {visibleTabs.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground mb-6 text-lg">All service tabs have been closed.</p>
            <motion.button
              onClick={resetTabs}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-glow transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
            >
              Restore All Services
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-center gap-1 sm:gap-2 bg-black/20 backdrop-blur-sm border border-white/10 p-2 rounded-xl mb-8">
                {visibleTabs.map((tabId) => {
                  const service = services.find(s => s.id === tabId);
                  if (!service) return null;
                  
                  return (
                    <div key={tabId} className="relative group">
                      <TabsTrigger 
                        value={tabId}
                        className="relative flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black min-w-0 flex-1 lg:flex-initial"
                      >
                        <service.icon size={16} className="flex-shrink-0" />
                        <span className="truncate">{service.title}</span>
                      </TabsTrigger>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          closeTab(tabId);
                        }}
                        className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1 focus:ring-offset-black z-10"
                        aria-label={`Close ${service.title} tab`}
                      >
                        <X size={12} />
                      </motion.button>
                    </div>
                  );
                })}
              </TabsList>

              {visibleTabs.map((tabId) => {
                const service = services.find(s => s.id === tabId);
                if (!service) return null;

                return (
                  <TabsContent key={tabId} value={tabId} className="focus:outline-none">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center"
                    >
                      {/* Service Details */}
                      <div className="glass-card gradient-border p-6 sm:p-8 order-2 lg:order-1">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                            <service.icon size={24} className="sm:w-8 sm:h-8 text-white" />
                          </div>
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{service.title}</h3>
                        </div>
                        
                        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
                          {service.content}
                        </p>

                        <div className="space-y-3 mb-8">
                          {service.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: featureIndex * 0.1 }}
                              className="flex items-center space-x-3"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                              <span className="text-sm sm:text-base text-white">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full sm:w-auto bg-primary hover:bg-primary-glow text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
                        >
                          Learn More About {service.title}
                        </motion.button>
                      </div>

                      {/* Service Image Placeholder */}
                      <div className="order-1 lg:order-2">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="aspect-video bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-xl flex items-center justify-center glass-card border border-white/10"
                        >
                          <div className="text-center">
                            <service.icon size={48} className="text-primary mx-auto mb-4" />
                            <p className="text-white font-medium text-lg">{service.title}</p>
                            <p className="text-muted-foreground text-sm">Interactive Demo</p>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </TabsContent>
                );
              })}
            </Tabs>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;