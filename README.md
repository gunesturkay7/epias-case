# Epias Case Projesi

Epias Case, modern JavaScript ve React kullanarak geliştirilen bir işe alım case çalışmasıdır.

## Özellikler

- React 18 ile modern UI geliştirme
- Redux Toolkit ile etkili durum yönetimi
- React Router ile SPA (Single Page Application) yönlendirme
- SASS ile stil desteği
- ESLint ile kod kalite güvencesi
- Redux ile global state yönetimi ve LocalStorage kullanımı
- React Split kütüphanesi ile dinamik ve esnek layout tasarımı

## Başlarken

Proje dosyalarını yerel makinenize klonladıktan veya indirdikten sonra, aşağıdaki adımları izleyin:

1. Proje dizinine gidin:

   ```shell
   cd epias-case
   ```

2. Projedeki bağımlılıkları yükleyin:

   ```shell
   npm install
   ```

3. Projeyi geliştirme modunda çalıştırın:
   ```shell
   npm run dev
   ```

Bu, Vite geliştirme sunucusunu başlatır. Terminalde gösterilen URL'yi kontrol edin, çünkü port zaten kullanılıyorsa farklı bir port üzerinde çalışabilir (örneğin `http://localhost:5173` veya `http://localhost:4173`).

## Betikler

- `npm run dev`: Vite geliştirme sunucusunu başlatır.
- `npm run build`: Ürün için uygulamayı derler.
- `npm run lint`: ESLint ile kaynak kodu kontrol eder.
- `npm run preview`: Üretim yapısını önizleme modunda görüntüler.

## Bağımlılıklar

### Ana Bağımlılıklar

- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-redux`: ^8.0.7
- `react-router-dom`: ^6.12.1
- `react-split`: ^2.0.14
- `@reduxjs/toolkit`: ^1.9.5
- `vite-plugin-sass-dts`: ^1.3.6

### Geliştirme Bağımlılıkları

- `@types/react`: ^18.0.37
- `@types/react-dom`: ^18.0.11
- `@vitejs/plugin-react`: ^4.0.0
- `eslint`: ^8.38.0
- `eslint-plugin-react`: ^7.32.2
- `eslint-plugin-react-hooks`: ^4.6.0
- `eslint-plugin-react-refresh`: ^0.3.4
- `sass`: ^1.62.1
- `sass-loader`: ^13.3.1
- `vite`: ^4.3.9

## Lisans

Bu proje özel lisanslıdır ve izinsiz kullanım veya dağıtım yapılamaz.

---
