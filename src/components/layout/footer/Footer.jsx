import { FaGithub } from "react-icons/fa";

export default function Footer () {
  return (
    <footer id='footer'>
      {/* footer logos */}
      <div >
        <FaGithub />
      </div>
      {/* footer copyright */}
      <div >
        <p>© Copyright 2023. Made by Taiga ProZz</p>
      </div>
    </footer>
  )
}