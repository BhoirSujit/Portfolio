export default function Header() {


  const handleMenuToggle = ()=> {
    document.getElementById('menu-toggle')?.classList.toggle('hidden');
  }

  return (
    <>
      <header className="relative">
        <nav className=" flex justify-between align-middle px-10 py-5">
          <div className="logo font-bold text-lg">
            <span>Sujit Bhoir</span>
          </div>
          <div className="navs">
            
            <button className="visible md:hidden" onClick={handleMenuToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>

            </button>
            <ul id="menu-toggle" className="flex gap-6 align-middle flex-col absolute top-full right-0   w-full px-10 py-10 
             transition-all ease-in-out delay-100 
            md:flex-row md:static md:visibleimp md:py-0 md:h-full">
              <li  className=" md:block">
                <a href="#about">About</a>
              </li>
              <li className="  md:block">
                <a href="#skills">Skills</a>
              </li>
              <li className=" md:block">
                <a href="#projects">Projects</a>
              </li>
             
              <li  className=" md:block">
          
                <a
                  className="
                        border border-black  bg-black text-white rounded-md px-2 py-1.5 
                       transition ease-in-out delay-100 hover:bg-white hover:text-black
                       "
                  href="#contact"
                >
        
                  Contact

                </a>
              </li>
            </ul>
          </div>
        </nav>
        <hr className=" text-pri"/>
      </header>
    </>
  );
}
