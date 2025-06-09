# MarketSpot - Next.js E-commerce Platform

Polska platforma e-commerce zbudowana w Next.js z React, inspirowana serwisami takimi jak OLX czy Allegro.

## Funkcjonalności

- 🏠 Strona główna z wyróżnionymi ofertami
- 🔍 Zaawansowane wyszukiwanie z filtrami
- 📝 Dodawanie ogłoszeń
- 👤 Profile użytkowników
- 📱 Responsywny design
- 🛒 Szczegóły produktów
- 📊 Paginacja wyników

## Struktura projektu

```
├── pages/
│   ├── _app.js          # Główna aplikacja
│   ├── index.js         # Strona główna
│   ├── search.js        # Strona wyszukiwania
│   ├── add-listing.js   # Dodawanie ogłoszeń
│   ├── profile.js       # Profil użytkownika
│   └── product/
│       └── [id].js      # Szczegóły produktu
├── components/
│   ├── Layout.js        # Layout aplikacji
│   ├── Header.js        # Nagłówek
│   ├── Navigation.js    # Nawigacja
│   ├── ProductGrid.js   # Siatka produktów
│   ├── ProductCard.js   # Karta produktu
│   ├── FilterSidebar.js # Sidebar z filtrami
│   ├── Pagination.js    # Paginacja
│   ├── ProductDetail.js # Szczegóły produktu
│   ├── AddListingForm.js # Formularz dodawania
│   └── UserProfile.js   # Profil użytkownika
└── styles/
    └── globals.css      # Style globalne
```

## Instalacja

```bash
npm install
npm run dev
```

## Technologie

- **Next.js 14** - Framework React
- **React 18** - Biblioteka UI
- **Tailwind CSS** - Framework CSS
- **JavaScript** - Język programowania

## Strony

- `/` - Strona główna
- `/search?q=term` - Wyniki wyszukiwania
- `/product/[id]` - Szczegóły produktu
- `/add-listing` - Dodawanie ogłoszenia
- `/profile` - Profil użytkownika

## Komponenty

Wszystkie komponenty są w pełni responsywne i używają Tailwind CSS do stylowania. Aplikacja zawiera:

- Interaktywny formularz dodawania ogłoszeń
- Zaawansowane filtry wyszukiwania
- Responsywną siatkę produktów
- Szczegółowe strony produktów z galerią zdjęć
- Profile użytkowników z statystykami

## Mockowe dane

Aplikacja używa mockowych danych do demonstracji funkcjonalności. W rzeczywistej implementacji należałoby podłączyć API backend.
