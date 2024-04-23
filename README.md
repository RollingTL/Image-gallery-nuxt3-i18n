# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
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

Then copy content of `dist` folder to root of your web site.

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
