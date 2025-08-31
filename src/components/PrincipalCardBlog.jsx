import React from 'react';

const PrincipalCardBlog = () => {
    return (
        <div className="max-w-screen-xl w-full mx-auto mt-16 px-6 py-10 flex flex-col md:flex-row items-center gap-8">
           
            {/* Imagen */}
            <div className="w-full md:w-1/2">
                <img
                    src="https://www.las2orillas.co/wp-content/uploads/2025/01/Librerias-en-Bogota-.jpg"
                    alt="Blog Thumbnail"
                    className="rounded-lg w-full h-auto object-cover"
                />
            </div>

            {/* Texto */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
                <p className="text-gray-500 text-sm">Maret 05, 2021</p>
                <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Tentang Creativity Block pada UI Designer
                </h2>
                <p className="text-gray-600 mt-4 text-base md:text-lg">
                    Beberapa cara yang saya lakukan ketika tidak memiliki ide atau bingung untuk memulai design
                </p>
            </div>
        </div>
    )
}

export default PrincipalCardBlog;
