import clsx from 'clsx';
import './index.css';

const DEFAULT_ELEMENT = 'p';

export const Text = ({
  children,
  classNameContainer,
  size,
  as: Component = DEFAULT_ELEMENT
}) => {
  const combinedClassName = clsx(
    'text',
    size && `text-${size}`,
    classNameContainer
  );

  return (
    <Component className={combinedClassName}>
      {children}
    </Component>
  );
};