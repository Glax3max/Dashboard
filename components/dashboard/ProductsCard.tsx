import { productSummary, topProducts } from "@/lib/dashboard-data";

export default function ProductsCard() {
  return (
    <article className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-semibold text-slate-900">
            Top Products
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Best performing this month
          </p>
        </div>
        <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500 transition hover:border-slate-300 hover:text-slate-700">
          Details
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {topProducts.map((product) => (
          <div
            key={product.name}
            className="flex items-center justify-between gap-4 rounded-xl border border-transparent px-3 py-3 transition hover:border-slate-200 hover:bg-slate-50"
          >
            <div>
              <p className="text-sm font-semibold text-slate-900">
                {product.name}
              </p>
              <p className="text-xs text-slate-500">{product.category}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-slate-900">
                {product.revenue}
              </p>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                  product.negative
                    ? "bg-rose-100 text-rose-600"
                    : "bg-emerald-100 text-emerald-600"
                }`}
              >
                {product.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 flex flex-col gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Average order value
          </p>
          <p className="mt-2 text-lg font-semibold text-slate-900">
            {productSummary.averageOrderValue}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Return rate
          </p>
          <p className="mt-2 text-lg font-semibold text-slate-900">
            {productSummary.returnRate}
          </p>
        </div>
        <button className="rounded-xl bg-qyuro-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40">
          View catalog
        </button>
      </div>
    </article>
  );
}
