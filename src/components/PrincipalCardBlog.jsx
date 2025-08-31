import React from 'react';

const PrincipalCardBlog = () => {
    return (
        <div className="w-[80%] mx-auto p-6 flex flex-col md:flex-row items-center gap-6">
            {/* Imagen */}
            <div className="w-full">
                <img
                    src="https://www.las2orillas.co/wp-content/uploads/2025/01/Librerias-en-Bogota-.jpg"
                    alt="Blog Thumbnail"
                    className="rounded-lg"
                />
            </div>

            {/* Texto */}
            <div className="w-full flex flex-col justify-center">
                <p className="text-gray-500 text-sm">Maret 05, 2021</p>
                <h2 className="text-6xl font-bold text-gray-900">
                    Tentang Creativity Block pada UI Designer
                </h2>
                <p className="text-gray-600 mt-2">
                    Beberapa cara yang saya lakukan ketika tidak memiliki ide atau bingung untuk memulai design
                </p>
            </div>
        </div>
    )
}

export default PrincipalCardBlog;