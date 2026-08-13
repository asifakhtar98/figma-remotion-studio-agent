import type {FC} from 'react';
import {TrendingUp, DollarSign} from 'lucide-react';

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
    <div className="p-7 rounded-[28px] bg-white border border-slate-200/90 shadow-xs flex flex-col gap-6 relative overflow-hidden">
      <div className="flex items-center justify-between z-10">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 font-extrabold text-[11px] uppercase tracking-wider">
            <TrendingUp size={14} />
            <span>PERFORMANCE ANALYTICS</span>
          </div>
          <h3 className="text-xl font-black text-slate-900 tracking-tight mt-0.5">
            Revenue Streams Breakdown
          </h3>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Monthly distribution across AdSense, Brand Sponsorships & Digital Store Goods
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-bold bg-slate-50 p-2.5 px-4 rounded-2xl border border-slate-200/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 shadow-xs" />
            <span className="text-slate-700">AdSense</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-xs" />
            <span className="text-slate-700">Sponsored</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-xs" />
            <span className="text-slate-700">Products</span>
          </div>
        </div>
      </div>

      {/* Chart Bars */}
      <div className="h-64 flex items-end justify-between gap-5 pt-8 px-4 relative border-b border-slate-200/80 z-10">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40 px-4">
          <div className="border-b border-dashed border-slate-200 w-full" />
          <div className="border-b border-dashed border-slate-200 w-full" />
          <div className="border-b border-dashed border-slate-200 w-full" />
          <div className="border-b border-dashed border-slate-200 w-full" />
        </div>

        {data.map((item) => {
          const adPct = (item.adRevenue / maxTotal) * 100;
          const spPct = (item.sponsored / maxTotal) * 100;
          const prPct = (item.digitalProducts / maxTotal) * 100;
          const monthTotal = item.adRevenue + item.sponsored + item.digitalProducts;

          return (
            <div
              key={item.month}
              className="flex-1 flex flex-col items-center gap-3 h-full justify-end group z-10"
            >
              <div className="w-full max-w-[44px] flex flex-col items-stretch rounded-2xl overflow-hidden shadow-xs transform border border-slate-200/60 bg-slate-100">
                <div
                  style={{height: `${prPct}%`}}
                  className="bg-emerald-500"
                  title={`Products: $${item.digitalProducts}`}
                />
                <div
                  style={{height: `${spPct}%`}}
                  className="bg-amber-500"
                  title={`Sponsored: $${item.sponsored}`}
                />
                <div
                  style={{height: `${adPct}%`}}
                  className="bg-indigo-600"
                  title={`AdSense: $${item.adRevenue}`}
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-extrabold text-slate-500">
                  ${(monthTotal / 1000).toFixed(1)}k
                </span>
                <span className="text-xs font-bold text-slate-600">
                  {item.month}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between text-xs font-semibold text-slate-500 z-10 pt-1">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          Total Period Yield: <strong className="text-emerald-600 text-sm font-black">$34,890.00</strong>
        </span>
        <span>Average Monthly: <strong className="text-slate-900 text-sm font-black">$5,815.00</strong></span>
      </div>
    </div>
  );
};

