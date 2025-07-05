# grid-layout-mannan

A lightweight, responsive, React grid-style layout component with column breakpoints and custom gutter spacing.

![npm](https://img.shields.io/npm/v/grid-layout-mannan)
![license](https://img.shields.io/npm/l/grid-layout-mannan)

---

## ✨ Features

- ✅ Fully responsive column layout
- 🧱 Grid-style column distribution
- ⚙️ Easy to customize with breakpoints and gutter
- 🪶 Lightweight and dependency-free (except React)

---

## 📦 Installation

```bash
npm install grid-layout-mannan


🚀 Usage

import GridLayout from 'grid-layout-mannan';

<GridLayout
  columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
  gutter="20px"
>
  <YourCardComponent />
  <YourCardComponent />
  ...
</GridLayout>
