import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ROUTES_PROJECT } from "../routes/routes"

export const Login = () => {

  const [form, setform] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [error, setError] = useState('')
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform((prev) => ({ ...prev, [name]: value }))
  }

  const handleLogin = (e) => {
    e.preventDefault();

    const VALID_USER = {
      name: 'Jonathan',
      email: "usuario@ejemplo.com",
      password: '12345'
    }

    if (form.email == '' || form.name == '' || form.password == '') {
      setError('Todas las credenciales son requeridas')
      return
    }

    if (form.email === VALID_USER.email && form.password === VALID_USER.password) {
      localStorage.setItem('user', JSON.stringify({ email: form.email, name: form.name, password: form.password }))
      navigate(ROUTES_PROJECT.home)
      return
    }

    setError('Credenciales incorrectas');
  }

  return (
    <section className="bg-stone-200 p-20 h-screen w-full flex items-center justify-center">
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr' }}
        className="bg-zinc-100 gap-5 items-stretch rounded-xl p-5 shadow-2xl"
      >
        <div className="space-y-5 p-5 flex flex-col justify-center">
          <div className="p-3 rounded-full border h-10 w-10 flex items-center justify-center bg-blue-500 text-white">
            LV
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Crear una cuenta</h1>
            <p className="text-sm text-zinc-500">Crea una cuenta llenando este formulario. Si ya tienes una, inicia sesión</p>
          </div>
          <div>
            <form
              onSubmit={handleLogin}
              action="post"
            >
              <div className="space-y-10">
                <input className="border-b p-2 px-3 w-full border-zinc-400"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nombre"
                  name="name"
                />
                <input
                  value={form.email}
                  onChange={handleChange}
                  className="border-b p-2 px-3 w-full border-zinc-400"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                <input
                  value={form.password}
                  onChange={handleChange}
                  className="border-b p-2 px-3 w-full border-zinc-400"
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                />
              </div>

              <button
                className="mt-10 bg-zinc-950 text-white p-3 px-6 rounded-lg cursor-pointer text-sm font-semibold w-full"
                type="submit"
              >
                Crear cuenta
              </button>

              <div className="mt-5 flex items-center gap-2 justify-center">
                <p className="text-zinc-500">¿Ya tienes una cuenta?</p>
                <a className="underline text-sm" href="">Inicia sesion aquí</a>
              </div>
              {error && (
                <div className="flex items-center justify-center w-max m-auto mt-10">
                  <p className="text-red-400 text-center">¡{error}!</p>
                </div>
              )}
            </form>
          </div>
        </div>
        <div>
          <div className="relative">
            <img
              className="rounded-r-lg w-full h-full object-cover relative"
              src="https://images.unsplash.com/photo-1634630416778-86a63fd8434b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGlicmFyeSUyMGRpZ2l0YWx8ZW58MHx8MHx8fDA%3D"
              alt="background library book"
            />
            <div className="absolute bottom-5 left-5 backdrop-blur-lg shadow-lg right-5 p-4 rounded-2xl">
              <h3 className="text-lg">
                "En algún libro hay una frase esperándonos para darle sentido a la existencia"
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
