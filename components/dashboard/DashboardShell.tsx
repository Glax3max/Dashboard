import ActivityCard from "./ActivityCard";
import ChartCard from "./ChartCard";
import OrdersTable from "./OrdersTable";
import ProductsCard from "./ProductsCard";
import Sidebar from "./Sidebar";
import StatsGrid from "./StatsGrid";
import Topbar from "./Topbar";

export default function DashboardShell() {
  return (
    <div className="bg-slate-100 text-slate-900">
      <div className="mx-auto grid min-h-screen max-w-[1400px] gap-6 p-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <Sidebar />
        <main className="flex flex-col gap-6">
          <Topbar />
          <StatsGrid />
          <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <ChartCard />
            <ActivityCard />
          </section>
          <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <OrdersTable />
            <ProductsCard />
          </section>
        </main>
      </div>
    </div>
  );
}
