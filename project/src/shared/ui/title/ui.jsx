import clsx from 'clsx';
import './index.css';

const DEFAULT_ELEMENT = 'h2';

export const Title = ({
  children,
  classNameContainer,
  size,
  as: Component = DEFAULT_ELEMENT
}) => {
  const combinedClassName = clsx(
    'title',
    size && `title-${size}`,
    classNameContainer
  );

  return (
    <Component className={combinedClassName}>
      {children}
    </Component>
  );
};