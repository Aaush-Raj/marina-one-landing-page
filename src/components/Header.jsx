import { Home, DollarSign, Map, Wifi, MapPin, FileDown, Image, Menu, X } from 'lucide-react';
import Logo from "../assets/Logo.png";
import { useEffect, useState } from 'react';
import { useModal } from '../context/ModalContext';

const navItems = [
  { label: '', icon: Home, href: '#home', activeBg: 'bg-primary' },
  { label: 'Price', icon: DollarSign, href: '#price', activeBg: 'bg-primary' },
  { label: 'Site Plan', icon: Map, href: '#site-plan', activeBg: 'bg-primary' },
  { label: 'Amenities', icon: Wifi, href: '#amenities', activeBg: 'bg-primary' },
  { label: 'Gallery', icon: Image, href: '#gallery', activeBg: 'bg-primary' },
  { label: 'Location', icon: MapPin, href: '#location', activeBg: 'bg-primary' },
  { label: 'Brochure', icon: FileDown, href: '#brochure', activeBg: 'bg-primary' },
];

export default function Header() {
  const { openModal } = useModal();
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Smooth scrolling functionality
    const handleSmoothScroll = (e) => {
      if (e.target.closest('a') && e.target.closest('a').getAttribute('href').startsWith('#')) {
        e.preventDefault();
        
        const targetId = e.target.closest('a').getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }

        // Close mobile menu after clicking a link
        if (isMobile) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    // Add event listener to the navigation
    const navElement = document.querySelector('nav');
    if (navElement) {
      navElement.addEventListener('click', handleSmoothScroll);
    }

    // Active section tracking with Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    navItems.forEach(item => {
      const sectionId = item.href.replace('#', '');
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      if (navElement) {
        navElement.removeEventListener('click', handleSmoothScroll);
      }
      observer.disconnect();
    };
  }, [isMobile]);

  const renderDesktopNav = () => (
    <nav className="hidden lg:flex space-x-0">
      {navItems.map(({ label, icon: Icon, href, activeBg }) => {
        const sectionId = href.replace('#', '');
        const isActive = activeSection === sectionId;
        
        return (
          <a
            key={label}
            href={href}
            onClick={() => { if(href === "#brochure") openModal() }}
            className={`flex items-center px-4 py-4 ${href === "#home" && 'border-l-1 border-gray-200'} ${href === "#brochure" && 'border-none'} hover:bg-gray-100 border-r-1 border-gray-200 ${
              isActive ? `${activeBg} text-white` : 'text-black'
            }`}
          >
            <Icon
              className={`mr-2 ${isActive ? 'text-white' : 'text-black'}`}
              size={18}
            />
            <span className="font-medium">{label}</span>
          </a>
        );
      })}
    </nav>
  );

  const renderMobileNav = () => (
    <>
      <button 
        className="lg:hidden p-2 mr-4"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0  bg-white shadow-md z-50">
          <nav className="flex flex-col">
            {navItems.map(({ label, icon: Icon, href, activeBg }) => {
              const sectionId = href.replace('#', '');
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => {
                    if (href === "#brochure") {
                      e.preventDefault();
                      openModal();
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center px-6 py-4  hover:bg-gray-100 ${
                    isActive ? `${activeBg} text-white` : 'text-black'
                  }`}
                >
                  <Icon
                    className={`mr-3 ${isActive ? 'text-white' : 'text-black'}`}
                    size={18}
                  />
                  <span className="font-medium">{label || 'Home'}</span>
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );

  return (
    <header className="flex items-center justify-between w-full lg:pr-80 py-1 shadow-md bg-white fixed top-0 z-990">
      {/* Logo */}
      <div className="flex px-4 items-center space-x-2">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Navigation */}
      {renderDesktopNav()}
      {renderMobileNav()}
    </header>
  );
}