import { cloneElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Activelink({
  children,
  sholdMathExactHref = false,
  ...props
}) {
  const { asPath } = useRouter();
  let isActive = false;

  if (sholdMathExactHref && (asPath === props.href || asPath === props.as)) {
    isActive = true;
  }

  if (
    !sholdMathExactHref &&
    (asPath.startsWith(String(props.href)) ||
      asPath.startsWith(String(props.as)))
  ) {
    isActive = true;
  }

  return (
    <Link {...props}>
      {cloneElement(children, {
        color: isActive ? '#00ff5f' : 'gray.900',
      })}
    </Link>
  );
}
