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
import { Plus, Search, Pencil, Trash2, Eye, FileUp, BookOpen, GraduationCap, BookMarked, ExternalLink } from 'lucide-react';

const mockDocuments = [
  { id: 1, title: 'Connecting the Unconnected: Circularities of East African Ivory and Indian Capital', author: 'Dr. Chhaya Goswami', type: 'Research Paper', publication: 'Georgetown University Press', year: '2025', tags: ['Maritime Traditions', 'Indian Ocean', 'Trade', 'Economic Circulation'], fileUrl: '#', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
  { id: 2, title: 'Tales of Loss, Valour, Betrayal and Glories: Chitrakathi Paintings', author: 'Dr. Monalisa Behera', type: 'Conference Paper', publication: '32nd Session, Indian Art History Congress, National Museum', year: '2025', tags: ['Artistic Traditions', 'Chitrakathi', 'Folk Art'], fileUrl: '#', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
  { id: 3, title: 'Shipbuilding and Seafaring Traditions', author: 'Dr. Chhaya Goswami', type: 'Book (Monograph)', publication: 'Primus Publications', year: '2025', tags: ['Maritime History', 'Indian Seafaring', 'Shipbuilding'], fileUrl: '#', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80' },
];

const typeIcons = { 'Research Paper': GraduationCap, 'Conference Paper': BookOpen, 'Book (Monograph)': BookMarked };
const typeColors = { 'Research Paper': 'bg-blue-100 text-blue-700 border-blue-200', 'Conference Paper': 'bg-purple-100 text-purple-700 border-purple-200', 'Book (Monograph)': 'bg-amber-100 text-amber-700 border-amber-200' };

export default function DocumentsAdmin() {
  const [documents, setDocuments] = useState(mockDocuments);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingDoc, setEditingDoc] = useState(null);

  const filtered = documents.filter((d) => {
    const matchesSearch = d.title.toLowerCase().includes(searchTerm.toLowerCase()) || d.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || d.type === filterType;
    return matchesSearch && matchesType;
  });

  const handleAdd = () => { setEditingDoc(null); setDialogOpen(true); };
  const handleEdit = (doc) => { setEditingDoc(doc); setDialogOpen(true); };
  const handleDelete = (id) => { setDocuments(documents.filter((d) => d.id !== id)); };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#1a1412]">Documents & Publications</h2>
          <p className="text-sm text-[#8b6f5e]">{filtered.length} documents total</p>
        </div>
        <Button onClick={handleAdd} className="bg-gradient-to-r from-[#2d7d7d] to-[#8b4a3c] hover:from-[#8b4a3c] hover:to-[#2d7d7d] text-white">
          <Plus className="w-4 h-4 mr-2" /> Add Document
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8b6f5e]" />
          <Input placeholder="Search documents..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-9 bg-white border-[#8b6f5e]/20" />
        </div>
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-52 bg-white border-[#8b6f5e]/20"><SelectValue placeholder="Document Type" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="Research Paper">Research Papers</SelectItem>
            <SelectItem value="Conference Paper">Conference Papers</SelectItem>
            <SelectItem value="Book (Monograph)">Books</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {['Research Paper', 'Conference Paper', 'Book (Monograph)'].map((type) => {
          const Icon = typeIcons[type];
          const count = documents.filter((d) => d.type === type).length;
          return (
            <div key={type} className="bg-white rounded-xl border border-[#8b6f5e]/10 p-4 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2d7d7d]/10 to-[#8b4a3c]/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#2d7d7d]" />
              </div>
              <div>
                <p className="text-sm text-[#8b6f5e]">{type === 'Book (Monograph)' ? 'Books' : type + 's'}</p>
                <p className="text-xl font-bold text-[#1a1412]">{count}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-xl border border-[#8b6f5e]/10 shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#faf8f3]/50">
              <TableHead className="w-16">Cover</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Publication</TableHead>
              <TableHead>Year</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell><img src={doc.image} alt={doc.title} className="w-12 h-12 rounded-lg object-cover" /></TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium text-[#1a1412]">{doc.title}</p>
                    <div className="flex gap-1 flex-wrap mt-1">{doc.tags.slice(0, 2).map((t) => <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>)}{doc.tags.length > 2 && <Badge variant="secondary" className="text-xs">+{doc.tags.length - 2}</Badge>}</div>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-[#8b6f5e]">{doc.author}</TableCell>
                <TableCell><Badge className={`text-xs ${typeColors[doc.type]}`}>{doc.type}</Badge></TableCell>
                <TableCell className="text-sm text-[#8b6f5e] max-w-[200px] truncate">{doc.publication}</TableCell>
                <TableCell className="text-sm text-[#8b6f5e]">{doc.year}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8"><ExternalLink className="w-3.5 h-3.5" /></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleEdit(doc)}><Pencil className="w-3.5 h-3.5" /></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600" onClick={() => handleDelete(doc.id)}><Trash2 className="w-3.5 h-3.5" /></Button>
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
            <DialogTitle className="text-[#1a1412]">{editingDoc ? 'Edit Document' : 'Add New Document'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label>Title</Label>
              <Input defaultValue={editingDoc?.title || ''} placeholder="Document title" className="border-[#8b6f5e]/20" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Author</Label>
                <Input defaultValue={editingDoc?.author || ''} placeholder="Author name" className="border-[#8b6f5e]/20" />
              </div>
              <div className="space-y-2">
                <Label>Year</Label>
                <Input defaultValue={editingDoc?.year || ''} placeholder="e.g. 2025" className="border-[#8b6f5e]/20" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Type</Label>
              <Select defaultValue={editingDoc?.type || ''}>
                <SelectTrigger className="border-[#8b6f5e]/20"><SelectValue placeholder="Select type" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Research Paper">Research Paper</SelectItem>
                  <SelectItem value="Conference Paper">Conference Paper</SelectItem>
                  <SelectItem value="Book (Monograph)">Book (Monograph)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Publication</Label>
              <Input defaultValue={editingDoc?.publication || ''} placeholder="Publisher or conference name" className="border-[#8b6f5e]/20" />
            </div>
            <div className="space-y-2">
              <Label>Tags (comma separated)</Label>
              <Input defaultValue={editingDoc?.tags?.join(', ') || ''} placeholder="tag1, tag2, tag3" className="border-[#8b6f5e]/20" />
            </div>
            <div className="space-y-2">
              <Label>Cover Image</Label>
              <div className="border-2 border-dashed border-[#8b6f5e]/30 rounded-xl p-6 text-center hover:border-[#2d7d7d]/50 transition-colors cursor-pointer">
                <FileUp className="w-6 h-6 mx-auto text-[#8b6f5e] mb-1.5" />
                <p className="text-sm text-[#8b6f5e]">Click to upload cover image</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Document File / URL</Label>
              <Input defaultValue={editingDoc?.fileUrl || ''} placeholder="PDF link or upload URL" className="border-[#8b6f5e]/20" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={() => setDialogOpen(false)} className="bg-gradient-to-r from-[#2d7d7d] to-[#8b4a3c] text-white">
              {editingDoc ? 'Save Changes' : 'Add Document'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
