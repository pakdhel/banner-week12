import React from 'react'
import Card_diary from '@components/Card_diary'

async function getDiary() {
  const res = await fetch('https://6555c49684b36e3a431e4a0f.mockapi.io/new-diary')

  return res.json()
}


export default async function DiaryLists() {
  const diary = await getDiary()
  console.log(diary)
  return (
    <>
      <Card_diary />
      {diary.map((diary) => (
        <div key={diary.id} className='diary-card'>
          <h3>{diary.judul}</h3>
          <p>{diary.isi.slice(0, 200)}</p>
        </div>
      ))}
      {
        diary.length === 0 && (
          <p>There are no diary</p>
        )
      }
    </>
  )
}
