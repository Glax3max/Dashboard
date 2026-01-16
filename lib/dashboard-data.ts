export type Stat = {
  label: string;
  value: string;
  change: string;
  note: string;
  negative?: boolean;
};

export type Product = {
  name: string;
  category: string;
  revenue: string;
  trend: string;
  negative?: boolean;
};

export type ActivityItem = {
  title: string;
  time: string;
  tag: string;
};

export type Order = {
  id: string;
  customer: string;
  status: "Paid" | "Processing" | "Refunded";
  amount: string;
  date: string;
};

export const dashboardStats: Stat[] = [
  {
    label: "Total Revenue",
    value: "$78,560",
    change: "+12.4%",
    note: "vs last month"
  },
  {
    label: "New Subscribers",
    value: "2,482",
    change: "+8.1%",
    note: "weekly growth"
  },
  {
    label: "Active Users",
    value: "14,720",
    change: "+4.9%",
    note: "in the last 24h"
  },
  {
    label: "Conversion Rate",
    value: "3.42%",
    change: "-0.6%",
    note: "since last week",
    negative: true
  }
];

export const topProducts: Product[] = [
  {
    name: "Qyuro UI Kit",
    category: "Design Assets",
    revenue: "$12,480",
    trend: "+18%"
  },
  {
    name: "Pulse CRM",
    category: "Productivity",
    revenue: "$9,240",
    trend: "+9%"
  },
  {
    name: "Orbit Analytics",
    category: "SaaS",
    revenue: "$8,860",
    trend: "+12%"
  },
  {
    name: "Atlas Finance",
    category: "Fintech",
    revenue: "$6,740",
    trend: "-3%",
    negative: true
  }
];

export const activityFeed: ActivityItem[] = [
  {
    title: "New enterprise plan activated",
    time: "2h ago",
    tag: "Subscription"
  },
  {
    title: "Marketing campaign launched",
    time: "5h ago",
    tag: "Campaign"
  },
  {
    title: "Qyuro UI Kit updated",
    time: "Yesterday",
    tag: "Release"
  },
  {
    title: "Customer feedback review",
    time: "2d ago",
    tag: "Review"
  }
];

export const recentOrders: Order[] = [
  {
    id: "#QY-3021",
    customer: "Arianna Chen",
    status: "Paid",
    amount: "$1,240",
    date: "Jan 14, 2026"
  },
  {
    id: "#QY-3018",
    customer: "Liam Parker",
    status: "Processing",
    amount: "$980",
    date: "Jan 13, 2026"
  },
  {
    id: "#QY-3012",
    customer: "Nia Williams",
    status: "Paid",
    amount: "$2,140",
    date: "Jan 12, 2026"
  },
  {
    id: "#QY-3007",
    customer: "Mohamed Idris",
    status: "Refunded",
    amount: "$620",
    date: "Jan 11, 2026"
  }
];

export const productSummary = {
  averageOrderValue: "$420",
  returnRate: "1.2%"
};

export const topbarCopy = {
  eyebrow: "Welcome back",
  title: "Dashboard Overview",
  date: "Friday, Jan 16 2026"
};
