'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Plus, Search, Pencil, Trash2, Upload, Mail, Building } from 'lucide-react';

const mockTeam = [
  { id: 1, name: 'Dr. Chhaya Goswami', role: 'Principal Investigator (PI)', bio: 'Maritime historian and researcher with expertise in Indian Ocean trade networks, seafaring cultures, and archival studies.', profile: 'Centre for Indian Ocean and Transoceanic Studies, Somaiya Vidhyavihar University', image: '/cg.jpeg', email: 'chhaya@example.com' },
  { id: 2, name: 'Dr. Monalisa Behera', role: 'Co-Principal Investigator (Artistic Traditions)', bio: 'Art historian focusing on visual storytelling, Chitrakathi paintings, and performative folk cultures of the Deccan.', profile: 'Somaiya School of Civilisation Studies, Somaiya Vidhyavihar University', image: null, email: 'monalisa@example.com' },
  { id: 3, name: 'Dr. Pallavi Nalawde-Jambhale', role: 'Co-Principal Investigator', bio: 'Scholar in Indian cultural studies, contributing to the ethnographic and pedagogical framework of the Centre.', profile: 'KJSIDS, Somaiya Vidyavihar University', image: '/pnj.jpeg', email: 'pallavi@example.com' },
  { id: 4, name: 'Dr. Bhagyashree Bavare', role: 'Co-Principal Investigator', bio: 'Researcher in folk traditions and oral narratives, specializing in fieldwork and community engagement.', profile: 'KJSIDS, Somaiya Vidyavihar University', image: null, email: 'bhagyashree@example.com' },
];

export default function TeamAdmin() {
  const [team, setTeam] = useState(mockTeam);
  const [searchTerm, setSearchTerm] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);

  const filtered = team.filter((m) => m.name.toLowerCase().includes(searchTerm.toLowerCase()) || m.role.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleAdd = () => { setEditingMember(null); setDialogOpen(true); };
  const handleEdit = (member) => { setEditingMember(member); setDialogOpen(true); };
  const handleDelete = (id) => { setTeam(team.filter((m) => m.id !== id)); };

  const getInitials = (name) => name.split(' ').filter((_, i, a) => i === 0 || i === a.length - 1).map((n) => n[0]).join('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#1a1412]">Team Members</h2>
          <p className="text-sm text-[#8b6f5e]">{team.length} members</p>
        </div>
        <Button onClick={handleAdd} className="bg-gradient-to-r from-[#2d7d7d] to-[#4a9d9d] hover:from-[#4a9d9d] hover:to-[#2d7d7d] text-white">
          <Plus className="w-4 h-4 mr-2" /> Add Member
        </Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8b6f5e]" />
        <Input placeholder="Search team..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-9 bg-white border-[#8b6f5e]/20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((member) => (
          <div key={member.id} className="bg-white rounded-xl border border-[#8b6f5e]/10 p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-gradient-to-br from-[#2d7d7d] to-[#8b4a3c] flex items-center justify-center">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-white text-lg font-bold">{getInitials(member.name)}</span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-[#1a1412]">{member.name}</h3>
                    <p className="text-sm text-[#8b4a3c] font-medium">{member.role}</p>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleEdit(member)}><Pencil className="w-3.5 h-3.5" /></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600" onClick={() => handleDelete(member.id)}><Trash2 className="w-3.5 h-3.5" /></Button>
                  </div>
                </div>
                <p className="text-sm text-[#8b6f5e] mt-2 line-clamp-2">{member.bio}</p>
                <div className="flex items-center gap-4 mt-3 text-xs text-[#8b6f5e]">
                  <span className="flex items-center gap-1"><Building className="w-3 h-3" /> {member.profile}</span>
                </div>
                {member.email && (
                  <div className="flex items-center gap-1 mt-1.5 text-xs text-[#8b6f5e]">
                    <Mail className="w-3 h-3" /> {member.email}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-lg bg-white">
          <DialogHeader>
            <DialogTitle className="text-[#1a1412]">{editingMember ? 'Edit Team Member' : 'Add Team Member'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="flex justify-center">
              <div className="border-2 border-dashed border-[#8b6f5e]/30 rounded-full w-24 h-24 flex items-center justify-center hover:border-[#2d7d7d]/50 transition-colors cursor-pointer">
                <Upload className="w-6 h-6 text-[#8b6f5e]" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input defaultValue={editingMember?.name || ''} placeholder="Dr. Full Name" className="border-[#8b6f5e]/20" />
            </div>
            <div className="space-y-2">
              <Label>Role / Designation</Label>
              <Input defaultValue={editingMember?.role || ''} placeholder="e.g. Principal Investigator" className="border-[#8b6f5e]/20" />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" defaultValue={editingMember?.email || ''} placeholder="email@university.edu" className="border-[#8b6f5e]/20" />
            </div>
            <div className="space-y-2">
              <Label>Affiliation / Department</Label>
              <Input defaultValue={editingMember?.profile || ''} placeholder="University / Department" className="border-[#8b6f5e]/20" />
            </div>
            <div className="space-y-2">
              <Label>Bio</Label>
              <Textarea defaultValue={editingMember?.bio || ''} placeholder="Brief bio..." className="border-[#8b6f5e]/20 resize-none" rows={3} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={() => setDialogOpen(false)} className="bg-gradient-to-r from-[#2d7d7d] to-[#4a9d9d] text-white">
              {editingMember ? 'Save Changes' : 'Add Member'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
