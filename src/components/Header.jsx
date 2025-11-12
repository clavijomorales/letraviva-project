import { ROUTES_PROJECT } from "../routes/routes";

const Header = () => {
  return (
    <header className="p-5 fixed bg-zinc-300 z-20 w-full flex items-center justify-between top-0">
      <div className="flex items-center gap-10">
        <div className="border-none p-3 text-sm rounded-full border h-8 w-8 flex items-center justify-center bg-blue-500 text-white">
          LV
        </div>
        <div>
          <ul className="flex items-center gap-5">
            <li >
              <a href={ROUTES_PROJECT.home}>Inicio</a>
            </li>
            <li>
              <a href={ROUTES_PROJECT.blog}>Blogs</a>
            </li>
            <li>
              <a href={ROUTES_PROJECT.libraries}>Librerías asociadas</a>
            </li>
            <li>Quiénes somos</li>
            <li>Únete</li>
          </ul>
        </div>
      </div>
      <ul>
        <li>
          <a className="p-2 bg-black text-white border-none rounded-md" href={ROUTES_PROJECT.login}>Cerrar sesión</a>
        </li>
      </ul>
    </header>
  )
}

export default Header;