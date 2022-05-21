import { ReactElement } from 'react';

export type IconButtonProps = {
  icon: ReactElement;
  disabled?: boolean;
  className?: string;
  size: 'small' | 'medium' | 'large';
};
