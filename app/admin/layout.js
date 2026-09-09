'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/admin/Sidebar';
import { TopBar } from '@/components/admin/TopBar';

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#faf8f3]" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <Sidebar />
      <div className="ml-[250px] transition-all duration-300">
        <TopBar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
