import { cn } from '@/lib/utils';

export const StatsCard = ({ title, value, subtitle, icon: Icon, trend, className }) => {
  return (
    <div className={cn('bg-white rounded-xl border border-[#8b6f5e]/10 p-5 shadow-sm hover:shadow-md transition-shadow', className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-[#8b6f5e] font-medium">{title}</p>
          <p className="text-2xl font-bold text-[#1a1412] mt-1">{value}</p>
          {subtitle && <p className="text-xs text-[#8b6f5e] mt-1">{subtitle}</p>}
        </div>
        {Icon && (
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2d7d7d]/10 to-[#8b4a3c]/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-[#2d7d7d]" />
          </div>
        )}
      </div>
      {trend && (
        <div className="mt-3 flex items-center gap-1">
          <span className={cn('text-xs font-medium', trend > 0 ? 'text-green-600' : 'text-red-500')}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
          <span className="text-xs text-[#8b6f5e]">from last month</span>
        </div>
      )}
    </div>
  );
};
