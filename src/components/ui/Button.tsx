import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth = false, children, ...props }, ref) => {
    return (
      <button
        className={clsx(
          // 基本スタイル
          'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
          
          // サイズ
          {
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-sm': size === 'md',
            'px-8 py-4 text-base': size === 'lg',
          },
          
          // バリアント
          {
            'bg-primary-600 text-white hover:bg-primary-700 shadow-soft hover:shadow-soft-lg focus:ring-primary-500':
              variant === 'primary',
            'bg-white text-navy-800 border border-navy-200 hover:bg-navy-50 shadow-soft focus:ring-navy-500':
              variant === 'secondary',
            'bg-accent-600 text-white hover:bg-accent-700 shadow-soft hover:shadow-soft-lg focus:ring-accent-500':
              variant === 'accent',
            'border border-primary-300 text-primary-700 hover:bg-primary-50 focus:ring-primary-500':
              variant === 'outline',
          },
          
          // 幅
          {
            'w-full': fullWidth,
          },
          
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;