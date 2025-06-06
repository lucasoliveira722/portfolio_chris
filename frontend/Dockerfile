# Etapa 1: Build
FROM node:20 AS builder

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos de dependência para cache eficiente
COPY package.json package-lock.json* ./

# Instala as dependências
RUN npm install

# Copia o restante do código
COPY . .

# Compila a aplicação Next.js
RUN npm run build

# Etapa 2: Runtime
FROM node:20-alpine AS runner

# Define o diretório de trabalho
WORKDIR /app

# Variável de ambiente para produção
ENV NODE_ENV=production

# Copia apenas os arquivos necessários para rodar a aplicação
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expõe a porta padrão do Next.js
EXPOSE 3000

# Comando para iniciar o servidor Next.js em modo produção
CMD ["npm", "start"]
