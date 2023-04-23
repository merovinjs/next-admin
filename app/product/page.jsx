import Layout from "@/component/layout";
import Link from "next/link";
import styles from "./styles.module.css";
import React from "react";

const Product = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Link className={styles.pro} href={"/product/newProduct"}>
          Yeni ürün ekle
        </Link>
      </div>
    </Layout>
  );
};

export default Product;
