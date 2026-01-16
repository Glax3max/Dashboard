const stats = [
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

const products = [
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

const activity = [
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

const orders = [
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

export default function Home() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">
            <span />
          </div>
          <div className="brand-text">
            <p className="brand-title">Qyuro</p>
            <p className="brand-subtitle">Analytics Suite</p>
          </div>
        </div>
        <nav className="nav">
          <a className="nav-item active" href="#">
            <span className="nav-icon">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 11.5L12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-8.5z" />
              </svg>
            </span>
            Overview
          </a>
          <a className="nav-item" href="#">
            <span className="nav-icon">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 19V5M9 17l4-4 3 3 3-6" />
              </svg>
            </span>
            Insights
          </a>
          <a className="nav-item" href="#">
            <span className="nav-icon">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 7a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
              </svg>
            </span>
            Projects
          </a>
          <a className="nav-item" href="#">
            <span className="nav-icon">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                <path d="M8 2v4M16 2v4M4 10h16" />
              </svg>
            </span>
            Calendar
          </a>
          <a className="nav-item" href="#">
            <span className="nav-icon">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8l-4 4v-4H6a2 2 0 0 1-2-2z" />
              </svg>
            </span>
            Messages
          </a>
          <a className="nav-item" href="#">
            <span className="nav-icon">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
                <path d="M19.4 15a7.8 7.8 0 0 0 .1-1l2-1.2-2-3.5-2.2.7a7.4 7.4 0 0 0-1.7-1l-.4-2.3H8.8l-.4 2.3a7.4 7.4 0 0 0-1.7 1l-2.2-.7-2 3.5L4.6 14a7.8 7.8 0 0 0 .1 1l-2.1 1.3 2 3.4 2.3-.6a7.6 7.6 0 0 0 1.6 1l.5 2.2h4l.5-2.2a7.6 7.6 0 0 0 1.6-1l2.3.6 2-3.4z" />
              </svg>
            </span>
            Settings
          </a>
        </nav>
        <div className="sidebar-card">
          <p className="sidebar-card-title">Premium Insights</p>
          <p className="sidebar-card-text">
            Unlock advanced reports and real-time forecasting.
          </p>
          <button className="primary-button">Upgrade</button>
        </div>
        <div className="sidebar-footer">
          <div className="user-pill">
            <div className="avatar">AC</div>
            <div>
              <p className="user-name">Ariana Cole</p>
              <p className="user-role">Product Manager</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="content">
        <header className="topbar">
          <div>
            <p className="eyebrow">Welcome back</p>
            <h1>Dashboard Overview</h1>
            <p className="subtle">Friday, Jan 16 2026</p>
          </div>
          <div className="topbar-actions">
            <div className="search">
              <span className="search-icon">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14z" />
                  <path d="M20 20l-4-4" />
                </svg>
              </span>
              <input type="text" placeholder="Search reports, teams..." />
            </div>
            <button className="icon-button" aria-label="Notifications">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 9a6 6 0 1 1 12 0c0 5 2 5.5 2 7H4c0-1.5 2-2 2-7z" />
                <path d="M9.5 19a2.5 2.5 0 0 0 5 0" />
              </svg>
            </button>
            <button className="icon-button" aria-label="Settings">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
                <path d="M19.4 15a7.8 7.8 0 0 0 .1-1l2-1.2-2-3.5-2.2.7a7.4 7.4 0 0 0-1.7-1l-.4-2.3H8.8l-.4 2.3a7.4 7.4 0 0 0-1.7 1l-2.2-.7-2 3.5L4.6 14a7.8 7.8 0 0 0 .1 1l-2.1 1.3 2 3.4 2.3-.6a7.6 7.6 0 0 0 1.6 1l.5 2.2h4l.5-2.2a7.6 7.6 0 0 0 1.6-1l2.3.6 2-3.4z" />
              </svg>
            </button>
            <button className="primary-button">Generate Report</button>
          </div>
        </header>

        <section className="stats-grid">
          {stats.map((stat) => (
            <article key={stat.label} className="card stat-card">
              <p className="card-label">{stat.label}</p>
              <div className="stat-value">
                <h2>{stat.value}</h2>
                <span
                  className={`badge ${stat.negative ? "badge-negative" : ""}`}
                >
                  {stat.change}
                </span>
              </div>
              <p className="card-note">{stat.note}</p>
            </article>
          ))}
        </section>

        <section className="grid-two">
          <article className="card chart-card">
            <div className="card-header">
              <div>
                <h3>Sales Overview</h3>
                <p className="card-note">Revenue trend for the last 30 days</p>
              </div>
              <div className="pill-group">
                <span className="pill active">30D</span>
                <span className="pill">90D</span>
                <span className="pill">1Y</span>
              </div>
            </div>
            <div className="chart">
              <div className="chart-grid" />
              <div className="chart-line" />
            </div>
            <div className="chart-footer">
              <div>
                <p className="card-label">Current month</p>
                <p className="chart-value">$24,860</p>
              </div>
              <div>
                <p className="card-label">Forecast</p>
                <p className="chart-value">$28,410</p>
              </div>
              <div>
                <p className="card-label">Avg order</p>
                <p className="chart-value">$326</p>
              </div>
            </div>
          </article>

          <article className="card activity-card">
            <div className="card-header">
              <div>
                <h3>Live Activity</h3>
                <p className="card-note">Latest team updates and actions</p>
              </div>
              <button className="ghost-button">View all</button>
            </div>
            <ul className="activity-list">
              {activity.map((item) => (
                <li key={item.title} className="activity-item">
                  <div className="activity-dot" />
                  <div>
                    <p className="activity-title">{item.title}</p>
                    <p className="activity-time">{item.time}</p>
                  </div>
                  <span className="pill">{item.tag}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="grid-two">
          <article className="card table-card">
            <div className="card-header">
              <div>
                <h3>Recent Orders</h3>
                <p className="card-note">Latest payments and status</p>
              </div>
              <button className="ghost-button">Export</button>
            </div>
            <div className="table">
              <div className="table-row table-header">
                <span>Order ID</span>
                <span>Customer</span>
                <span>Status</span>
                <span>Amount</span>
                <span>Date</span>
              </div>
              {orders.map((order) => (
                <div key={order.id} className="table-row">
                  <span>{order.id}</span>
                  <span>{order.customer}</span>
                  <span className={`status ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                  <span>{order.amount}</span>
                  <span>{order.date}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="card product-card">
            <div className="card-header">
              <div>
                <h3>Top Products</h3>
                <p className="card-note">Best performing this month</p>
              </div>
              <button className="ghost-button">Details</button>
            </div>
            <div className="product-list">
              {products.map((product) => (
                <div key={product.name} className="product-row">
                  <div>
                    <p className="product-name">{product.name}</p>
                    <p className="product-category">{product.category}</p>
                  </div>
                  <div className="product-metrics">
                    <p className="product-revenue">{product.revenue}</p>
                    <span
                      className={`badge ${
                        product.negative ? "badge-negative" : ""
                      }`}
                    >
                      {product.trend}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="product-summary">
              <div>
                <p className="card-label">Average order value</p>
                <h4>$420</h4>
              </div>
              <div>
                <p className="card-label">Return rate</p>
                <h4>1.2%</h4>
              </div>
              <button className="primary-button">View catalog</button>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
