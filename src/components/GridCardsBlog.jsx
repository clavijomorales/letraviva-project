import React from 'react';

const GridCardsBlog = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <img
            src="https://estaticos.elcolombiano.com/documents/10157/0/848x565/34c0/780d565/center/11101/PVEW/image_content_33686310_20190624183700.jpg"
            alt="Memilih foto"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <p className="text-gray-500 text-sm">Maret 01, 2021</p>
            <h2 className="text-lg font-bold text-gray-900 leading-snug mt-1">
              Memilih foto yang cocok untuk desain website
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              Tips memilih foto yang cocok untuk desain website dan bagaimana cara menempatkan nya dengan tepat
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <img
            src="https://imagenes.eltiempo.com/files/image_1200_535/uploads/2022/12/22/63a48aa40d149.jpeg"
            alt="Membuat desain header"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <p className="text-gray-500 text-sm">Februari 28, 2021</p>
            <h2 className="text-lg font-bold text-gray-900 leading-snug mt-1">
              Membuat desain header yang proporsional
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              Sedikit Tips untuk membuat desain bagian header pada website yang ideal dan tidak terlalu kegedean
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <img
            src="https://libreriasiglo.com/img/cms/Cartograf%C3%ADas/Librer%C3%ADas/Librer%C3%ADa%20Lerner.jpg"
            alt="Inspirasi"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <p className="text-gray-500 text-sm">Februari 24, 2021</p>
            <h2 className="text-lg font-bold text-gray-900 leading-snug mt-1">
              Cara memakai inspirasi dari referensi
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              Bagaimana saya biasanya mengambil inspirasi lalu diterapkan pada design dengan sedikit modifikasi
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <img
            src="https://madrid365.es/wp-content/uploads/2022/11/taxi-Ciempozuelos-60.png"
            alt="Belajar UI"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <p className="text-gray-500 text-sm">Februari 23, 2021</p>
            <h2 className="text-lg font-bold text-gray-900 leading-snug mt-1">
              Sebaiknya Belajar UI Design mulai dari mana?
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              Tahapan belajar UI Design di tengah deras nya informasi tentang industri UI/UX yang kadang membuat bingung
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <img
            src="https://images.adsttc.com/media/images/55b6/ae75/e58e/ce6c/0700/049d/newsletter/_MG_4205.jpg?1438035558"
            alt="Industri UI/UX"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <p className="text-gray-500 text-sm">Februari 21, 2021</p>
            <h2 className="text-lg font-bold text-gray-900 leading-snug mt-1">
              Pertanyaan tentang terjun di industri UI/UX
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              Menjawab beberapa pertanyaan dari teman tentang bagaimana terjun di Industri UI/UX
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <img
            src="https://img.buzzfeed.com/buzzfeed-static/static/2015-10/15/13/enhanced/webdr05/original-13460-1444930812-10.png?downsize=700%3A%2A&output-quality=auto&output-format=auto"
            alt="Programmer ke UI Designer"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <p className="text-gray-500 text-sm">Februari 18, 2021</p>
            <h2 className="text-lg font-bold text-gray-900 leading-snug mt-1">
              Dari Website Programmer Menjadi UI Designer
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              Pengalaman saya menjalani proses transisi menjadi UI Designer, beberapa poin bisa dipraktekkan
            </p>
          </div>
        </div>

      </div>
    </div>
    )
}

export default GridCardsBlog;