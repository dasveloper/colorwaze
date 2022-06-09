import clsx from 'clsx';

export default function Button({
  children,
  size = 'sm',
  variant = 'primary',
  type = 'button',
  href,
  className,
  ...props

}) {
  const base = 'text-center rounded-lg focus:ring-4 focus:outline-none';
  const sizes = {
    xs: 'px-4 py-2 text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-5 py-3 text-base',
    xl: 'px-6 py-3.5 text-base',
  };
  const variants = {
    primary: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300',
    dark: 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 ',
    light: 'text-gray-900 bg-white hover:bg-gray-100  border border-gray-300 focus:ring-gray-200',
  };

  const isLink = typeof href !== 'undefined';
  const Component = isLink ? 'a' : 'button';

  return (
    <Component
      type={isLink ? undefined : type}
      href={isLink ? href : undefined}
      className={clsx(base, sizes[size], variants[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
