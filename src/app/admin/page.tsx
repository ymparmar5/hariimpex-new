export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-ink mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-surface p-6 rounded-xl border border-border shadow-sm">
          <h3 className="text-sm font-medium text-text-muted mb-2">Total Products</h3>
          <p className="text-3xl font-bold text-ink">12</p>
        </div>
        <div className="bg-surface p-6 rounded-xl border border-border shadow-sm">
          <h3 className="text-sm font-medium text-text-muted mb-2">Active Categories</h3>
          <p className="text-3xl font-bold text-ink">4</p>
        </div>
        <div className="bg-surface p-6 rounded-xl border border-border shadow-sm">
          <h3 className="text-sm font-medium text-text-muted mb-2">New Orders</h3>
          <p className="text-3xl font-bold text-ink">5</p>
        </div>
        <div className="bg-surface p-6 rounded-xl border border-border shadow-sm">
          <h3 className="text-sm font-medium text-text-muted mb-2">Pending Quotes</h3>
          <p className="text-3xl font-bold text-ink">2</p>
        </div>
      </div>
    </div>
  );
}
