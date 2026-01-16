import { recentOrders, type Order } from "@/lib/dashboard-data";

const statusClasses: Record<Order["status"], string> = {
  Paid: "bg-emerald-100 text-emerald-600",
  Processing: "bg-amber-100 text-amber-600",
  Refunded: "bg-rose-100 text-rose-600"
};

export default function OrdersTable() {
  return (
    <article className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-semibold text-slate-900">
            Recent Orders
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Latest payments and status
          </p>
        </div>
        <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500 transition hover:border-slate-300 hover:text-slate-700">
          Export
        </button>
      </div>

      <div className="flex flex-col gap-1">
        <div className="hidden grid-cols-5 gap-4 border-b border-slate-100 pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 sm:grid">
          <span>Order ID</span>
          <span>Customer</span>
          <span>Status</span>
          <span>Amount</span>
          <span>Date</span>
        </div>
        {recentOrders.map((order) => (
          <div
            key={order.id}
            className="grid grid-cols-2 gap-4 border-b border-slate-100 py-3 text-sm text-slate-700 last:border-b-0 sm:grid-cols-5 sm:items-center"
          >
            <span className="font-semibold text-slate-900">{order.id}</span>
            <span>{order.customer}</span>
            <span
              className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${statusClasses[order.status]}`}
            >
              {order.status}
            </span>
            <span>{order.amount}</span>
            <span className="text-slate-500">{order.date}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
