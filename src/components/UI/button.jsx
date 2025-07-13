import clsx from "clsx";

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx(
        "bg-primary text-white hover:bg-primary/80 rounded-base px-6 py-3",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
