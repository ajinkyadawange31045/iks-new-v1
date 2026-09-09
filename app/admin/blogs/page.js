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
import { Plus, Search, Pencil, Trash2, Eye, FileText, Upload } from 'lucide-react';

const mockBlogs = [
  { id: 1, title: 'Connecting the Unconnected: East African Ivory and Indian Capital', author: 'Dr. Chhaya Goswami', status: 'published', date: '2025-05-15', tags: ['Maritime Traditions', 'Indian Ocean', 'Trade'], excerpt: 'Exploring the rich mathematical heritage of India from the Vedic period...', image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&w=400' },
  { id: 2, title: 'The Visual and Performative in Chitrakathi Painting', author: 'Dr. Monalisa Behera', status: 'published', date: '2025-05-10', tags: ['Artistic Traditions', 'Folk Art'], excerpt: 'How ancient Ayurvedic practices are being integrated with contemporary approaches...', image: 'https://images.pexels.com/photos/5473182/pexels-photo-5473182.jpeg?auto=compress&w=400' },
  { id: 3, title: 'Shipbuilding and Seafaring Traditions of India', author: 'Dr. Chhaya Goswami', status: 'draft', date: '2025-05-05', tags: ['Maritime History', 'Shipbuilding'], excerpt: 'Understanding the unique linguistic features of Sanskrit and its contribution...', image: 'https://images.pexels.com/photos/5865571/pexels-photo-5865571.jpeg?auto=compress&w=400' },
  { id: 4, title: 'Indigenous Knowledge Systems in Modern Education', author: 'Dr. Pallavi Nalawde-Jambhale', status: 'draft', date: '2025-04-20', tags: ['Education', 'Knowledge Systems'], excerpt: 'Examining how indigenous knowledge can be incorporated into modern curriculum...', image: null },
  { id: 5, title: 'Preserving Oral Traditions of Coastal Communities', author: 'Dr. Bhagyashree Bavare', status: 'published', date: '2025-04-10', tags: ['Oral Traditions', 'Cultural Heritage'], excerpt: 'Documentation efforts to preserve rapidly disappearing oral traditions...', image: null },
];

const statusStyles = { published: 'bg-green-100 text-green-700 border-green-200', draft: 'bg-amber-100 text-amber-700 border-amber-200' };

export default function BlogsAdmin() {
  const [blogs, setBlogs] = useState(mockBlogs);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);

  const filtered = blogs.filter((b) => {
    const matchesSearch = b.title.toLowerCase().includes(searchTerm.toLowerCase()) || b.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || b.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleAdd = () => { setEditingBlog(null); setDialogOpen(true); };
  const handleEdit = (blog) => { setEditingBlog(blog); setDialogOpen(true); };
  const handleDelete = (id) => { setBlogs(blogs.filter((b) => b.id !== id)); };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#1a1412]">Blog Posts</h2>
          <p className="text-sm text-[#8b6f5e]">{filtered.length} posts total</p>
        </div>
        <Button onClick={handleAdd} className="bg-gradient-to-r from-[#5c3a2a] to-[#8b6f5e] hover:from-[#8b6f5e] hover:to-[#5c3a2a] text-white">
          <Plus className="w-4 h-4 mr-2" /> New Blog Post
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8b6f5e]" />
          <Input placeholder="Search blogs..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-9 bg-white border-[#8b6f5e]/20" />
        </div>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-40 bg-white border-[#8b6f5e]/20"><SelectValue placeholder="Status" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-[#8b6f5e]/10 p-4 shadow-sm">
          <p className="text-sm text-[#8b6f5e]">Total Posts</p>
          <p className="text-2xl font-bold text-[#1a1412]">{blogs.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-[#8b6f5e]/10 p-4 shadow-sm">
          <p className="text-sm text-[#8b6f5e]">Published</p>
          <p className="text-2xl font-bold text-green-600">{blogs.filter((b) => b.status === 'published').length}</p>
        </div>
        <div className="bg-white rounded-xl border border-[#8b6f5e]/10 p-4 shadow-sm">
          <p className="text-sm text-[#8b6f5e]">Drafts</p>
          <p className="text-2xl font-bold text-amber-600">{blogs.filter((b) => b.status === 'draft').length}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-[#8b6f5e]/10 shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#faf8f3]/50">
              <TableHead className="w-16">Cover</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell>
                  {blog.image ? (
                    <img src={blog.image} alt={blog.title} className="w-12 h-12 rounded-lg object-cover" />
                  ) : (
                    <div className="w-12 h-12 rounded-lg bg-[#faf8f3] flex items-center justify-center"><FileText className="w-5 h-5 text-[#8b6f5e]" /></div>
                  )}
                </TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium text-[#1a1412]">{blog.title}</p>
                    <p className="text-xs text-[#8b6f5e] mt-0.5 line-clamp-1">{blog.excerpt}</p>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-[#8b6f5e]">{blog.author}</TableCell>
                <TableCell>
                  <div className="flex gap-1 flex-wrap">{blog.tags.slice(0, 2).map((t) => <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>)}{blog.tags.length > 2 && <Badge variant="secondary" className="text-xs">+{blog.tags.length - 2}</Badge>}</div>
                </TableCell>
                <TableCell><Badge className={`text-xs capitalize ${statusStyles[blog.status]}`}>{blog.status}</Badge></TableCell>
                <TableCell className="text-sm text-[#8b6f5e]">{blog.date}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8"><Eye className="w-3.5 h-3.5" /></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleEdit(blog)}><Pencil className="w-3.5 h-3.5" /></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600" onClick={() => handleDelete(blog.id)}><Trash2 className="w-3.5 h-3.5" /></Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-2xl bg-white max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-[#1a1412]">{editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label>Title</Label>
              <Input defaultValue={editingBlog?.title || ''} placeholder="Blog post title" className="border-[#8b6f5e]/20" />
            </div>
            <div className="space-y-2">
              <Label>Cover Image</Label>
              <div className="border-2 border-dashed border-[#8b6f5e]/30 rounded-xl p-6 text-center hover:border-[#2d7d7d]/50 transition-colors cursor-pointer">
                <Upload className="w-6 h-6 mx-auto text-[#8b6f5e] mb-1.5" />
                <p className="text-sm text-[#8b6f5e]">Click to upload cover image</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Author</Label>
                <Input defaultValue={editingBlog?.author || ''} placeholder="Author name" className="border-[#8b6f5e]/20" />
              </div>
              <div className="space-y-2">
                <Label>Status</Label>
                <Select defaultValue={editingBlog?.status || 'draft'}>
                  <SelectTrigger className="border-[#8b6f5e]/20"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Tags (comma separated)</Label>
              <Input defaultValue={editingBlog?.tags?.join(', ') || ''} placeholder="tag1, tag2, tag3" className="border-[#8b6f5e]/20" />
            </div>
            <div className="space-y-2">
              <Label>Excerpt</Label>
              <Textarea defaultValue={editingBlog?.excerpt || ''} placeholder="Short summary for previews..." className="border-[#8b6f5e]/20 resize-none" rows={2} />
            </div>
            <div className="space-y-2">
              <Label>Content</Label>
              <Textarea defaultValue="" placeholder="Write your blog post content here..." className="border-[#8b6f5e]/20 resize-none min-h-[200px]" rows={10} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button variant="outline" onClick={() => setDialogOpen(false)} className="border-[#5c3a2a]/30 text-[#5c3a2a]">Save as Draft</Button>
            <Button onClick={() => setDialogOpen(false)} className="bg-gradient-to-r from-[#5c3a2a] to-[#8b6f5e] text-white">
              {editingBlog ? 'Update Post' : 'Publish Post'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
