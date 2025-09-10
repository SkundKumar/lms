"use client";

import { usePathname } from 'next/navigation';
import PillNav from './PillNav';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

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
          
        ]}
        activeHref={pathname}
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#2d2d2a" //242422
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
      <div className="pt-20 flex items-center justify-center gap-3">
        <SignedOut>
          <SignInButton>
            <button className="px-4 py-1 cursor-crosshair rounded-full bg-white border-1 hover:border-black transition-all duration-500 shadow-md shadow-zinc-900 text-black text-sm font-medium">Sign in</button>
          </SignInButton>
          
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </>
  );
};

export default ConditionalNavbar;
