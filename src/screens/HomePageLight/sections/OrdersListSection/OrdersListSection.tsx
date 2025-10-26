// React import not required with the current JSX runtime; keep file free of unused imports.

const orders = [
  {
    id: "#CMP801",
    user: { name: "Natali Craig", avatar: "../female15.png" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: { label: "In Progress", color: "text-blue-600" },
  },
  {
    id: "#CMP802",
    user: { name: "Kate Morrison", avatar: "../female09.png" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: { label: "Complete", color: "text-emerald-600" },
  },
  {
    id: "#CMP803",
    user: { name: "Drew Cano", avatar: "../male08.png" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: { label: "Pending", color: "text-sky-500" },
  },
  {
    id: "#CMP804",
    user: { name: "Orlando Diggs", avatar: "../male06.png" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: { label: "Approved", color: "text-amber-600" },
  },
  {
    id: "#CMP805",
    user: { name: "Andi Lane", avatar: "../female08.png" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: { label: "Rejected", color: "text-neutral-400" },
  },
];

export const OrdersListSection = (): JSX.Element => {
  return (
    <div className="flex-1 w-full px-7 pb-7">
      <div className="bg-white dark:bg-black/10 rounded-2xl border border-[#1c1c1c1a] dark:border-white/10 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1c1c1c1a] dark:border-white/10">
          <h2 className="font-14-semibold text-[#1c1c1c] dark:text-[#e5e7eb]">Order List</h2>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-2 py-1 bg-[#1c1c1c0d] dark:bg-[#ffffff12] rounded-lg">
              <img src="/search.svg" alt="Search" className="w-4 h-4 opacity-50" />
              <span className="text-[#1c1c1c66] dark:text-[#9ca3af] font-14-regular">Search</span>
              <span className="text-[#1c1c1c33] dark:text-[#6b7280] font-14-regular">.</span>
            </div>
          </div>
        </div>

        <div className="w-full overflow-auto">
          <table className="min-w-full text-left">
            <thead className="text-[#1c1c1c66] dark:text-[#9ca3af] font-12-regular">
              <tr className="border-b border-[#1c1c1c1a] dark:border-white/10">
                <th className="px-6 py-3 w-10">
                  <input type="checkbox" className="accent-black/40" />
                </th>
                <th className="px-6 py-3 whitespace-nowrap">Order ID</th>
                <th className="px-6 py-3 whitespace-nowrap">User</th>
                <th className="px-6 py-3 whitespace-nowrap">Project</th>
                <th className="px-6 py-3 whitespace-nowrap">Address</th>
                <th className="px-6 py-3 whitespace-nowrap">Date</th>
                <th className="px-6 py-3 whitespace-nowrap">Status</th>
                <th className="px-6 py-3 w-8"/>
              </tr>
            </thead>
            <tbody className="text-[#1c1c1c] dark:text-[#e5e7eb] font-6-regular">
              {orders.map((o, i) => (
                <tr key={o.id} className={`border-b border-[#1c1c1c0d] dark:border-white/5 ${i % 2 === 1 ? 'bg-[#f7f9fb] dark:bg-black/10' : 'bg-white dark:bg-black/10'}`}>
                  <td className="px-6 py-3">
                    <input type="checkbox" className="accent-black/40" />
                  </td>
                  <td className="px-6 py-3">{o.id}</td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-2">
                      <img src={o.user.avatar} alt={o.user.name} className="w-6 h-6 rounded-full" />
                      <span>{o.user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3">{o.project}</td>
                  <td className="px-6 py-3">{o.address}</td>
                  <td className="px-6 py-3">{o.date}</td>
                  <td className="px-6 py-3">
                    <span className={`${o.status.color}`}>{o.status.label}</span>
                  </td>
                  <td className="px-6 py-3 text-right">
                    <button className="text-[#1c1c1c66] dark:text-[#9ca3af] hover:text-[#1c1c1c] dark:hover:text-[#e5e7eb]">···</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-end gap-2 px-6 py-4">
          {/* Previous page button */}
          <button aria-label="Previous page" className="w-7 h-7 inline-flex items-center justify-center rounded-lg border border-[#1c1c1c1a] dark:border-[#ffffff1a] text-[#1c1c1c66] dark:text-[#9ca3af]">
            <span className="text-sm leading-none">‹</span>
          </button>

          <button className="w-7 h-7 inline-flex items-center justify-center rounded-lg border border-[#1c1c1c1a] dark:border-[#ffffff1a] text-[#1c1c1c66] dark:text-[#9ca3af]">1</button>
          <button className="w-7 h-7 inline-flex items-center justify-center rounded-lg text-[#1c1c1c66] dark:text-[#9ca3af]">2</button>
          <button className="w-7 h-7 inline-flex items-center justify-center rounded-lg text-[#1c1c1c66] dark:text-[#9ca3af]">3</button>
          <button className="w-7 h-7 inline-flex items-center justify-center rounded-lg text-[#1c1c1c66] dark:text-[#9ca3af]">4</button>
          <button className="w-7 h-7 inline-flex items-center justify-center rounded-lg text-[#1c1c1c66] dark:text-[#9ca3af]">5</button>

          {/* Next page button */}
          <button aria-label="Next page" className="w-7 h-7 inline-flex items-center justify-center rounded-lg border border-[#1c1c1c1a] dark:border-[#ffffff1a] text-[#1c1c1c66] dark:text-[#9ca3af]">
            <span className="text-sm leading-none">›</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrdersListSection;
