# Pilates Studio Web Sitesi

Modern ve kullanıcı dostu bir Pilates stüdyosu web sitesi. Türkçe dil desteği, karanlık mod özelliği ve responsive tasarım ile kullanıcı deneyimini ön planda tutar.

## 📋 Proje Hakkında

Bu proje, bir Pilates stüdyosu için tasarlanmış, tamamen statik HTML sayfalardan oluşan modern bir web sitesidir. Tailwind CSS framework'ü kullanılarak geliştirilmiş olup, hem açık hem de karanlık tema desteği sunar.

## ✨ Özellikler

- 🎨 **Modern ve Şık Tasarım**: Purple (#7d17b4) renk paleti ile profesyonel görünüm
- 🌓 **Karanlık Mod Desteği**: Kullanıcı kontrolünde tema değiştirme ile göz dostu kullanım
- 📱 **Responsive Tasarım**: Mobil, tablet ve masaüstü cihazlarda mükemmel görünüm
- 🎯 **Hızlı Yükleme**: CDN üzerinden yüklenen CSS framework'ü
- 🇹🇷 **Türkçe Dil Desteği**: Tam Türkçe içerik
- ♿ **Gelişmiş Erişilebilirlik**: ARIA labels, keyboard navigation ve focus states
- 🎭 **Material Icons**: Google Material Symbols ile zengin ikonlar
- 📱 **Mobil Menü**: Animasyonlu hamburger menü ile kolay navigasyon
- ✅ **Form Validasyonu**: Gerçek zamanlı form doğrulama ve kullanıcı geri bildirimleri
- � **Smooth Animations**: Sayfa scroll ve geçişlerde akıcı animasyonlar
- 🔘 **Interactive Buttons**: Hover, active ve loading state'leri ile gelişmiş buton deneyimi
- 💾 **Theme Persistence**: LocalStorage ile tema tercihi kaydedilir
- ⌨️ **Keyboard Navigation**: Tam klavye desteği ile erişilebilir navigasyon

## 🛠️ Teknolojiler

- **HTML5**: Semantic markup ve modern HTML standartları
- **Tailwind CSS v3**: Utility-first CSS framework (CDN)
- **Google Fonts**: Manrope font ailesi
- **Material Symbols**: Google Material Icons
- **Vanilla JavaScript**: İnteraktif özellikler ve kullanıcı deneyimi iyileştirmeleri
  - Mobil menü yönetimi
  - Dark mode toggle
  - Form validasyonu
  - Smooth scroll navigasyonu
  - Scroll animasyonları
  - LocalStorage yönetimi

## 📁 Proje Yapısı

```
PilatesWeb/
├── homepage.html      # Ana sayfa - Hero section, özellikler, galeri
├── about.html         # Hakkımızda - Felsefe, misyon/vizyon, ekip
├── classes.html       # Dersler - Ders türleri ve açıklamaları
├── pricing.html       # Fiyatlandırma - Paket ve fiyat bilgileri
├── trainers.html      # Eğitmenler - Eğitmen profilleri
├── contact.html       # İletişim - İletişim formu ve bilgileri
├── faq.html          # SSS - Sıkça sorulan sorular
├── privacy.html      # Gizlilik Politikası
├── css/
│   └── common.css    # Ortak stil dosyası (animasyonlar, transitions)
├── js/
│   └── main.js       # Ana JavaScript dosyası (tüm interaktif özellikler)
└── README.md         # Bu dosya
```

## 🎨 Tasarım Sistemi

### Renk Paleti

```css
primary: #7d17b4          /* Ana mor renk */
background-light: #f7f6f8 /* Açık tema arka plan */
background-dark: #1b1121  /* Karanlık tema arka plan */
```

### Tipografi

- **Font Ailesi**: Manrope (400, 500, 700, 800 weights)
- **Başlıklar**: Font-bold, tracking-tight
- **Gövde Metni**: Font-normal, leading-normal

### Bileşenler

- **Header**: Sabit (fixed) pozisyon, glassmorphism efekti
- **Cards**: Rounded-xl, border, shadow
- **Buttons**: Primary color, hover efektleri, rounded-xl
- **Images**: Rounded-full (profil), rounded-xl (galeri)

## 🚀 Kurulum ve Kullanım

### Ön Gereksinimler

Modern bir web tarayıcısı (Chrome, Firefox, Safari, Edge)

### Yerel Geliştirme

1. **Projeyi klonlayın veya indirin**
   ```bash
   git clone <repository-url>
   cd PilatesWeb
   ```

2. **Yerel sunucu başlatın** (opsiyonel ama önerilen)
   
   Python 3 ile:
   ```bash
   python -m http.server 8000
   ```
   
   veya Node.js ile:
   ```bash
   npx serve
   ```

3. **Tarayıcıda açın**
   ```
   http://localhost:8000/homepage.html
   ```

### Doğrudan Açma

Herhangi bir HTML dosyasına çift tıklayarak doğrudan tarayıcıda açabilirsiniz.

## � Kullanım Kılavuzu

### Dark Mode Kullanımı
1. Header'daki ay/güneş ikonuna tıklayın
2. Tema tercihiniz otomatik kaydedilir
3. Tüm sayfalarda aynı tema uygulanır

### Mobil Menü
1. Mobil cihazlarda header'daki hamburger ikonuna tıklayın
2. Menü sağdan açılır
3. Menü dışına veya ESC tuşuna basarak kapatın

### İletişim Formu
1. contact.html sayfasına gidin
2. Tüm zorunlu alanları doldurun
3. Form gerçek zamanlı doğrulama yapar
4. Gönder butonuna tıklayın
5. Başarı mesajını görün

### Keyboard Navigation
- **Tab**: Elementler arasında geçiş
- **Enter**: Buton ve link aktivasyonu
- **ESC**: Mobil menüyü kapat
- **Arrow Keys**: Scroll navigasyonu

## �📄 Sayfa Detayları

### Ana Sayfa (homepage.html)
- Hero section ile etkileyici giriş
- Üç ana hizmet kartı (Reformer, Mat, Özel Dersler)
- Stüdyo fotoğraf galerisi
- Eğitmen tanıtımları
- Kullanıcı yorumları

### Hakkımızda (about.html)
- Hikaye ve felsefe bölümü
- Misyon & vizyon kartları
- Detaylı eğitmen profilleri
- Stüdyo galeri bölümü
- CTA (Call-to-Action) bölümü

### Dersler (classes.html)
- Ders türleri ve açıklamaları
- Reformer Pilates
- Mat Pilates
- Özel Dersler

### Fiyatlar (pricing.html)
- Tek ders fiyatı
- Aylık paketler
- Kampanya fiyatları

### Eğitmenler (trainers.html)
- Ayşe Yılmaz - Baş Eğitmen / Reformer Uzmanı
- Elif Kaya - Mat Pilates & Hamile Pilatesi
- Can Demir - Klinik Pilates & Fonksiyonel Antrenman

### İletişim (contact.html)
- İletişim bilgileri
- İletişim formu
- Adres, e-posta, telefon

### SSS (faq.html)
- Sıkça sorulan sorular ve cevapları

### Gizlilik Politikası (privacy.html)
- Gizlilik ve veri koruma bilgileri

## 🎯 Özelleştirme

### Renkleri Değiştirme

Her HTML dosyasının `<head>` bölümünde bulunan Tailwind config'i düzenleyin:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                "primary": "#7d17b4",        // Buradan değiştirin
                "background-light": "#f7f6f8",
                "background-dark": "#1b1121",
            },
        },
    },
}
```

### İçerik Güncelleme

- HTML dosyalarını düzenleyerek metin, resim ve içeriği değiştirebilirsiniz
- Resimler şu anda Googleusercontent üzerinden yükleniyor
- Kendi resimlerinizi kullanmak için `src` ve `style` attribute'larını güncelleyin

### Yeni Sayfa Ekleme

1. Mevcut bir HTML dosyasını kopyalayın
2. İçeriği özelleştirin
3. Header'daki navigasyon linklerini tüm sayfalara ekleyin

## 🌐 Tarayıcı Desteği

- Chrome (son 2 versiyon)
- Firefox (son 2 versiyon)
- Safari (son 2 versiyon)
- Edge (son 2 versiyon)

## 📱 Responsive Breakpoints

```
sm:  640px  - Küçük tablet
md:  768px  - Tablet
lg:  1024px - Küçük laptop
xl:  1280px - Desktop
```

## 🎯 Kullanıcı Deneyimi İyileştirmeleri

### 1. **Gelişmiş Navigasyon**
- Mobil cihazlarda animasyonlu hamburger menü
- Desktop'ta görünür menü bağlantıları
- Aktif sayfa vurgulama
- Smooth scroll ile sayfa içi navigasyon

### 2. **Tema Yönetimi**
- Kullanıcı tercihli karanlık/açık mod
- Otomatik sistem teması algılama
- Tercih kalıcılığı (LocalStorage)
- Tüm sayfalarda senkronize tema

### 3. **Form Kullanıcı Deneyimi**
- Anında hata mesajları
- Başarı bildirimleri
- Loading states ile işlem geri bildirimi
- Input validasyonu (ad, e-posta, mesaj)
- Görsel feedback (kırmızı/yeşil border)

### 4. **Performans ve Animasyonlar**
- Lazy load ile scroll animasyonları
- Prefers-reduced-motion desteği
- Optimize edilmiş CSS transitions
- Performanslı Intersection Observer kullanımı

### 5. **Erişilebilirlik (A11y)**
- ARIA labels ve descriptions
- Keyboard navigation (Tab, Enter, ESC)
- Focus visible states
- Screen reader uyumlu yapı
- Semantic HTML5 elements

### 6. **Call-to-Action Optimizasyonu**
- Belirgin CTA butonları
- Hover ve active states
- Loading animations
- Direkt iletişim yönlendirmesi

## 🔧 Geliştirme Notları

### İnteraktif Özellikler

**Mobil Menü:**
- Hamburger ikonu ile açılır/kapanır animasyonlu menü
- Menü dışına tıklama ile otomatik kapanma
- ESC tuşu ile menüyü kapatma
- ARIA attributes ile erişilebilirlik desteği

**Dark Mode:**
- Header'da görünür toggle butonu
- LocalStorage ile tercih kaydedilir
- Sistem tercihi ile otomatik başlangıç teması
- Tüm sayfalarda senkronize çalışır

**Form Validasyonu (contact.html):**
- Gerçek zamanlı input doğrulama
- Görsel hata mesajları
- E-posta format kontrolü
- Minimum karakter limitleri
- Başarı mesajı gösterimi
- Loading state ile kullanıcı geri bildirimi

**Scroll Animasyonları:**
- Intersection Observer API ile performanslı animasyonlar
- Section'lar görüntüye girdiğinde fade-in efekti
- Smooth scroll navigasyon
- Prefers-reduced-motion desteği

### CDN Kullanımı
Proje, Tailwind CSS'i CDN üzerinden yükler. Production ortamı için build edilmiş Tailwind kullanılması önerilir:

```bash
npm install -D tailwindcss
npx tailwindcss init
```

### Form İşlevi
İletişim formları gerçek zamanlı validasyon içerir. Backend entegrasyonu için:
- Form işleme için PHP, Node.js veya form servisi (Formspree, Netlify Forms)
- Email gönderimi için SMTP yapılandırması
- `contact.html` içindeki form submit handler'ını güncelleme

### Accessibility (Erişilebilirlik)
- ARIA labels ve roles eklendi
- Klavye navigasyonu tam desteklenir
- Focus states tüm interactive elementlerde görünür
- Semantic HTML yapısı korundu
- Screen reader uyumlu

## 🚀 Deployment

### Statik Hosting Seçenekleri

- **Netlify**: Drag & drop ile kolay deployment
- **Vercel**: Git entegrasyonu ile otomatik deployment
- **GitHub Pages**: Ücretsiz hosting
- **Cloudflare Pages**: Hızlı ve ücretsiz

### Basit Deployment Adımları (Netlify)

1. [Netlify](https://netlify.com) hesabı oluşturun
2. "Add new site" > "Deploy manually"
3. Proje klasörünü sürükle-bırak
4. Siteniz yayında!

## 📝 Lisans

Bu proje açık kaynaklıdır ve eğitim amaçlı kullanılabilir.

## 👥 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/yeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeniOzellik`)
5. Pull Request oluşturun

## 📞 İletişim

Sorularınız için proje sahibi ile iletişime geçebilirsiniz.

## 🙏 Teşekkürler

- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Google Fonts](https://fonts.google.com/) - Manrope Font
- [Material Symbols](https://fonts.google.com/icons) - Icon Set

---

**Not**: Bu proje örnek bir Pilates stüdyosu web sitesidir. Gerçek bir işletme için kullanılmadan önce içerik, görseller ve iletişim bilgileri güncellenmelidir.
