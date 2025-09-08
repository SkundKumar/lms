"use client";

import { usePathname } from 'next/navigation';
import PillNav from './PillNav';

const ConditionalNavbar = () => {
  const pathname = usePathname();
  
  // Hide navbar on sign-in and sign-up pages
  const hideNavbar = pathname === '/sign-in' || pathname === '/sign-up' || pathname === '/' || pathname.startsWith('/sign-up');
  
  if (hideNavbar) {
    return null;
  }

  return (
    <>
      <PillNav
        logo="/images/logo.svg"
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '/home' },
          { label: 'Companions', href: '/companions' },
          { label: 'My Journey', href: '/my-journey' },
          { label: 'Sign In', href: '/sign-in' }
        ]}
        activeHref={pathname}
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#2d2d2a" //242422
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
      <div className="pt-20" />
    </>
  );
};

export default ConditionalNavbar;
