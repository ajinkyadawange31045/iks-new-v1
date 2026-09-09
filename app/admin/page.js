'use client';

import { StatsCard } from '@/components/admin/StatsCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Images, CalendarDays, FileText, BookOpen, Users, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const recentActivity = [
  { action: 'New image uploaded', section: 'Gallery', time: '2 hours ago', type: 'gallery' },
  { action: 'Event "Vedic Mathematics Workshop" updated', section: 'Events', time: '5 hours ago', type: 'event' },
  { action: 'Blog post "Maritime Heritage" published', section: 'Blogs', time: '1 day ago', type: 'blog' },
  { action: 'Research paper added', section: 'Documents', time: '2 days ago', type: 'document' },
  { action: 'Team member profile updated', section: 'Team', time: '3 days ago', type: 'team' },
];

const quickActions = [
  { label: 'Upload Image', href: '/admin/gallery', icon: Images, color: 'from-[#2d7d7d] to-[#4a9d9d]' },
  { label: 'Create Event', href: '/admin/events', icon: CalendarDays, color: 'from-[#8b4a3c] to-[#a65a4a]' },
  { label: 'Write Blog', href: '/admin/blogs', icon: FileText, color: 'from-[#5c3a2a] to-[#8b6f5e]' },
  { label: 'Add Document', href: '/admin/documents', icon: BookOpen, color: 'from-[#2d7d7d] to-[#8b4a3c]' },
];

const sectionColors = { gallery: '#2d7d7d', event: '#8b4a3c', blog: '#5c3a2a', document: '#2d7d7d', team: '#8b6f5e' };

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#1a1412]">Welcome back, Admin</h2>
          <p className="text-sm text-[#8b6f5e] mt-1">Here's what's happening with your site today.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#8b6f5e]">
          <Clock className="w-4 h-4" />
          {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Total Images" value="24" subtitle="Across 4 categories" icon={Images} trend={12} />
        <StatsCard title="Events" value="3" subtitle="1 upcoming" icon={CalendarDays} trend={0} />
        <StatsCard title="Blog Posts" value="3" subtitle="2 published" icon={FileText} trend={33} />
        <StatsCard title="Documents" value="3" subtitle="Research & papers" icon={BookOpen} trend={15} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-[#8b6f5e]/10 shadow-sm">
          <div className="p-5 border-b border-[#8b6f5e]/10 flex items-center justify-between">
            <h3 className="font-semibold text-[#1a1412]">Recent Activity</h3>
            <TrendingUp className="w-4 h-4 text-[#8b6f5e]" />
          </div>
          <div className="divide-y divide-[#8b6f5e]/10">
            {recentActivity.map((item, idx) => (
              <div key={idx} className="px-5 py-3.5 flex items-center justify-between hover:bg-[#faf8f3]/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: sectionColors[item.type] }} />
                  <div>
                    <p className="text-sm font-medium text-[#1a1412]">{item.action}</p>
                    <p className="text-xs text-[#8b6f5e]">{item.section}</p>
                  </div>
                </div>
                <span className="text-xs text-[#8b6f5e] whitespace-nowrap">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[#8b6f5e]/10 shadow-sm">
          <div className="p-5 border-b border-[#8b6f5e]/10">
            <h3 className="font-semibold text-[#1a1412]">Quick Actions</h3>
          </div>
          <div className="p-4 space-y-3">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link key={action.label} href={action.href}>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#faf8f3] transition-colors cursor-pointer group">
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-[#1a1412] flex-1">{action.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#8b6f5e] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="p-4 border-t border-[#8b6f5e]/10">
            <div className="bg-gradient-to-br from-[#2d7d7d]/5 to-[#8b4a3c]/5 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-[#2d7d7d]" />
                <span className="text-sm font-semibold text-[#1a1412]">Team Members</span>
              </div>
              <p className="text-xs text-[#8b6f5e]">4 active members</p>
              <Link href="/admin/team">
                <Button variant="ghost" size="sm" className="mt-2 text-xs text-[#2d7d7d] hover:text-[#2d7d7d] p-0 h-auto">
                  Manage team <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
