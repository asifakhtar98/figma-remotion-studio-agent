import type {FC} from 'react';

type RevenueDataPoint = {
  month: string;
  adRevenue: number;
  sponsored: number;
  digitalProducts: number;
};

type RevenueChartProps = {
  data: RevenueDataPoint[];
};

export const RevenueChart: FC<RevenueChartProps> = ({data}) => {
  const maxTotal = Math.max(
    ...data.map((d) => d.adRevenue + d.sponsored + d.digitalProducts)
  );

  return (
    <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700/80 shadow-xl flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-black text-white tracking-tight">
            Revenue Streams Breakdown
          </h3>
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            Monthly distribution across AdSense, Sponsorships & Digital Products
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-bold">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-md bg-indigo-500" />
            <span className="text-slate-300">AdSense</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-md bg-amber-500" />
            <span className="text-slate-300">Sponsored</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-md bg-emerald-500" />
            <span className="text-slate-300">Products</span>
          </div>
        </div>
      </div>

      {/* Chart Bars */}
      <div className="h-64 flex items-end justify-between gap-4 pt-6 px-2 relative border-b border-slate-700/60">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
          <div className="border-b border-slate-400 w-full" />
          <div className="border-b border-slate-400 w-full" />
          <div className="border-b border-slate-400 w-full" />
          <div className="border-b border-slate-400 w-full" />
        </div>

        {data.map((item) => {
          const total = item.adRevenue + item.sponsored + item.digitalProducts;
          const adPct = (item.adRevenue / maxTotal) * 100;
          const spPct = (item.sponsored / maxTotal) * 100;
          const prPct = (item.digitalProducts / maxTotal) * 100;

          return (
            <div
              key={item.month}
              className="flex-1 flex flex-col items-center gap-3 h-full justify-end group z-10"
            >
              <div className="w-full max-w-[48px] flex flex-col items-stretch rounded-xl overflow-hidden shadow-lg transition-all transform group-hover:scale-105">
                <div
                  style={{height: `${prPct}%`}}
                  className="bg-emerald-500 hover:bg-emerald-400 transition-colors"
                  title={`Products: $${item.digitalProducts}`}
                />
                <div
                  style={{height: `${spPct}%`}}
                  className="bg-amber-500 hover:bg-amber-400 transition-colors"
                  title={`Sponsored: $${item.sponsored}`}
                />
                <div
                  style={{height: `${adPct}%`}}
                  className="bg-indigo-500 hover:bg-indigo-400 transition-colors"
                  title={`AdSense: $${item.adRevenue}`}
                />
              </div>
              <span className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors">
                {item.month}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
        <span>Total Period Yield: <strong className="text-emerald-400">$34,890.00</strong></span>
        <span>Average Monthly: <strong className="text-white">$5,815.00</strong></span>
      </div>
    </div>
  );
};
