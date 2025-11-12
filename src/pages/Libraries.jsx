import { HeroHome } from "../components/HeroHome"
import { librariesData } from "../data/LibrariesData"

export const Libraries = () => {
  return (
    <>
      <div className="bg-stone-200 h-screen w-full">
        <HeroHome 
          title={'Bienvenido a nuestras librerias'}
          subtitle={'Conoce todas las librerias asociadas a la plataforma'}
          buttonText={'Ver mas'}
        />
        <div className="grid grid-cols-4 gap-10 py-10 w-3/4 m-auto">
          {librariesData && librariesData.length > 0 &&
            librariesData.map(({ image, title, url }, index) => (
              <a key={index} href={url} className="shadow-lg rounded-xl bg-zinc-200 p-5">
                <img 
                  className="w-full rounded-xl"
                  src={image}
                  alt="Imagen de la libreria" 
                />
                <div className="pt-5">
                  <h1 className="text-lg font-semibold text-black">{title}</h1>
                  <p className="text-zinc-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, esse.</p>
                </div>
              </a>
            ))
          }
        </div>
      </div>
    </>
  )
}
