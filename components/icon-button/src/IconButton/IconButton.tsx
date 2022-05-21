import { classNames } from '@infotition/classnames';
import { FunctionComponent, useRef } from 'react';

import styles from './IconButton.module.scss';
import { IconButtonProps } from './IconButton.types';

export const IconButton: FunctionComponent<IconButtonProps> = ({
  icon,
  disabled = false,
  className = '',
  size = 'medium',
  onClick,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    const classList = buttonRef.current?.classList;
    classList?.remove(styles.animate);
    classList?.add(styles.animate);
    setTimeout(() => classList?.remove(styles.animate), 400);
    onClick && onClick();
  };

  const buttonClasses = classNames(
    styles['icon-button'],
    disabled && styles.disabled,
    styles[size],
    className,
  );

  const buttonProps = {
    className: buttonClasses,
    onClick: handleClick,
    disabled,
  };

  return (
    <button ref={buttonRef} {...buttonProps}>
      {icon}
    </button>
  );
};
