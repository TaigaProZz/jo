import { FaGithub } from "react-icons/fa";

export default function Footer () {
  return (
    <footer className="flex items-center justify-end space-x-8 border-t border-slate-200 py-6 px-8">
      {/* footer logos */}
      <div>
        <FaGithub />
      </div>
      {/* footer copyright */}
      <div >
        <p>© Copyright 2023. Made by Taiga ProZz</p>
      </div>
    </footer>
  )
}