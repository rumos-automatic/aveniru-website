import { InputHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, fullWidth = false, ...props }, ref) => {
    return (
      <div className={clsx('space-y-2', { 'w-full': fullWidth })}>
        {label && (
          <label className="block text-sm font-medium text-navy-700">
            {label}
          </label>
        )}
        <input
          className={clsx(
            // 基本スタイル
            'block w-full px-4 py-3 text-navy-900 border border-navy-200 rounded-xl shadow-sm',
            'placeholder:text-navy-400',
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
        />
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;