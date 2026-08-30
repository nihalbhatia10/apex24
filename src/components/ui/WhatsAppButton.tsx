'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export const WhatsAppButton = ({ 
  phoneNumber = "1234567890", 
  message = "Hello, I'm interested in your services." 
}: WhatsAppButtonProps) => {
  // Format the URL properly
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:bg-[#128C7E] transition-colors duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      aria-label="Chat with us on WhatsApp"
    >
      {/* Tooltip */}
      <span className="absolute -top-10 right-0 w-max opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg pointer-events-none">
        Chat with us
      </span>
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="white"
        className="ml-[2px] mt-[1px]" // Slight adjustment to center the icon perfectly
      >
        <path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.128.552 4.199 1.597 6.03L.044 24l6.096-1.597A12.016 12.016 0 0012.031 24c6.648 0 12.031-5.383 12.031-12.031C24.062 5.383 18.679 0 12.031 0zm0 22.015c-1.802 0-3.565-.484-5.112-1.404l-.367-.216-3.8.995.998-3.708-.238-.378a9.98 9.98 0 01-1.528-5.273c0-5.545 4.512-10.057 10.057-10.057 5.546 0 10.057 4.512 10.057 10.057 0 5.546-4.511 10.058-10.057 10.058zm5.534-7.556c-.303-.151-1.794-.886-2.071-.986-.277-.101-.479-.151-.68.151-.202.303-.781.986-.957 1.188-.176.202-.353.227-.656.076-1.63-.809-2.73-1.603-3.79-3.418-.201-.303.202-.278.498-.874.101-.202.05-.378-.025-.53-.076-.152-.68-1.643-.933-2.25-.246-.591-.497-.512-.68-.52h-.581c-.202 0-.529.076-.807.378-.277.303-1.059 1.036-1.059 2.525 0 1.489 1.084 2.926 1.235 3.128.151.202 2.132 3.256 5.166 4.563 2.164.933 2.871.957 3.398.887.618-.083 1.794-.732 2.046-1.439.252-.707.252-1.312.176-1.439-.075-.126-.277-.202-.579-.353z" />
      </svg>
    </motion.a>
  );
};
