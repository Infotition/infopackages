import { FunctionComponent, ReactElement } from 'react';

type ShowProps = {
  when: unknown;
  children: ReactElement[] | ReactElement;
  fallback?: ReactElement;
};

export const Show: FunctionComponent<ShowProps> = ({
  children,
  when,
  fallback,
}) => {
  if (!when) return fallback ?? null;
  if (!Array.isArray(children)) return children;
  return <>{children.map((child) => child)}</>;
};
