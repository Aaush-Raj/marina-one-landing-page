import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { PhoneCall } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { Car } from 'lucide-react';
import { motion } from 'framer-motion';
import { sendEmail } from '../utils/sendEmail';
import toast from 'react-hot-toast';
import { useModal } from '../context/ModalContext';

export default function Sidebar() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const { openModal } = useModal();

  const handleClick = async () => {
    
    try {
      // Show loading toast immediately
      const toastId = toast.loading('Sending your request...');
      
      // Wait for email to send
      await sendEmail(name, phone);
      
      // Update toast to success
      toast.success(<b>Contact Request Sent!</b>, { id: toastId });
      
      // Only navigate after email is successfully sent
      setTimeout(() => {
        window.location.href = '/thanks_for_reaching_out';
      }, 1000); // Small delay to let user see success message
      
    } catch (error) {
      console.error('Email sending failed:', error);
      toast.error(<b>Failed to send request. Please try again.</b>);
      // Don't navigate if email fails
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!phone.trim() || phone.length < 8) newErrors.phone = 'Valid phone number is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('User submitted:', {
        name,
        phone, // includes country code
      });
      handleClick('Enquire Now');

    }
  };
  const handleClickWhatsapp = () => {
    window.open("https://wa.me/919747744111", "_blank");
  };
  

  return (
    <aside className="fixed  hidden sm:block right-0 top-0 w-80 bg-white shadow-lg h-screen p-4 overflow-y-auto border-l border-gray-200 z-999">
      {/* Top buttons */}
      <div className="flex">
        <button
          className="flex-1 cursor-pointer hover:bg-gray-700 bg-gray-800 text-white py-2 text-sm"
          onClick={openModal}
        >
          Organize Site Visit
        </button>
        <button
          className="flex cursor-pointer hover:bg-green-700 items-center justify-between gap-2 bg-green-600 text-white py-2 text-sm px-2"
          onClick={handleClickWhatsapp}
          >
          <FaWhatsapp />
          WhatsApp Now
        </button>
      </div>

      {/* Call */}
      <div className="text-center mt-4">
        <p className="border text-blue-600 py-2 text-lg font-medium">Call : +91 9916920443</p>
        <button
          className="bg-primary text-white px-4 py-2 mt-2 rounded flex items-center justify-center w-full"
          onClick={openModal}   
               >
          <PhoneCall className="mr-2" size={18} />
          Request Call Back
        </button>
      </div>

      {/* Enquire Form */}
      <h3 className="mt-6 text-center text-xl font-semibold">Enquire Now</h3>

      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-b outline-none py-1"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <PhoneInput
            country={'in'}
            value={phone}
            onChange={setPhone}
            inputStyle={{
              width: '100%',
              border: 'none',
              borderBottom: '1px solid #ccc',
              borderRadius: '0',
              paddingLeft: '48px',
            }}
            containerStyle={{ width: '100%' }}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        <label className="flex items-start text-xs text-gray-700 space-x-2">
          <input type="checkbox" defaultChecked className="mt-1" />
          <span>
            I Consent to The Processing of Provided Data According To{' '}
            <a href="#" className="text-blue-600 underline">Privacy Policy</a> |{' '}
            <a href="#" className="text-blue-600 underline">Terms & Conditions</a>, I Authorize the
            Company to Contact Me via Call, SMS, Email or WhatsApp. This Consent Overrides Any DND.
          </span>
        </label>

        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded w-full"
        >
          Enquire Now
        </button>
      </form>

      {/* Free Cab Banner */}
      <motion.div 
  className="mt-6 flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg"
  initial={false}
  animate={{
    scale: [1, 1.03, 1],
    backgroundColor: ["#f3f4f6", "#e5e7eb", "#f3f4f6"]
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  <motion.div
    animate={{
      scale: [1, 1.2, 1],
      x: [0, 2, 0] // slight horizontal movement
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <Car className="text-teal-500 w-8 mr-2 h-5" />
  </motion.div>
  
  <motion.span
    className="text-sm font-medium"
    
  >
    Free Cab Facility For Site Visit
  </motion.span>
</motion.div>

    </aside>
  );
}


