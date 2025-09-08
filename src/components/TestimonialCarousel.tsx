import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Mike Torello",
      role: "Executive Engineer",
      company: "Tech Innovations",
      image: "👨‍💻",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    },
    {
      name: "Rick Wright",
      role: "Executive Engineer",
      company: "Digital Solutions",
      image: "👨‍💼",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    },
    {
      name: "Devon Miles",
      role: "Executive Engineer",
      company: "Future Systems",
      image: "👨‍🔬",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    },
    {
      name: "Sarah Johnson",
      role: "Real Estate Director",
      company: "Premier Properties",
      image: "👩‍💼",
      testimonial: "The virtual tours have completely revolutionized our property showcasing process. Our clients can now explore properties from anywhere in the world, resulting in a 45% increase in qualified leads and faster closing times."
    },
    {
      name: "Marcus Thompson",
      role: "Hotel Operations Manager",
      company: "Luxury Resorts Group",
      image: "👨‍🍳",
      testimonial: "Since implementing virtual tours, our online bookings have skyrocketed by 60%. Guests arrive with clear expectations and our customer satisfaction scores have reached an all-time high. It's been a game-changer for our business."
    },
    {
      name: "Elena Rodriguez",
      role: "Marketing Manager",
      company: "Retail Dynamics",
      image: "👩‍🎨",
      testimonial: "Our retail spaces come alive through these virtual tours. Customers can experience our stores remotely, leading to more informed visits and a 35% increase in conversion rates. The technology is simply outstanding."
    },
    {
      name: "James Park",
      role: "University Admissions",
      company: "State University",
      image: "👨‍🎓",
      testimonial: "Virtual campus tours have transformed our student recruitment process. Prospective students from around the globe can now explore our facilities, leading to a 50% increase in international applications and higher enrollment rates."
    },
    {
      name: "Lisa Chen",
      role: "Event Coordinator",
      company: "Premier Venues",
      image: "👩‍💻",
      testimonial: "Event planners love being able to walk through our venues virtually before booking. It saves everyone time and ensures perfect venue selection. Our booking rate has increased by 40% since launching virtual tours."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 3) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 3 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {getVisibleTestimonials().map((testimonial, index) => (
            <motion.div
              key={`${currentIndex}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-orange-400 text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                  <p className="text-xs text-gray-400">{testimonial.company}</p>
                </div>
              </div>
              
              <blockquote className="text-gray-300 leading-relaxed text-sm">
                "{testimonial.testimonial}"
              </blockquote>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-center items-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ChevronLeft size={20} className="text-white" />
        </motion.button>
        
        <div className="flex space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 3)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 3) === index
                  ? 'bg-orange-400 w-6'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ChevronRight size={20} className="text-white" />
        </motion.button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;