import styles from "@/styles/Vote.module.css";
import Head from "next/head";
import Link from "next/link";
import Footer from "@/components/footer";
import Header from "@/components/header";
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

  const vote = async (id) => {
    try{
      const getDados = await api.get(`api/${id}/`)
      const votos = getDados.data.quantity_votes
      const setDados = await api.patch(`api/${id}/`,{quantity_votes: votos + 1})
    }catch(error){
      console.log(error)
    }
  }


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
              <p>Número: {candidate.number}</p>
              <p>Partido: {candidate.political_party}</p>
              <button onClick={() => vote(candidate.id)} className={styles.button}><p>Votar</p></button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
