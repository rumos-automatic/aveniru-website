import { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const Card = ({ className, children, padding = 'md', hover = false, ...props }: CardProps) => {
  return (
    <div
      className={clsx(
        // 基本スタイル
        'bg-white rounded-2xl shadow-soft border border-navy-100',
        
        // パディング
        {
          'p-4': padding === 'sm',
          'p-6': padding === 'md',
          'p-8': padding === 'lg',
        },
        
        // ホバー効果
        {
          'transition-all duration-200 hover:shadow-soft-lg hover:-translate-y-1': hover,
        },
        
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;