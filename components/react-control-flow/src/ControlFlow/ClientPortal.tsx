import {
  ReactElement,
  useRef,
  useEffect,
  FunctionComponent,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

type ClientPortalProps = {
  selector: string;
  children: ReactElement;
};

/**
 * Mounts the children to the portal with the provided selector.
 *
 * @param selector  The html selector for the portal component.
 *
 * @example <ClientOnlyPortal selector="modal">Hello World</ClientOnlyPortal>
 */
export const ClientPortal: FunctionComponent<ClientPortalProps> = ({
  children,
  selector,
}) => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<Element>();

  useEffect(() => {
    const element = document.querySelector(selector);
    if (element) ref.current = element;
    setMounted(true);
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};
