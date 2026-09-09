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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Search, Grid3X3, List, Pencil, Trash2, Eye, Upload } from 'lucide-react';

const mockImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', title: 'Traditional Shipbuilding', category: 'Maritime', description: 'Ancient shipbuilding techniques passed down through generations', tags: ['shipbuilding', 'traditional'], date: '2025-03-10' },
  { id: 2, src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', title: 'Coastal Navigation', category: 'Maritime', description: 'Traditional navigation methods used by coastal communities', tags: ['navigation', 'coastal'], date: '2025-03-08' },
  { id: 3, src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', title: 'Chitrakathi Paintings', category: 'Artistic', description: 'Traditional narrative art form from Maharashtra', tags: ['chitrakathi', 'painting'], date: '2025-03-05' },
  { id: 4, src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80', title: 'Folk Art Traditions', category: 'Artistic', description: 'Preserving indigenous artistic traditions', tags: ['folk art', 'traditional'], date: '2025-02-28' },
  { id: 5, src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', title: 'Field Research', category: 'Research', description: 'Conducting ethnographic research in coastal communities', tags: ['fieldwork', 'documentation'], date: '2025-02-20' },
  { id: 6, src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80', title: 'Archival Studies', category: 'Research', description: 'Studying historical maritime documents and records', tags: ['archives', 'documents'], date: '2025-02-15' },
];

const categories = ['Maritime', 'Artistic', 'Research', 'Cultural', 'Indigenous', 'Knowledge', 'Traditional'];

export default function GalleryAdmin() {
  const [images, setImages] = useState(mockImages);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingImage, setEditingImage] = useState(null);

  const filtered = images.filter((img) => {
    const matchesSearch = img.title.toLowerCase().includes(searchTerm.toLowerCase()) || img.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || img.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAdd = () => {
    setEditingImage(null);
    setDialogOpen(true);
  };

  const handleEdit = (image) => {
    setEditingImage(image);
    setDialogOpen(true);
  };

  const handleDelete = (id) => {
    setImages(images.filter((img) => img.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#1a1412]">Gallery Images</h2>
          <p className="text-sm text-[#8b6f5e]">{filtered.length} images total</p>
        </div>
        <Button onClick={handleAdd} className="bg-gradient-to-r from-[#2d7d7d] to-[#4a9d9d] hover:from-[#4a9d9d] hover:to-[#2d7d7d] text-white">
          <Plus className="w-4 h-4 mr-2" /> Add Image
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8b6f5e]" />
          <Input placeholder="Search images..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-9 bg-white border-[#8b6f5e]/20" />
        </div>
        <Select value={filterCategory} onValueChange={setFilterCategory}>
          <SelectTrigger className="w-44 bg-white border-[#8b6f5e]/20">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
          </SelectContent>
        </Select>
        <div className="flex border border-[#8b6f5e]/20 rounded-lg overflow-hidden">
          <button onClick={() => setViewMode('grid')} className={`p-2 ${viewMode === 'grid' ? 'bg-[#2d7d7d] text-white' : 'bg-white text-[#8b6f5e] hover:bg-[#faf8f3]'} transition-colors`}>
            <Grid3X3 className="w-4 h-4" />
          </button>
          <button onClick={() => setViewMode('list')} className={`p-2 ${viewMode === 'list' ? 'bg-[#2d7d7d] text-white' : 'bg-white text-[#8b6f5e] hover:bg-[#faf8f3]'} transition-colors`}>
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((img) => (
            <div key={img.id} className="bg-white rounded-xl border border-[#8b6f5e]/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="aspect-video relative overflow-hidden">
                <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  <button onClick={() => handleEdit(img)} className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-[#1a1412] hover:bg-white">
                    <Pencil className="w-3.5 h-3.5" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-[#1a1412] hover:bg-white">
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => handleDelete(img.id)} className="w-8 h-8 rounded-full bg-red-500/90 flex items-center justify-center text-white hover:bg-red-500">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <div className="p-3">
                <h4 className="text-sm font-semibold text-[#1a1412] truncate">{img.title}</h4>
                <div className="flex items-center gap-2 mt-1.5">
                  <Badge variant="outline" className="text-xs border-[#2d7d7d]/30 text-[#2d7d7d]">{img.category}</Badge>
                  <span className="text-xs text-[#8b6f5e]">{img.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-[#8b6f5e]/10 shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#faf8f3]/50">
                <TableHead className="w-16">Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Tags</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((img) => (
                <TableRow key={img.id}>
                  <TableCell><img src={img.src} alt={img.title} className="w-12 h-12 rounded-lg object-cover" /></TableCell>
                  <TableCell className="font-medium text-[#1a1412]">{img.title}</TableCell>
                  <TableCell><Badge variant="outline" className="text-xs border-[#2d7d7d]/30 text-[#2d7d7d]">{img.category}</Badge></TableCell>
                  <TableCell>
                    <div className="flex gap-1 flex-wrap">{img.tags.map((t) => <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>)}</div>
                  </TableCell>
                  <TableCell className="text-sm text-[#8b6f5e]">{img.date}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleEdit(img)}><Pencil className="w-3.5 h-3.5" /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600" onClick={() => handleDelete(img.id)}><Trash2 className="w-3.5 h-3.5" /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-lg bg-white">
          <DialogHeader>
            <DialogTitle className="text-[#1a1412]">{editingImage ? 'Edit Image' : 'Add New Image'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="border-2 border-dashed border-[#8b6f5e]/30 rounded-xl p-8 text-center hover:border-[#2d7d7d]/50 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 mx-auto text-[#8b6f5e] mb-2" />
              <p className="text-sm text-[#8b6f5e]">Click to upload or drag and drop</p>
              <p className="text-xs text-[#8b6f5e]/60 mt-1">PNG, JPG, WEBP up to 10MB</p>
            </div>
            <div className="space-y-2">
              <Label>Title</Label>
              <Input defaultValue={editingImage?.title || ''} placeholder="Image title" className="border-[#8b6f5e]/20" />
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <Select defaultValue={editingImage?.category || ''}>
                <SelectTrigger className="border-[#8b6f5e]/20"><SelectValue placeholder="Select category" /></SelectTrigger>
                <SelectContent>{categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea defaultValue={editingImage?.description || ''} placeholder="Brief description..." className="border-[#8b6f5e]/20 resize-none" rows={3} />
            </div>
            <div className="space-y-2">
              <Label>Tags (comma separated)</Label>
              <Input defaultValue={editingImage?.tags?.join(', ') || ''} placeholder="tag1, tag2, tag3" className="border-[#8b6f5e]/20" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={() => setDialogOpen(false)} className="bg-gradient-to-r from-[#2d7d7d] to-[#4a9d9d] text-white">
              {editingImage ? 'Save Changes' : 'Upload Image'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
