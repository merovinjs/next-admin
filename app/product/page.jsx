import { AiOutlineEdit } from "react-icons/ai";
import Link from "next/link";
import styles from "./styles.module.css";
import React from "react";

const Product = async () => {
  const data = await fetch(`https://next-admin-murex.vercel.app/api/product`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const products = await data.json();

  return (
    <>
      <Link className={styles.pro} href={"/product/newProduct"}>
        Yeni ürün ekle
      </Link>

      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <td className={styles.tdhead}>yeni Ürün</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>{" "}
              <td>
                <Link
                  className={styles.edit}
                  href={`/product/editProduct/${product._id}`}
                >
                  <AiOutlineEdit />
                  Düzenle
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Product;
//
