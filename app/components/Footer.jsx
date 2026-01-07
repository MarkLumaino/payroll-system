
export default function Footer() {

return(
 <footer className="bg-[#020b1b] text-center text-white py-10">
    <div className="flex flex-col items-center gap-4">

        <div className="flex items-center gap-2">
            <img src="https://rocksontech.com/wp-content/uploads/2024/12/RS_LOGO_LANDSCAPE_WHITE.svg" alt="Rockson Logo" className="h-15"/> 
        </div>

        <a href="mailto:contact@rocksontech.com" 
           className="text-sm flex items-center gap-2 hover:text-blue-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-400">
                <path d="M2.5 6.75A2.25 2.25 0 0 1 4.75 4.5h14.5a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.25 19.5H4.75A2.25 2.25 0 0 1 2.5 17.25V6.75Zm2.773.53a.75.75 0 0 0-.546 1.4l6.75 4.5a.75.75 0 0 0 .846 0l6.75-4.5a.75.75 0 0 0-.546-1.4H5.273Z" />
            </svg>
            contact@rocksontech.com
        </a>

        <p className="text-xs text-gray-300 mt-4">
            Copyright ©2025 Rocksontech. Designed by CoreConcepts.
        </p>
    </div>
</footer>

);

}