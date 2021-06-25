import Link from 'next/link';

export default function Activelink({ children, ...props }) {
  return <Link {...props}>{children}</Link>;
}
