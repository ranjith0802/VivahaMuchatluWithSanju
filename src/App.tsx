import React, { useState, useEffect } from 'react';
import { Camera, Heart, Star, Phone, Mail, MapPin, Menu, X, Instagram, Facebook, Twitter, Award, Users, Clock, CheckCircle } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'weteam', 'feedback', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const portfolioImages = [
    '/images/portfolio/470899467_968192915364972_443658678848756687_n..jpg',
    '/images/portfolio/470971314_8280827635351779_1869090440685219006_n..jpg',
    '/images/portfolio/470902526_1341309603973703_2468536369988283637_n..jpg',
    '/images/portfolio/491455888_18052450763206235_5387299633644450805_n..jpg',
    '/images/portfolio/470902855_1802824843803110_7330354207378352130_n..jpg',
    '/images/portfolio/470902526_1341309603973703_2468536369988283637_n. copy.jpg',
    '/images/portfolio/470971314_8280827635351779_1869090440685219006_n. copy.jpg',
    '/images/portfolio/470899467_968192915364972_443658678848756687_n. copy.jpg',
    '/images/portfolio/491455888_18052450763206235_5387299633644450805_n. copy.jpg'
  ];

  const testimonials = [
    {
      name: "Priya & Arjun",
      text: "Sanju captured our wedding beautifully! Every moment was perfect and the team was professional throughout.",
      rating: 5,
      image: "/images/portfolio/470899467_968192915364972_443658678848756687_n..jpg"
    },
    {
      name: "Meera & Raj",
      text: "The photography style is unique and artistic. Our families loved the candid shots and traditional poses.",
      rating: 5,
      image: "/images/portfolio/470971314_8280827635351779_1869090440685219006_n..jpg"
    },
    {
      name: "Deepika & Vikram",
      text: "Outstanding service! The team understood our vision perfectly and delivered beyond expectations.",
      rating: 5,
      image: "/images/portfolio/470902526_1341309603973703_2468536369988283637_n..jpg"
    }
  ];

  const services = [
    {
      title: "Wedding Photography",
      description: "Complete wedding day coverage with traditional and candid shots",
      price: "Starting from ₹50,000",
      features: ["Full day coverage", "Traditional ceremonies", "Candid moments", "Family portraits"]
    },
    {
      title: "Pre-Wedding Shoot",
      description: "Romantic couple sessions at stunning locations",
      price: "Starting from ₹15,000",
      features: ["2-3 hours session", "Multiple locations", "Outfit changes", "Edited photos"]
    },
    {
      title: "Reception Photography",
      description: "Elegant reception coverage with guest interactions",
      price: "Starting from ₹25,000",
      features: ["Event coverage", "Guest photos", "Couple shots", "Decoration details"]
    }
  ];

  const teamMembers = [
    {
      name: "Sanju",
      role: "Lead Photographer",
      image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Passionate about capturing love stories with over 8 years of experience"
    },
    
  ];

  return (
    <div className="bg-black text-gold min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gold/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gold">
              <div className="flex items-center space-x-2">
                <Camera className="text-gold" size={32} />
                <span>Vivaha Muchatlu</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'services', 'portfolio', 'weteam', 'feedback', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-gold ${
                    activeSection === section ? 'text-gold' : 'text-gold/70'
                  }`}
                >
                  {section === 'weteam' ? 'WETEAM' : section === 'feedback' ? 'feedback' : section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gold"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gold/20">
              <div className="flex flex-col space-y-4">
                {['home', 'about', 'services', 'portfolio', 'weteam', 'feedback', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="capitalize text-left py-2 text-gold/70 hover:text-gold transition-colors"
                  >
                    {section === 'weteam' ? 'WETEAM' : section === 'feedback' ? 'feedback' : section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(/images/portfolio/470899467_968192915364972_443658678848756687_n..jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-gold mb-6 font-serif">
            Vivaha Muchatlu
          </h1>
          <p className="text-xl md:text-2xl text-gold/90 mb-4">with Sanju</p>
          <p className="text-lg md:text-xl text-gold/80 mb-8 max-w-2xl mx-auto">
            Capturing the sacred moments of your special day with artistry and passion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-gold text-black px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
            >
              View Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-black transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gold mb-8 font-serif">About Us</h2>
            <p className="text-lg text-gold/80 mb-12 leading-relaxed">
              At Vivaha Muchatlu, we believe every wedding tells a unique story. With Sanju leading our passionate team, 
              we specialize in capturing the sacred traditions, joyful celebrations, and intimate moments that make your 
              wedding day truly special. Our approach combines traditional photography with contemporary storytelling to 
              create timeless memories you'll treasure forever.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-gold" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gold mb-2">8+ Years Experience</h3>
                <p className="text-gold/70">Capturing love stories with expertise</p>
              </div>
              <div className="text-center">
                <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-gold" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gold mb-2">500+ Weddings</h3>
                <p className="text-gold/70">Celebrated couples across India</p>
              </div>
              <div className="text-center">
                <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-gold" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gold mb-2">100% Satisfaction</h3>
                <p className="text-gold/70">Happy couples, beautiful memories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gold text-center mb-12 font-serif">Our Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-black/50 p-8 rounded-lg border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-gold mb-4">{service.title}</h3>
                <p className="text-gold/80 mb-6">{service.description}</p>
                <div className="text-xl font-bold text-gold mb-6">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gold/70">
                      <CheckCircle size={16} className="text-gold mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gold text-center mb-12 font-serif">Portfolio</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            {portfolioImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg aspect-square group">
                <img 
                  src={image} 
                  alt={`Wedding ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Camera className="text-gold" size={48} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WETEAM Section */}
      <section id="weteam" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gold text-center mb-12 font-serif">WETEAM</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gold mb-2">{member.name}</h3>
                <p className="text-gold/80 mb-3">{member.role}</p>
                <p className="text-gold/70 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gold text-center mb-12 font-serif">Feedback</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900/50 p-8 rounded-lg border border-gold/20">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gold">{testimonial.name}</h3>
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="text-gold fill-current" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gold/80 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gold text-center mb-12 font-serif">Contact Us</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gold mb-6">Get in Touch</h3>
              <p className="text-gold/80 mb-8">
                Ready to capture your special moments? Let's discuss your wedding photography needs 
                and create beautiful memories together.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="text-gold mr-4" size={20} />
                  <span className="text-gold/80">+91 9876543210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-gold mr-4" size={20} />
                  <span className="text-gold/80">info@vivahamu chatlu.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-gold mr-4" size={20} />
                  <span className="text-gold/80">Hyderabad, Telangana, India</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gold/70 hover:text-gold transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="text-gold/70 hover:text-gold transition-colors">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="text-gold/70 hover:text-gold transition-colors">
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-gold mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-gold focus:border-gold focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-gold focus:border-gold focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gold mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-gold focus:border-gold focus:outline-none"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div>
                  <label className="block text-gold mb-2">Wedding Date</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-gold focus:border-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gold mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-gold focus:border-gold focus:outline-none"
                    placeholder="Tell us about your wedding plans..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gold text-black py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gold/20 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gold mb-4">Vivaha Muchatlu with Sanju</h3>
            <p className="text-gold/70 mb-4">Creating beautiful wedding memories since 2016</p>
            <p className="text-gold/60 text-sm">
              © 2024 Vivaha Muchatlu with Sanju. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;