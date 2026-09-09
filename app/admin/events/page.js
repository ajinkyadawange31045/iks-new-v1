'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Search, Pencil, Trash2, CalendarDays, MapPin, Users, Eye } from 'lucide-react';

const mockEvents = [
  { id: 1, title: 'Vedic Mathematics for Modern Applications', description: 'A hands-on workshop exploring how Vedic mathematical techniques can be applied to solve contemporary problems efficiently.', date: 'June 15-16, 2025', location: 'New Delhi', mode: 'In-person', capacity: '30', status: 'upcoming', registration: 'Open' },
  { id: 2, title: 'Introduction to Sanskrit Manuscripts', description: 'Learn the basics of reading, interpreting, and preserving ancient Sanskrit manuscripts in this interactive workshop.', date: 'July 10, 2025', location: 'Online', mode: 'Virtual', capacity: 'Unlimited', status: 'upcoming', registration: 'Open' },
  { id: 3, title: 'Traditional Indian Astronomy', description: 'Discover the principles of Indian astronomical traditions, including celestial observations and calculations.', date: 'August 5-7, 2025', location: 'Varanasi', mode: 'In-person', capacity: '25', status: 'upcoming', registration: 'Coming Soon' },
  { id: 4, title: 'Maritime Heritage Conference 2024', description: 'Annual conference bringing together scholars studying Indian maritime traditions and seafaring cultures.', date: 'December 10-12, 2024', location: 'Mumbai', mode: 'In-person', capacity: '100', status: 'past', registration: 'Closed' },
  { id: 5, title: 'Chitrakathi Art Workshop', description: 'Interactive workshop on traditional Chitrakathi painting techniques from Maharashtra.', date: 'November 20, 2024', location: 'Pune', mode: 'In-person', capacity: '20', status: 'past', registration: 'Closed' },
];

const statusColors = { upcoming: 'bg-green-100 text-green-700 border-green-200', past: 'bg-gray-100 text-gray-600 border-gray-200', cancelled: 'bg-red-100 text-red-700 border-red-200' };
const modeColors = { 'In-person': 'bg-[#2d7d7d]/10 text-[#2d7d7d] border-[#2d7d7d]/20', 'Virtual': 'bg-[#8b4a3c]/10 text-[#8b4a3c] border-[#8b4a3c]/20' };

export default function EventsAdmin() {
  const [events, setEvents] = useState(mockEvents);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);

  const filtered = events.filter((e) => {
    const matchesSearch = e.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || e.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleAdd = () => { setEditingEvent(null); setDialogOpen(true); };
  const handleEdit = (event) => { setEditingEvent(event); setDialogOpen(true); };
  const handleDelete = (id) => { setEvents(events.filter((e) => e.id !== id)); };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#1a1412]">Events & Workshops</h2>
          <p className="text-sm text-[#8b6f5e]">{filtered.length} events total</p>
        </div>
        <Button onClick={handleAdd} className="bg-gradient-to-r from-[#8b4a3c] to-[#a65a4a] hover:from-[#a65a4a] hover:to-[#8b4a3c] text-white">
          <Plus className="w-4 h-4 mr-2" /> Create Event
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8b6f5e]" />
          <Input placeholder="Search events..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-9 bg-white border-[#8b6f5e]/20" />
        </div>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-40 bg-white border-[#8b6f5e]/20"><SelectValue placeholder="Status" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="upcoming">Upcoming</SelectItem>
            <SelectItem value="past">Past</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-[#8b6f5e]/10 p-4 shadow-sm">
          <p className="text-sm text-[#8b6f5e]">Upcoming</p>
          <p className="text-2xl font-bold text-[#2d7d7d]">{events.filter((e) => e.status === 'upcoming').length}</p>
        </div>
        <div className="bg-white rounded-xl border border-[#8b6f5e]/10 p-4 shadow-sm">
          <p className="text-sm text-[#8b6f5e]">Past Events</p>
          <p className="text-2xl font-bold text-[#8b6f5e]">{events.filter((e) => e.status === 'past').length}</p>
        </div>
        <div className="bg-white rounded-xl border border-[#8b6f5e]/10 p-4 shadow-sm">
          <p className="text-sm text-[#8b6f5e]">Open Registration</p>
          <p className="text-2xl font-bold text-[#8b4a3c]">{events.filter((e) => e.registration === 'Open').length}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-[#8b6f5e]/10 shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#faf8f3]/50">
              <TableHead>Event</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Mode</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Registration</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((event) => (
              <TableRow key={event.id}>
                <TableCell>
                  <div>
                    <p className="font-medium text-[#1a1412]">{event.title}</p>
                    <p className="text-xs text-[#8b6f5e] mt-0.5 line-clamp-1">{event.description}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5 text-sm text-[#8b6f5e]">
                    <CalendarDays className="w-3.5 h-3.5" /> {event.date}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5 text-sm text-[#8b6f5e]">
                    <MapPin className="w-3.5 h-3.5" /> {event.location}
                  </div>
                </TableCell>
                <TableCell><Badge className={`text-xs ${modeColors[event.mode]}`}>{event.mode}</Badge></TableCell>
                <TableCell><Badge className={`text-xs capitalize ${statusColors[event.status]}`}>{event.status}</Badge></TableCell>
                <TableCell>
                  <Badge variant={event.registration === 'Open' ? 'default' : 'secondary'} className="text-xs">
                    {event.registration}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8"><Eye className="w-3.5 h-3.5" /></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleEdit(event)}><Pencil className="w-3.5 h-3.5" /></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600" onClick={() => handleDelete(event.id)}><Trash2 className="w-3.5 h-3.5" /></Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-lg bg-white">
          <DialogHeader>
            <DialogTitle className="text-[#1a1412]">{editingEvent ? 'Edit Event' : 'Create New Event'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label>Event Title</Label>
              <Input defaultValue={editingEvent?.title || ''} placeholder="Event name" className="border-[#8b6f5e]/20" />
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea defaultValue={editingEvent?.description || ''} placeholder="Event description..." className="border-[#8b6f5e]/20 resize-none" rows={3} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Date</Label>
                <Input type="text" defaultValue={editingEvent?.date || ''} placeholder="e.g. June 15-16, 2025" className="border-[#8b6f5e]/20" />
              </div>
              <div className="space-y-2">
                <Label>Location</Label>
                <Input defaultValue={editingEvent?.location || ''} placeholder="City or Online" className="border-[#8b6f5e]/20" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Mode</Label>
                <Select defaultValue={editingEvent?.mode || ''}>
                  <SelectTrigger className="border-[#8b6f5e]/20"><SelectValue placeholder="Select mode" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="In-person">In-person</SelectItem>
                    <SelectItem value="Virtual">Virtual</SelectItem>
                    <SelectItem value="Hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Capacity</Label>
                <Input defaultValue={editingEvent?.capacity || ''} placeholder="e.g. 30" className="border-[#8b6f5e]/20" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Status</Label>
                <Select defaultValue={editingEvent?.status || 'upcoming'}>
                  <SelectTrigger className="border-[#8b6f5e]/20"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="past">Past</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Registration</Label>
                <Select defaultValue={editingEvent?.registration || 'Open'}>
                  <SelectTrigger className="border-[#8b6f5e]/20"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Open">Open</SelectItem>
                    <SelectItem value="Coming Soon">Coming Soon</SelectItem>
                    <SelectItem value="Closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={() => setDialogOpen(false)} className="bg-gradient-to-r from-[#8b4a3c] to-[#a65a4a] text-white">
              {editingEvent ? 'Save Changes' : 'Create Event'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
