'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In real implementation, fetch from http://localhost:5000/api/categories
    import('@/lib/catalog').then(module => {
      setCategories(module.categories);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading categories...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-heading text-3xl font-bold text-ink">Categories</h1>
        <Button className="bg-signal-blue text-surface hover:bg-signal-blue-dark">
          <Plus className="mr-2 h-4 w-4" /> Add Category
        </Button>
      </div>

      <div className="bg-surface rounded-xl border border-border overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface-2 border-b border-border">
            <tr>
              <th className="px-6 py-4 font-medium text-ink">Name</th>
              <th className="px-6 py-4 font-medium text-ink">Slug</th>
              <th className="px-6 py-4 font-medium text-ink">Division</th>
              <th className="px-6 py-4 font-medium text-ink text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {categories.map((category: any) => (
              <tr key={category.id} className="hover:bg-surface-2/50 transition-colors">
                <td className="px-6 py-4 font-medium text-ink">{category.name}</td>
                <td className="px-6 py-4 text-text-secondary">{category.slug}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${category.division === 'display' ? 'bg-signal-blue/10 text-signal-blue-dark' : 'bg-copper/10 text-copper-dark'}`}>
                    {category.division}
                  </span>
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <Button variant="ghost" size="icon" className="text-signal-blue hover:text-signal-blue-dark hover:bg-signal-blue/10">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive hover:bg-destructive/10">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
