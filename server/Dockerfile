# Этап 1: Сборка (builder)
FROM node:18 AS builder
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build # Генерируем оптимизированные файлы

# Этап 2: Финальный образ
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json .
RUN npm install --production # Только зависимости для production
CMD ["npm", "run", "prod"]