import { Card } from "../components/Card";
import { CardItem } from "../components/CardItem";
import Header from "../components/Header";
import { HeroHome } from "../components/HeroHome";

export const Home = () => {
  return (
    <>
      <Header />
      <main className="bg-stone-200 h-screen w-full">
        <div className="flex justify-center h-[80vh]">
          <HeroHome
            title={'Descubre libros locales y conecta con tu comunidad lectora'}
            subtitle={'Explora historias, comparte reseñas y apoya a librerías independientes'}
            buttonText={'Explorar librerías'}
          />
        </div>

        <div className="flex items-center justify-between px-10 gap-20 h-[30vh] bg-stone-200">
          <div className="w-1/2">
            <h3 className="text-3xl">LetraViva busca fortalecer la conexión entre librerías locales y los lectores de la comunidad</h3>
          </div>
          <div className="justify-between w-auto flex gap-10">
            <div>
              <h3 className="text-3xl mb-2 font-semibold">120+</h3>
              <p>libros compartidos por librerías</p>
            </div>
            <div>
              <h3 className="text-3xl mb-2 font-semibold">15+</h3>
              <p>librerías locales registradas</p>
            </div>
            <div>
              <h3 className="text-3xl mb-2 font-semibold">200+</h3>
              <p>reseñas publicadas</p>
            </div>
          </div>
        </div>
        <hr className="pb-10 border-zinc-400" />
        <div className="text-3xl py-10 bg-stone-200 font-semibold space-y-5">
          <h3 className="px-10 text-center">Comunidad y reseñas</h3>
          <div className="px-10 mt-10 items-start gap-5" style={{
            display: 'grid',
            gridTemplateColumns: '3fr 1fr'
          }}>
            <div className="grid grid-cols-3 gap-8">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className="flex flex-col gap-3">
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
            </div>
          </div>
        </div>
        <hr className="border-zinc-400" />
        <div className="px-10 py-10 bg-stone-200">
          <div className="grid grid-cols-2 bg-white rounded-xl">
            <div>
              <img className="rounded-l-xl" src='https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg' alt="" />
            </div>
            <div className="p-10 flex flex-col h-full justify-between">
              <p className="text-blue-500 font-semibold">Conecta de forma cercana con tus lectores</p>
              <h1 className="text-3xl">Una plataforma digital donde los lectores descubren libros y las librerías locales</h1>
              <p className="text-zinc-500 font-normal">Conecta con tu próxima lectura, apoya a librerías locales</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
