'use client'

import Image from "next/image"
import Photo from "../../public/Frame 117.png"
import Button from "./components/Button"
import { useState } from "react"

export default function Home() {
  const [ name, setName ] = useState("Muhamamd Fadhel H");
  const [ inputValue, setInputValue ] = useState("");

  const handleClick = () => {
    setName(inputValue)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <main>
      <div className="container-luar">
        <div className="container-dalam">
          <div className="content">
            <div className="photo">
              <Image 
                src={Photo}
                alt="Photo"
                width={120}
                style={{borderRadius: "100%"}}
              />
            </div>
            <div className="text">
              <div className="name">
                <h2>{ name }</h2>
              </div>
              <div className="subtext">
                <div>D121211009</div>
                <div>Train hard, fight easy</div>
              </div>
            </div>
          </div>
          <div className="input-text">
            <input
              text="text"
              placeholder="Tuliskan namamu"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleClick();
                }
              }}
            />
          </div>
          <div className="button">
            <Button onClick={handleClick}/>
          </div>
        </div>
      </div>
    </main>
  )
}
