const App = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sol Kolon */}
      <div className="flex-1 bg-white flex flex-col justify-center px-12">
        <h1 className="text-red-600 text-6xl font-bold mb-8 tracking-widest">
          {' '}
          {/*---tracking-widest -> kelimeler arası boşluk arttırdım letter-spacing için--- */}
          LOGIN
        </h1>
        <form className="space-y-6">
          {/* Kullanıcı Adı */}
          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Username"
            />
          </div>
          {/* Şifre */}
          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Password"
            />
          </div>
          {/* Login Butonu */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-bold py-2 rounded-md hover:bg-red-700 transition"
          >
            LOGIN
          </button>
        </form>
        {/* Bağlantılar */}
        <div className="flex justify-between text-sm mt-4">
          <a href="#" className="text-gray-600 hover:text-red-800">
            Forgot password
          </a>
          <a href="#" className="text-gray-600 hover:text-red-800">
            Register
          </a>
        </div>
      </div>
      {/* Sağ Kolon */}
      <div className="flex-1 relative">
        <img src="/Rectangle-12.svg" alt="Rectangle SVG" />
        <img
          src="/image-2.jpg"
          alt="Burger"
          className="absolute inset-0 m-auto w-2/3"
        />
      </div>
    </div>
  )
}
export default App
