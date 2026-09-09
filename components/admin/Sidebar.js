'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, Images, CalendarDays, FileText, BookOpen, Users, Settings, ChevronLeft, ChevronRight, LogOut } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Gallery', href: '/admin/gallery', icon: Images },
  { label: 'Events', href: '/admin/events', icon: CalendarDays },
  { label: 'Blogs', href: '/admin/blogs', icon: FileText },
  { label: 'Documents', href: '/admin/documents', icon: BookOpen },
  { label: 'Team', href: '/admin/team', icon: Users },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (href) => {
    if (href === '/admin') return pathname === '/admin';
    return pathname.startsWith(href);
  };

  return (
    <aside className={cn(
      'fixed left-0 top-0 z-40 h-screen border-r border-[#8b6f5e]/15 bg-[#1a1412] text-white flex flex-col transition-all duration-300',
      collapsed ? 'w-[70px]' : 'w-[250px]'
    )}>
      <div className="flex items-center gap-3 px-4 h-16 border-b border-white/10">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2d7d7d] to-[#8b4a3c] flex items-center justify-center text-white font-bold text-sm shrink-0">
          IKS
        </div>
        {!collapsed && <span className="text-sm font-semibold tracking-wide truncate">Admin Panel</span>}
      </div>

      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link key={item.href} href={item.href}>
              <div className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer',
                active
                  ? 'bg-gradient-to-r from-[#2d7d7d] to-[#2d7d7d]/80 text-white shadow-md'
                  : 'text-white/60 hover:text-white hover:bg-white/8'
              )}>
                <Icon className="w-5 h-5 shrink-0" />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="px-2 pb-3 space-y-2 border-t border-white/10 pt-3">
        <Link href="/">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/8 transition-all duration-200 cursor-pointer">
            <LogOut className="w-5 h-5 shrink-0" />
            {!collapsed && <span className="truncate">Back to Site</span>}
          </div>
        </Link>

        <Button variant="ghost" size="sm" onClick={() => setCollapsed(!collapsed)} className="w-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/8">
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </Button>
      </div>
    </aside>
  );
};
