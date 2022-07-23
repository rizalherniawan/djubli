Berikut adalah langkah - langkah dalam menjalankan server:

1. Clone repo ke disk local
2. install tools yang digunakan dengan mengetik **npm install** di terminal. <br/><br/>
3. Mengatur konfigurasi database dengan me-rename file **.env copy** menjadi **.env** <br/><br/>
4. Menyesuakan username dan password database serta host yang digunakan di file **.env** <br/><br/>
5. Membuat database dengan mengetik **npx sequelize db:create** di termnial <br/><br/>
6. Memigrasikan model data ke database dengan mengetik **npx sequelize db:migrate** <br/><br/>
7. Memindahkan data seed ke database dengan mengetik **npx sequelize db:seed:all** <br/><br/>
8. Menjalankan server dengan mengetik **npm start** di terminal <br/><br/>

List API:

METHOD : **GET** <br/>
KEGUNAAN : Mendapatkan list data mobil <br/>
http://localhost:9000/api/v1/car <br/><br/><br/>

METHOD : **PUT** <br/>
KEGUNAAN : Mengupdate data mobil berdasarkan id <br/>
http://localhost:9000/api/v1/car/:id <br/><br/><br/>

METHOD : **PUT** <br/>
KEGUNAAN : Mngupdate harga mobil <br/>
http://localhost:9000/api/v1/price <br/><br/><br/>

METHOD : **DELETE** <br/>
KEGUNAAN : Menghapus data mobil <br/>
http://localhost:9000/api/v1/car <br/><br/><br/>

METHOD : **GET** <br/>
KEGUNAAN : Mendapatkan list kredit mobil <br/>
http://localhost:9000/api/v1/credit <br/><br/><br/>

METHOD : **PUT** <br/>
KEGUNAAN : Mengupdate data kredit mobil <br/>
http://localhost:9000/api/v1/credit <br/><br/><br/>

METHOD : **DELETE** <br/>
KEGUNAAN : Menghapus data credit mobil<br/>
http://localhost:9000/api/v1/credit <br/><br/><br/>

METHOD : **GET** <br/>
KEGUNAAN : Mendapatkan list mobil yang bisa kredit fix & cap<br/>
http://localhost:9000/api/v1/fix-cap <br/><br/><br/>

METHOD : **PUT** <br/>
KEGUNAAN : Mengupdate data list mobil yang bisa kredit fix & cap <br/>
http://localhost:9000/api/v1/fix-cap <br/><br/><br/>

METHOD : **DELETE** <br/>
KEGUNAAN : Menghapus data list mobil yang bisa kredit fix & cap<br/>
http://localhost:9000/api/v1/fix-cap <br/><br/><br/>
