import { useState, useEffect, useRef } from 'react';
import { X, Phone, Car, DollarSign } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import { sendEmail } from '../../utils/sendEmail';
import toast from 'react-hot-toast';

export default function ContactUsModal({ isOpen, onClose }) {
    const [animationState, setAnimationState] = useState('closed');
    const modalRef = useRef(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [consentChecked, setConsentChecked] = useState(true);
    const [errors, setErrors] = useState({});

  // Handle modal animations
  useEffect(() => {
    if (isOpen) {
      setAnimationState('opening');
      document.body.classList.add('overflow-hidden'); // Prevent scrolling
      const timer = setTimeout(() => setAnimationState('open'), 10);
      return () => clearTimeout(timer);
    } else {
      document.body.classList.remove('overflow-hidden'); // Restore scrolling
      if (animationState !== 'closed') {
        setAnimationState('closing');
        const timer = setTimeout(() => setAnimationState('closed'), 300);
        return () => clearTimeout(timer);
      }
    }
  }, [isOpen]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Handle form submission
 // Form submission with validation
 const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Validate form
  const newErrors = {};
  if (!name.trim()) newErrors.name = 'Name is required';
  if (!phone.trim() || phone.length < 8) newErrors.phone = 'Valid phone number required';
  
  setErrors(newErrors);
  
  // Only proceed if no errors
  if (Object.keys(newErrors).length === 0) {
    try {
      // Show loading toast
      const toastId = toast.loading('Sending your request...');
      
      // Send email
      await sendEmail(name, phone);
      
      // Update toast to success
      toast.success(<b>Contact request sent successfully!</b>, { id: toastId });
      
      // Close modal after short delay
      setTimeout(() => {
        
        onClose();
        window.location.href = '/thanks_for_reaching_out';
      }, 1000);

      
      
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error(<b>Failed to send request. Please try again.</b>);
    }
  } else {
    // Show error toast if validation fails
    toast.error(<b>Please fix the errors in the form</b>);
  }
};


  if (animationState === 'closed') {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-[9999] transition-all duration-300 ${
        animationState === 'opening' ? 'bg-black/0' :
        animationState === 'open' ? 'bg-black/50' : 'bg-black/0'
      }`}
    >
      <div
        ref={modalRef}
        className={`flex w-full max-w-3xl h-auto relative bg-white transition-all duration-300 ${
          animationState === 'opening' ? 'opacity-0 scale-95' :
          animationState === 'open' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {/* Left sidebar */}
        <div className="hidden md:block w-32 bg-white border-r border-gray-200">
          <div className="h-full flex py-12 px-2 items-center flex-col">
            <h2 className="font-medium text-cyan-500 mb-8 text-lg">We Promise</h2>

            <div className="space-y-4">
              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-cyan-400 mb-2">
                  <Phone className="w-4 h-4 text-cyan-500" />
                </div>
                <h3 className="text-cyan-500 text-sm">Instant Call Back</h3>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-cyan-400 mb-2">
                  <Car className="w-4 h-4 text-cyan-500" />
                </div>
                <h3 className="text-cyan-500 text-sm">Free Site Visit</h3>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-cyan-400 mb-2">
                  <DollarSign className="w-4 h-4 text-cyan-500" />
                </div>
                <h3 className="text-cyan-500 text-sm">Unmatched Price</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Main form area */}
        <div className="flex-1 bg-white p-6 md:py-8 md:px-8 overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
          >
            <X size={18} />
          </button>

          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-xl  text-cyan-500 font-medium mb-2">Enquire Now</h2>
            <p className="text-gray-600 text-xs md:text-sm">
              Enter your details to get more information on this project such as
            </p>
            <p className="font-bold text-sm">BROCHURE, SITE VISITS, PRICING, PLANS & MORE.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
          <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>


            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-1">Mobile Number</label>
              <PhoneInput
                country={'in'}
                value={phone}
                onChange={setPhone}
                inputStyle={{
                  width: '100%',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  paddingLeft: '48px',
                  height: '38px',
                }}
                containerStyle={{ width: '100%' }}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>


            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="consent"
                checked={consentChecked}
                onChange={() => setConsentChecked(!consentChecked)}
                className="mt-1"
                required
              />
              <label htmlFor="consent" className="text-xs text-gray-600">
                I Consent To The Processing Of Provided Data According To Privacy Policy | Terms & Conditions, 
                I Authorize RealTheory Private Limited And Its Representatives To Call, SMS, Email Or WhatsApp 
                Me About Its Products And Offers. This Consent Overrides Any Registration For DNC/NDNC.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 text-sm text-white font-medium py-3 rounded hover:bg-cyan-600 transition-colors uppercase"
            >
              ENQUIRE NOW
            </button>
          </form>
        </div>

        {/* Right info sidebar */}
        <div className="hidden lg:block w-44 bg-[#249ab7] p-4 text-white">
          <div className="h-full flex flex-col">
            <h2 className="text-lg font-medium my-8 text-center">Get information on availabilities</h2>

            <div className="space-y-6 mt-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <span className="text-cyan-500">✓</span>
                </div>
                <span className="text-sm">Available units</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <span className="text-cyan-500">✓</span>
                </div>
                <span className="text-sm">Payment plan</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <span className="text-cyan-500">✓</span>
                </div>
                <span className="text-sm">Floor plans</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
