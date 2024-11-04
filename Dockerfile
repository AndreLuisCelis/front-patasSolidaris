# Use uma imagem base do Nginx para hospedar arquivos estáticos
FROM nginx:latest

# Defina o diretório de trabalho
WORKDIR /usr/share/nginx/html

# Remova o conteúdo padrão do Nginx
RUN rm -rf ./*

# Copie todos os arquivos do projeto para o diretório de trabalho no container
COPY . .

# Exponha a porta 80 para servir a aplicação
EXPOSE 80

# O Nginx já é configurado por padrão para servir arquivos do diretório /usr/share/nginx/html
# Portanto, não é necessário um CMD customizado. O Nginx será executado automaticamente.
