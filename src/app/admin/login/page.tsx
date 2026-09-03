'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Loader2 } from 'lucide-react';
import Cookies from 'js-cookie';
import api from '@/lib/api';
import { toast } from 'sonner';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post('/users/login', { email, password });
      const data = response.data;

      if (!data.isAdmin) {
        toast.error('Access denied. Admin privileges required.');
        setLoading(false);
        return;
      }

      // Store the JWT token in cookies (accessible to Next.js middleware)
      Cookies.set('adminToken', data.token, { expires: 30 }); // 30 days
      
      toast.success('Login successful!');
      router.push('/admin');
      
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Invalid email or password');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-2 p-4">
      <div className="max-w-md w-full bg-surface rounded-2xl p-8 shadow-xl border border-border">
        <div className="text-center mb-8">
          <div className="mx-auto bg-signal-blue/10 h-16 w-16 rounded-full flex items-center justify-center mb-4">
            <Lock className="h-8 w-8 text-signal-blue" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-ink">Hari Admin</h1>
          <p className="text-text-secondary mt-2">Sign in to access the management dashboard.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email" 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@hariimpex.in" 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <Button type="submit" disabled={loading} className="w-full bg-signal-blue text-surface hover:bg-signal-blue-dark h-12 text-lg">
            {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : 'Sign In'}
          </Button>
        </form>
      </div>
    </div>
  );
}
