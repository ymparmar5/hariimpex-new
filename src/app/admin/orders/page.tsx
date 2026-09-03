'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, CheckCircle } from 'lucide-react';
import api from '@/lib/api';

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Uses the interceptor for JWT automatically
        const { data } = await api.get('/orders');
        setOrders(data);
      } catch (error) {
        console.error('Failed to fetch orders', error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <div>Loading orders...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-heading text-3xl font-bold text-ink">Orders & Quotes</h1>
      </div>

      <div className="bg-surface rounded-xl border border-border overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface-2 border-b border-border">
            <tr>
              <th className="px-6 py-4 font-medium text-ink">ID</th>
              <th className="px-6 py-4 font-medium text-ink">Type</th>
              <th className="px-6 py-4 font-medium text-ink">Customer</th>
              <th className="px-6 py-4 font-medium text-ink">Amount</th>
              <th className="px-6 py-4 font-medium text-ink">Status</th>
              <th className="px-6 py-4 font-medium text-ink">Date</th>
              <th className="px-6 py-4 font-medium text-ink text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {orders.map((order: any) => (
              <tr key={order.id} className="hover:bg-surface-2/50 transition-colors">
                <td className="px-6 py-4 font-medium text-ink">{order._id.substring(0, 8)}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${order.type === 'quote' ? 'bg-copper/10 text-copper-dark' : 'bg-signal-blue/10 text-signal-blue-dark'}`}>
                    {order.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-text-secondary">{order.customerInfo?.firstName || 'Guest'}</td>
                <td className="px-6 py-4 text-text-secondary">
                  {order.totalAmount ? `₹${order.totalAmount.toLocaleString()}` : '-'}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize 
                    ${order.status === 'completed' ? 'bg-success/10 text-success-dark' : 
                      order.status === 'processing' ? 'bg-yellow-500/10 text-yellow-700' : 
                      'bg-surface-2 text-text-secondary'}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-text-secondary">{new Date(order.createdAt).toLocaleDateString()}</td>
                <td className="px-6 py-4 text-right space-x-2">
                  <Button variant="ghost" size="icon" className="text-signal-blue hover:text-signal-blue-dark hover:bg-signal-blue/10">
                    <Eye className="h-4 w-4" />
                  </Button>
                  {order.status !== 'completed' && (
                    <Button variant="ghost" size="icon" className="text-success hover:text-success-dark hover:bg-success/10">
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
