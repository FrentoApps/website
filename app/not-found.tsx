'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/');
    }, 3000); // Redirect after 3 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <span className="font-mono text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-neutral-300">
        Page not found
      </span>
    </div>
  );
}
