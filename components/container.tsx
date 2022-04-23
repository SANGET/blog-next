interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Container({
  children,
  className = "",
  ...other
}: ContainerProps) {
  return (
    <div
      {...other}
      className={` max-w-2xl container mx-auto px-5 ${className}`}
    >
      {children}
    </div>
  );
}
