"use client";
import Layout from "@/component/layout";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

const NewProduct = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();
  const handleSubmit = async () => {
    const not = { name, desc, price };

    const response = await fetch(
      `https://next-admin-murex.vercel.app/api/product`,
      {
        method: "POST",
        body: JSON.stringify(not),
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );
    if (response.ok) {
      router.push("/product");
      router.refresh("/product");
    }
    if (!response.ok) {
      console.log("not add product");
    }
  };

  return (
    <Layout>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Yeni ürün</h1>
        <label className={styles.label} htmlFor="ürün">
          Ürün Adı
        </label>
        <input
          id="ürün"
          className={styles.input}
          type="text"
          placeholder="ürün adı"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className={styles.label} htmlFor="acıklama">
          Ürün Açıklama
        </label>
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          id="acıklama"
          placeholder="açıklama"
        ></textarea>
        <label className={styles.label} htmlFor="fiyat">
          Ürün Fiyatı
        </label>
        <input
          className={styles.input}
          type="text"
          id="fiyat"
          placeholder="ürün fiyatı"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          Kaydet
        </button>
      </form>
    </Layout>
  );
};

export default NewProduct;
