"use client"

import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import "@styles/card_diary.css"

export default function page() {
  const [judul, setJudul] = useState([]);
  const [isiDiary, setIsiDiary] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const endpointAPI = "https://6555c49684b36e3a431e4a0f.mockapi.io/new-diary";

  async function getDiary() {
    try {
      const res = await axios.get(endpointAPI);
      const data = res.data;

      const judul = data.map((item) => item.judul);
      setJudul(judul);

      const isi_diary = data.map((item) => item.isi);
      setIsiDiary(isi_diary);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getDiary();
  }, []);

  return (
    <>
      <div className="">
      {isLoading ? (
        "API is loading"
      ) : judul.length > 0 ? (
        <ul>
          {judul.map((item, idx) => (
            <Link href={`/diary/${item}/${isiDiary[idx]}`}>
            <li key={idx}>
              <div className="card-container">
                <h1>{judul[idx]}</h1>
                <p className="content-diary">{isiDiary[idx]}</p>
              </div>
            </li>
            </Link>
          ))}
        </ul>
      ) : (
        "No data available"
      )}
    </div>
    </>
  )
}
