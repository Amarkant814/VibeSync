# --- Build Stage ---
FROM node:20-slim AS builder
WORKDIR /app
COPY package.json package-lock.json ./

# Clear npm cache and remove lock file, then reinstall
RUN rm -rf node_modules package-lock.json
RUN npm cache clean --force
RUN npm install

COPY . .
RUN npm run build

# --- Production Stage ---
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/public/vs_logo_resized.png /usr/share/nginx/html/vs_logo_resized.png
COPY --from=builder /app/public/vite.svg /usr/share/nginx/html/vite.svg
COPY --from=builder /app/index.html /usr/share/nginx/html/index.html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]