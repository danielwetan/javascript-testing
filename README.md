**Apa itu Software Testing?**
Testing adalah proses dimana kita memastikan bahwa aplikasi yang dibuat menghasilkan output sesuai ekspetasi. Jika hasil yang didapatkan berbeda dengan ekspetasi, maka bisa dibilang terdapat bug pada aplikasi sehingga harus diperbaiki.

**Mengapa Software Testing itu penting?**
Dengan software testing kita dapat mendeteksi perilaku yang tidak diinginkan dari aplikasi sebelum masuk ke tahap production. Tujuan utamanya agar aplikasi berjalan sesuai ekspetasi dan tidak terjadi error ketika digunakan oleh user.

**Jenis-jenis Software Testing**
1. Manual Testing
2. Automated Testing

### Unit Testing
**Alasan menggunakan automated testing**
- Mengurangi bugs
- Menghemat waktu
- Integrasi dengan build workflow (CI/CD)
- Meningkatkan kualitas code
- Kode lebih terorganisi

**Metode Testing**
1. End-to-End Testing
Pengujian secara menyeluruh. UI dan fungsionalitas
2. Integration Testing
Pengujian beberapa function dengan dependency
3. Unit Testing
Pengujian pada bagian terkecil aplikasi, contoh menguji function.

**Testing menggunakan JEST**
JEST akan melakukan testing pada file atau folder dengan kriteria:
Filename Suffix
**.test.js *.spec.js*
Filename Extension
*.js, .json, .jsx, .ts, .tsx, .node*
Folder
*__tests__*

