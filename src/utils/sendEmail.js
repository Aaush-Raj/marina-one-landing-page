

import emailjs from '@emailjs/browser';

export const sendEmail = async (name, phone) => {
  try {
    const response = await emailjs.send(
      'service_iqmmizr',       // e.g. service_xxx
      'template_gntk8zm',      // e.g. template_yyy
      {
        name,
        phone,
      },
      'KKddIFUjR-JosfdPh'        // e.g. s9QKcExample
    );
    console.log('✅ Email sent:', response.status, response.text);
  } catch (error) {
    console.error('❌ Email failed:', error);
  }
};
