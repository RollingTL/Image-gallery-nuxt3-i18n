# Multilingual static site based on Nuxt Content, Nuxt 3, nuxtjs/i18n

Boilerplate to start localized static site. Includes two static routs and dynamic routes and metadata for each page.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Deployment to static server

Build the application for production:

```bash
# npm
npx nuxi generate
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

Then copy content of `dist` folder to `public` folder of your web site.

If necessary create .htaccess and robots.txt files.

### Sample .htaccess

```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ /index.html [L]
```

### Sample robots.txt

```
User-agent: *
Disallow:
```
