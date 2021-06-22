import { cloneElement } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ActiveLink({ children, activeClasName, ...rest }) {
  const { asPath } = useRouter();
  const className = asPath === rest.href ? activeClasName : "";

  return <Link {...rest}>{cloneElement(children, { className })}</Link>;
}
