# Premium Dashboard UI

A sophisticated, feature-rich dashboard application built with Angular. This project focuses on high-fidelity UI/UX, aligning perfectly with modern Figma design specifications.

## 🚀 Key Features

### 1. Interactive Sidebar
- **Dynamic Navigation**: Categorized menu items (Dashboards, Pages, etc.).
- **Submenus**: Collapsible sections for complex navigation paths (e.g., User Profile).
- **Active State Intelligence**: Highlights the current route with filled icons and pill-shaped background indicators.

### 2. Powerful Data Visualization
- **Tabbed Overview Graph**: Switch between **Total Users**, **Total Projects**, and **Operating Status** seamlessly.
- **ApexCharts Integration**: High-performance, interactive charts with customizable themes.
- **Real-time Updates**: Data series update dynamically without page reloads.

### 3. Notification & Activity Center
- **Togglable Right Panel**: Accessible via a layout icon in the top navbar.
- **Notifications Feed**: Real-time system alerts (Bug fixes, New users, Subscriptions).
- **Activity Timeline**: Connects user actions in a visual timeline.

### 4. Modern Aesthetics
- **Premium Design**: Dark/light mode compatible colors, smooth transitions, and subtle micro-animations.
- **Clean Layout**: Responsive grid system handling stat cards, product sliders, and data tables.
- **Rich Iconography**: Consistent use of Bootstrap Icons.

## 🛠️ Tech Stack

- **Framework**: [Angular](https://angular.io/) (Standalone Components)
- **Charts**: [Ng-ApexCharts](https://github.com/apexcharts/ng-apexcharts)
- **Icons**: [Bootstrap Icons](https://icons.getbootstrap.com/)
- **Styling**: Vanilla CSS with custom design tokens.

## 🏁 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later)
- [Angular CLI](https://angular.io/cli)

### Installation
1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```
2. Navigate to the project directory:
   ```bash
   cd my-assignment-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development Server
Run the following command for a local dev server:
```bash
npm run start
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any source files.

## 📁 Project Structure

```
src/app/
├── components/
│   ├── dashboard/       # Main dashboard widgets (Charts, Tables, etc.)
│   ├── navbar/          # Top navigation with global search and actions
│   ├── sidebar/         # Left-side primary navigation
│   └── right-sidebar/   # Right-side notifications & activities panel
├── services/
│   └── ui.service.ts    # Global UI state management (Sidebar toggles)
└── app.ts               # Core application layout and routing
```

## 🏗️ Building for Production
Run the build command to generate production-ready artifacts in the `dist/` directory:
```bash
npm run build
```

---
Generated with ❤️ by Antigravity.
