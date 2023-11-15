import Image from "next/image"
import Photo from "../../public/photo.png"
import Button from "./components/Button"

export default function Home() {
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
              />
            </div>
            <div className="text">
              <div className="name">
                <h2>Muhammad Fadhel H</h2>
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
            />
          </div>
          <div className="button">
            <Button />
          </div>
        </div>
      </div>
    </main>
  )
}
