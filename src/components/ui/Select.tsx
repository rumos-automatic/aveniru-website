import { SelectHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  options: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, fullWidth = false, options, ...props }, ref) => {
    return (
      <div className={clsx('space-y-2', { 'w-full': fullWidth })}>
        {label && (
          <label className="block text-sm font-medium text-navy-700">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            className={clsx(
              // 基本スタイル
              'block w-full px-4 py-3 pr-10 text-navy-900 border border-navy-200 rounded-xl shadow-sm appearance-none',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
              'disabled:bg-navy-50 disabled:text-navy-500 disabled:cursor-not-allowed',
              
              // エラー状態
              {
                'border-red-300 focus:ring-red-500': error,
              },
              
              className
            )}
            ref={ref}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ChevronDown className="h-5 w-5 text-navy-400" />
          </div>
        </div>
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;