import { classNames } from '@infotition/classnames';
import { FunctionComponent, useRef } from 'react';

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
    classList?.remove('animate');
    classList?.add('animate');
    setTimeout(() => classList?.remove('animate'), 400);
    onClick && onClick();
  };

  const buttonClasses = classNames(
    'icon-button',
    disabled && 'disabled',
    size,
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
