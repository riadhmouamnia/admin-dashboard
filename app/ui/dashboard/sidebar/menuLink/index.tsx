"use client";
import Link from "next/link";
import React from "react";
import styles from "@ui/dashboard/sidebar/menuLink/menuLink.module.scss";
import { usePathname } from "next/navigation";

type Props = {
  title: string;
  path: string;
  icon: React.ReactNode;
};
const MenuLink = ({ icon, title, path }: Props) => {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={`${styles.container} ${pathname === path && styles.active}`}
    >
      {icon}
      {title}
    </Link>
  );
};

export default MenuLink;
