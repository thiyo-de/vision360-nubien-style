import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive items per page
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1); // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Tablet: 2 items
      } else {
        setItemsPerPage(3); // Desktop: 3 items
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const testimonials = [
    {
      name: "Mike Torello",
      role: "Executive Engineer",
      company: "Tech Innovations",
      image: "👨‍💻",
      testimonial: "The virtual tour technology exceeded our expectations. Our client engagement increased by 75% and the immersive experience has become our strongest sales tool."
    },
    {
      name: "Rick Wright",
      role: "Executive Engineer", 
      company: "Digital Solutions",
      image: "👨‍💼",
      testimonial: "Implementation was seamless and the results were immediate. Our conversion rates improved dramatically, and clients love the interactive experience we now provide."
    },
    {
      name: "Devon Miles",
      role: "Executive Engineer",
      company: "Future Systems",
      image: "👨‍🔬",
      testimonial: "Outstanding quality and professional service. The virtual tours have revolutionized how we present our facilities to potential clients and partners worldwide."
    },
    {
      name: "Sarah Johnson",
      role: "Real Estate Director",
      company: "Premier Properties",
      image: "👩‍💼",
      testimonial: "The virtual tours have completely revolutionized our property showcasing process. Our clients can now explore properties from anywhere in the world, resulting in a 45% increase in qualified leads."
    },
    {
      name: "Marcus Thompson",
      role: "Hotel Operations Manager",
      company: "Luxury Resorts Group",
      image: "👨‍🍳",
      testimonial: "Since implementing virtual tours, our online bookings have skyrocketed by 60%. Guests arrive with clear expectations and our customer satisfaction scores have reached an all-time high."
    },
    {
      name: "Elena Rodriguez",
      role: "Marketing Manager",
      company: "Retail Dynamics",
      image: "👩‍🎨",
      testimonial: "Our retail spaces come alive through these virtual tours. Customers can experience our stores remotely, leading to more informed visits and a 35% increase in conversion rates."
    },
    {
      name: "James Park",
      role: "University Admissions",
      company: "State University",
      image: "👨‍🎓",
      testimonial: "Virtual campus tours have transformed our student recruitment process. Prospective students from around the globe can now explore our facilities, leading to a 50% increase in international applications."
    },
    {
      name: "Lisa Chen",
      role: "Event Coordinator",
      company: "Premier Venues",
      image: "👩‍💻",
      testimonial: "Event planners love being able to walk through our venues virtually before booking. It saves everyone time and ensures perfect venue selection. Our booking rate has increased by 40%."
    }
  ];

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - itemsPerPage + testimonials.length) % testimonials.length);
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex * itemsPerPage);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < itemsPerPage; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const currentPage = Math.floor(currentIndex / itemsPerPage);

  return (
    <div className="relative max-w-7xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentIndex}-${itemsPerPage}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className={`grid gap-6 md:gap-8 mb-8 md:mb-12 ${
            itemsPerPage === 1 
              ? 'grid-cols-1' 
              : itemsPerPage === 2 
              ? 'grid-cols-1 md:grid-cols-2' 
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {getVisibleTestimonials().map((testimonial, index) => (
            <motion.div
              key={`${currentIndex}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group h-full flex flex-col"
            >
              <div className="flex items-center mb-4 md:mb-6 flex-shrink-0">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-xl md:text-2xl mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {testimonial.image}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-orange-400 text-base md:text-lg truncate">{testimonial.name}</h4>
                  <p className="text-xs md:text-sm text-gray-300 truncate">{testimonial.role}</p>
                  <p className="text-xs text-gray-400 truncate">{testimonial.company}</p>
                </div>
              </div>
              
              <blockquote className="text-gray-300 leading-relaxed text-sm md:text-base flex-1">
                "{testimonial.testimonial}"
              </blockquote>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-center items-center space-x-4 px-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          disabled={totalPages <= 1}
          className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
        >
          <ChevronLeft size={16} className="text-white md:w-5 md:h-5" />
        </motion.button>
        
        <div className="flex space-x-1 md:space-x-2 overflow-hidden">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`h-2 rounded-full transition-all duration-300 flex-shrink-0 ${
                currentPage === index
                  ? 'bg-orange-400 w-4 md:w-6'
                  : 'bg-white/40 hover:bg-white/60 w-2'
              }`}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          disabled={totalPages <= 1}
          className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
        >
          <ChevronRight size={16} className="text-white md:w-5 md:h-5" />
        </motion.button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;