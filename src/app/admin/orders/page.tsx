'use client';
import { Button } from '@/components/ui/button';
import { Eye, CheckCircle } from 'lucide-react';

export default function AdminOrdersPage() {
  // Mock data for orders since we don't have a DB hooked up to the frontend yet
  const orders = [
    { id: 'ORD-1234', type: 'order', customer: 'Acme Corp', amount: 45000, status: 'pending', date: '2026-09-03' },
    { id: 'QT-9876', type: 'quote', customer: 'TechVision Ltd', amount: null, status: 'processing', date: '2026-09-02' },
    { id: 'ORD-1230', type: 'order', customer: 'John Doe', amount: 1250, status: 'completed', date: '2026-09-01' },
  ];

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
                <td className="px-6 py-4 font-medium text-ink">{order.id}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${order.type === 'quote' ? 'bg-copper/10 text-copper-dark' : 'bg-signal-blue/10 text-signal-blue-dark'}`}>
                    {order.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-text-secondary">{order.customer}</td>
                <td className="px-6 py-4 text-text-secondary">
                  {order.amount ? `₹${order.amount.toLocaleString()}` : '-'}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize 
                    ${order.status === 'completed' ? 'bg-success/10 text-success-dark' : 
                      order.status === 'processing' ? 'bg-yellow-500/10 text-yellow-700' : 
                      'bg-surface-2 text-text-secondary'}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-text-secondary">{order.date}</td>
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
