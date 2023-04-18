import Link from "next/link";
import React from "react";
import { BiStore } from "react-icons/bi";
import styles from "./styles.module.css";
const Nav = () => {
  return (
    <aside>
      <Link className={styles.link} href={"/"}>
        <BiStore size={25} />
        <h1 className={styles.text}>sss</h1>
      </Link>
    </aside>
  );
};

export default Nav;
