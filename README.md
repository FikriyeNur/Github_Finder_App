# 🐙 GitHub Finder
GitHub kullanıcılarını aramak ve detaylı bilgilerini görüntülemek için geliştirilmiş bir **React** uygulaması.  
GitHub API'sini kullanarak kullanıcıların arama yapmasını ve detaylara erişmesini sağlar.  
Modern web uygulaması yaklaşımıyla hata yönetimi, yükleme durumu ve kullanıcı dostu tasarım içerir.

## ✨ Özellikler
- 🔍 **GitHub Kullanıcı Arama**  
  Kullanıcılar, GitHub üzerinde kullanıcı adı ile arama yapabilir.  
- 📄 **Detaylı Kullanıcı Bilgisi**  
  Kullanıcıların profiline ait detaylı bilgiler gösterilir (repos, followers, vs).
- ⚠️ **Hata Yönetimi**  
  API hatalarında veya geçersiz aramalarda kullanıcıya uygun hata mesajı gösterilir.
- ⏳ **Loading Durumu**  
  Arama sırasında loading göstergesi kullanıcıya sunulur.
- ❌ **Hata Temizleme**  
  Hatalar belirli bir süre sonra otomatik olarak temizlenir.

## Kullanılan Teknolojiler
- ⚛️ **React** – Kullanıcı arayüzü oluşturma
- ⚡ **Vite** – Modern build aracı (hızlı başlatma ve derleme)
- 🔁 **Context API** – Global state yönetimi
- 🧠 **React Hooks** – `useState`, `useContext`, `useReducer` gibi hook'lar
- 🌐 **GitHub API** – GitHub kullanıcı bilgilerini çekmek için

## 🚀 Kurulum
1. Repo'yu Klonlayın
Projeyi bilgisayarınıza klonlamak için terminal üzerinden şu komutu kullanın:
* git clone https://github.com/FikriyeNur/github-finder.git
* cd github-finder

2. Bağımlılıkları Yükleyin
Projeyi çalıştırabilmek için gerekli tüm bağımlılıkları yüklemek için şu komutu kullanın:
* npm install

3. GitHub Personal Access Token'ınızı Ayarlayın
GitHub API'sini kullanabilmek için bir Personal Access Token oluşturmanız gerekecek.
GitHub Token Oluşturma Sayfası üzerinden yeni bir token oluşturun.
Token'ı .env dosyasına ekleyin:
* VITE_GITHUB_TOKEN=your_github_personal_access_token

4. Uygulamayı Çalıştırın
Uygulamayı başlatmak için aşağıdaki komutu çalıştırabilirsiniz:
* npm run dev

<img width="1375" alt="Screenshot 2025-05-08 at 22 00 17" src="https://github.com/user-attachments/assets/1a8160dc-3cc4-4178-b2c8-8d15895eaaea" />
<img width="1380" alt="Screenshot 2025-05-08 at 22 05 06" src="https://github.com/user-attachments/assets/d5403de2-2b83-4590-9779-9357c6a5836f" />
<img width="1435" alt="Screenshot 2025-05-08 at 22 05 43" src="https://github.com/user-attachments/assets/792fd349-7f52-41f8-a268-615a39876563" />


