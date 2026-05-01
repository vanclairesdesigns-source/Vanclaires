import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export const SupportPage = () => {
  const { pathname } = useLocation();
  const title = pathname.replace('/', '').replace(/-/g, ' ').toUpperCase();

  const getContent = () => {
    switch (pathname) {
      case '/faq':
        return [
          { q: 'How long does shipping take?', a: 'Complimentary express shipping takes 2-4 business days worldwide.' },
          { q: 'Can I track my order?', a: 'Yes, a tracking number is sent via email once your order has been dispatched from our Paris workshop.' },
          { q: 'What is the return policy?', a: 'We offer hassle-free returns within 14 days of receipt for all full-priced items.' },
          { q: 'How do I care for my silk pieces?', a: 'We recommend professional dry clean only for weighted silk. Store in a cool, dry place away from direct sunlight.' }
        ];
      case '/shipping-and-returns':
        return [
          { q: 'Shipping methods', a: 'All our orders are shipped via DHL Express or FedEx to ensure safe and timely arrival.' },
          { q: 'Return process', a: 'Contact our concierge to schedule a collection or request a prepaid return label.' }
        ];
      case '/privacy-policy':
      case '/terms':
        return [
          { q: 'Data Usage', a: 'Your data is encrypted and handled with the highest standards of luxury confidentiality.' },
          { q: 'Ownership', a: 'All designs and silhouettes are intellectual property of VANCLAIRES.' }
        ];
      case '/size-guide':
        return [
          { q: 'Clothing Sizes', a: 'Our garments are tailored to European standards. Please refer to our detailed measurement chart below or contact our concierge for a fit consultation.' }
        ];
      default:
        return [{ q: 'Information Unavailable', a: 'Please contact our concierge team for assistance.' }];
    }
  };

  return (
    <div className="pt-40 pb-32 px-6 md:px-12 bg-luxury-cream min-h-screen">
      <div className="max-w-3xl mx-auto">
        <header className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-serif italic mb-8"
          >
            {title}
          </motion.h1>
          <div className="h-[1px] bg-black/10 w-full" />
        </header>

        <div className="flex flex-col gap-12">
          {getContent().map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-medium">{item.q}</h3>
              <p className="text-sm font-light text-black/60 leading-relaxed tracking-widest uppercase">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
