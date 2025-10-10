import clsx from "clsx";
import '../UI/button.scss';

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx(
        "button-custom px-6 py-3 m-auto",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
