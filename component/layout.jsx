"use client";
import Link from "next/link";
import React from "react";
import { BiStore } from "react-icons/bi";
import {
  MdOutlineReorder,
  MdOutlineSpaceDashboard,
  MdProductionQuantityLimits,
  MdSettings,
} from "react-icons/md";

import styles from "./styles.module.css";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className={styles.body}>
      <aside className={styles.aside}>
        <Link className={styles.base} href={"/"}>
          <BiStore size={25} />
          <h1 className={styles.text}>Alışveriş Admin</h1>
        </Link>
        <nav className={styles.nav}>
          <Link
            className={
              pathname.includes("/panel")
                ? styles.linkActive
                : styles.linkInActive
            }
            href={"/panel"}
          >
            <MdOutlineSpaceDashboard size={25} />
            <h1 className={styles.text}>Panel</h1>
          </Link>
          <Link
            className={
              pathname.includes("/product")
                ? styles.linkActive
                : styles.linkInActive
            }
            href={"/product"}
          >
            <MdProductionQuantityLimits size={25} />
            <h1 className={styles.text}>Ürünler</h1>
          </Link>
          <Link
            className={
              pathname.includes("/order")
                ? styles.linkActive
                : styles.linkInActive
            }
            href={"/order"}
          >
            <MdOutlineReorder size={25} />
            <h1 className={styles.text}>Siparişler</h1>
          </Link>
          <Link
            className={
              pathname.includes("/settings")
                ? styles.linkActive
                : styles.linkInActive
            }
            href={"/settings"}
          >
            <MdSettings size={25} />
            <h1 className={styles.text}>Ayarlar</h1>
          </Link>
        </nav>
      </aside>
      <div className={styles.dashboard}>{children}</div>
    </div>
  );
};

export default Layout;
