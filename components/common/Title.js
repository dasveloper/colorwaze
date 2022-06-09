import clsx from 'clsx';

export default function Title({
  children,
  order = 1,
  component,
  className,
  ...props
}) {
  const base = 'leading-tight text-gray-900';
  const orders = {
    1: 'font-extrabold text-3xl md:text-4xl lg:text-5xl',
    2: 'font-bold text-2xl md:text-3xl lg:text-4xl',
    3: 'font-medium text-xl md:text-2xl lg:text-3xl',
    4: 'font-medium text-lg md:text-xl lg:text-2xl',
  };

  const Component = component || `h${order}`;
  return (
    <Component
      className={clsx(base, orders[order], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
