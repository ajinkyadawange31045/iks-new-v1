'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Save, Globe, Mail, Phone, MapPin } from 'lucide-react';

export default function SettingsAdmin() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h2 className="text-xl font-bold text-[#1a1412]">Site Settings</h2>
        <p className="text-sm text-[#8b6f5e]">Manage general site configuration</p>
      </div>

      <div className="bg-white rounded-xl border border-[#8b6f5e]/10 shadow-sm divide-y divide-[#8b6f5e]/10">
        <div className="p-6 space-y-4">
          <h3 className="font-semibold text-[#1a1412] flex items-center gap-2"><Globe className="w-4 h-4 text-[#2d7d7d]" /> General</h3>
          <div className="space-y-2">
            <Label>Site Name</Label>
            <Input defaultValue="IKS Centre for Maritime & Artistic Traditions" className="border-[#8b6f5e]/20" />
          </div>
          <div className="space-y-2">
            <Label>Site Description</Label>
            <Textarea defaultValue="Exploring and preserving the rich heritage of Indian knowledge systems" className="border-[#8b6f5e]/20 resize-none" rows={2} />
          </div>
          <div className="space-y-2">
            <Label>Tagline</Label>
            <Input defaultValue="Preserving Heritage, Inspiring Future" className="border-[#8b6f5e]/20" />
          </div>
        </div>

        <div className="p-6 space-y-4">
          <h3 className="font-semibold text-[#1a1412] flex items-center gap-2"><Mail className="w-4 h-4 text-[#2d7d7d]" /> Contact Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input defaultValue="iks@somaiya.edu" className="border-[#8b6f5e]/20" />
            </div>
            <div className="space-y-2">
              <Label>Phone</Label>
              <Input defaultValue="+91 22 6728 4000" className="border-[#8b6f5e]/20" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Address</Label>
            <Textarea defaultValue="Somaiya Vidyavihar University, Vidyavihar, Mumbai - 400077" className="border-[#8b6f5e]/20 resize-none" rows={2} />
          </div>
        </div>

        <div className="p-6 space-y-4">
          <h3 className="font-semibold text-[#1a1412] flex items-center gap-2"><Globe className="w-4 h-4 text-[#2d7d7d]" /> Social Links</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Twitter / X</Label>
              <Input placeholder="https://twitter.com/..." className="border-[#8b6f5e]/20" />
            </div>
            <div className="space-y-2">
              <Label>LinkedIn</Label>
              <Input placeholder="https://linkedin.com/..." className="border-[#8b6f5e]/20" />
            </div>
            <div className="space-y-2">
              <Label>YouTube</Label>
              <Input placeholder="https://youtube.com/..." className="border-[#8b6f5e]/20" />
            </div>
            <div className="space-y-2">
              <Label>Instagram</Label>
              <Input placeholder="https://instagram.com/..." className="border-[#8b6f5e]/20" />
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <h3 className="font-semibold text-[#1a1412]">Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#1a1412]">Show Gallery on Homepage</p>
                <p className="text-xs text-[#8b6f5e]">Display the gallery section on the main page</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator className="bg-[#8b6f5e]/10" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#1a1412]">Show Events on Homepage</p>
                <p className="text-xs text-[#8b6f5e]">Display upcoming events on the main page</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator className="bg-[#8b6f5e]/10" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#1a1412]">Enable Registration Forms</p>
                <p className="text-xs text-[#8b6f5e]">Allow visitors to register for events</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator className="bg-[#8b6f5e]/10" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#1a1412]">Maintenance Mode</p>
                <p className="text-xs text-[#8b6f5e]">Take the site offline for maintenance</p>
              </div>
              <Switch />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="outline">Reset</Button>
        <Button className="bg-gradient-to-r from-[#2d7d7d] to-[#4a9d9d] text-white">
          <Save className="w-4 h-4 mr-2" /> Save Settings
        </Button>
      </div>
    </div>
  );
}
