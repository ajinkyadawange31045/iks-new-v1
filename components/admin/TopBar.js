'use client';

import { usePathname } from 'next/navigation';
import { Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const pageTitles = {
  '/admin': 'Dashboard',
  '/admin/gallery': 'Gallery Management',
  '/admin/events': 'Events Management',
  '/admin/blogs': 'Blog Management',
  '/admin/documents': 'Documents Management',
  '/admin/team': 'Team Management',
  '/admin/settings': 'Settings',
};

export const TopBar = () => {
  const pathname = usePathname();
  const title = pageTitles[pathname] || 'Admin';

  return (
    <header className="sticky top-0 z-30 h-16 border-b border-[#8b6f5e]/15 bg-white/80 backdrop-blur-md flex items-center justify-between px-6">
      <div>
        <h1 className="text-lg font-semibold text-[#1a1412]">{title}</h1>
        <p className="text-xs text-[#8b6f5e]">IKS Centre for Maritime & Artistic Traditions</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8b6f5e]" />
          <Input placeholder="Search..." className="w-64 pl-9 h-9 bg-[#f5f1e8]/50 border-[#8b6f5e]/20 text-sm" />
        </div>

        <Button variant="ghost" size="icon" className="relative text-[#8b6f5e] hover:text-[#5c3a2a]">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#8b4a3c] rounded-full" />
        </Button>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2d7d7d] to-[#8b4a3c] flex items-center justify-center text-white text-xs font-bold">
            A
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-[#1a1412] leading-none">Admin</p>
            <p className="text-xs text-[#8b6f5e]">admin@iks.edu</p>
          </div>
        </div>
      </div>
    </header>
  );
};
