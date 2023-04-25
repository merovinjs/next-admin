import Layout from "@/component/layout";
import Link from "next/link";
import styles from "./styles.module.css";
import React from "react";

const Product = async () => {
  const data = await fetch(`https://next-admin-murex.vercel.app/api/product`, {
    cache: "no-cache",
  });
  const products = await data.json();
  if (data.ok) {
    console.log(products);
  }
  return (
    <Layout>
      <div className={styles.container}>
        <Link className={styles.pro} href={"/product/newProduct"}>
          Yeni ürün ekle
        </Link>

        {products.map((product) => {
          <h2>ürünler</h2>;
          return (
            <div key={product._id} className={styles.details}>
              <div className={styles.details}>
                <h3>{product.name}</h3>
                <button>ürün</button>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Product;
