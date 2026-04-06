# LinkShoarder Frontend

A modern, aesthetic React application for managing and browsing video links and profiles. Built with Bootstrap for a clean dark theme experience.

## 🚀 Features

- **Welcome Page**: Clean landing page with navigation to main sections
- **Video Gallery**: Browse and paginate through video links with thumbnails
- **Profiles Section**: View profiles with images in a card-based layout
- **Add Content**: Forms to add new videos and profiles to the database
- **Responsive Design**: Mobile-friendly Bootstrap components
- **Dark Theme**: Consistent dark mode throughout the application

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **React Router** - Client-side routing
- **Bootstrap 5** - UI components and styling
- **Axios** - HTTP client for API calls
- **Create React App** - Build setup

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd linkshoarder/prev-links/frontend/my-links
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run start:frontend
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── components/
│   └── Sidebar.js          # Navigation sidebar
├── pages/
│   ├── Welcome.js          # Landing page
│   ├── Home.js             # Video gallery
│   ├── Profiles.js         # Profiles list
│   ├── ProfilePage.js      # Individual profile view
│   ├── AddVideo.js         # Add video form
│   └── AddProfile.js       # Add profile form
├── App.js                  # Main app component
└── index.js                # App entry point
```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run start:frontend` - Alternative start command
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## 🌐 API Integration

The frontend connects to a backend API deployed on Vercel:
- **Base URL**: `https://links-backend-six.vercel.app`
- **Endpoints**:
  - `GET /get_links_with_titles` - Fetch videos
  - `GET /get_names` - Fetch profiles
  - `POST /add_video` - Add new video
  - `POST /add_profile` - Add new profile

## 🎨 Design Philosophy

- **Minimalist**: Clean, uncluttered interface
- **Dark Theme**: Easy on the eyes with Bootstrap's dark mode
- **Fast Loading**: Optimized images and removed unnecessary assets
- **Accessible**: Semantic HTML and Bootstrap's accessibility features

## 🚀 Deployment

The app is configured for easy deployment:

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Deploy the `build` folder** to your hosting service (Vercel, Netlify, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and proprietary.

## 📞 Support

For questions or issues, please create an issue in the repository.

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
