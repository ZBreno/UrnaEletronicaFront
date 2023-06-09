import Footer from "@/components/footer";
import Header from "@/components/header";
import styles from "@/styles/Report.module.css";
import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";
import api from "./api/api";

export default function Vote() {
  const [data, setData] = useState([]);
  const getDados = async () => {
    try {
      const setDados = await api.get("api/");
      setData(setDados.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDados();
  }, []);

  return (
    <>
      <Head>
        <title>Urna eletrônica</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.do}>
          {data.map((candidate) => (
            <div className={styles.report} key={candidate.id}>
              <p>Candidato: {candidate.name}</p>
              <p>Votos: {candidate.quantity_votes}</p>
              <p>Partido: {candidate.political_party}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
