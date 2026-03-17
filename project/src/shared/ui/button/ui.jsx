import clsx from 'clsx';
import './index.css';


export const Button = ({
  type,
  children,
  classNameContainer,
  size,
}) => {
  const combinedClassName = clsx(
    'button',
    size && `button-${size}`,
    classNameContainer
  );

  return (
    <button type={type} className={combinedClassName}>
      {children}
    </button>
  );
};