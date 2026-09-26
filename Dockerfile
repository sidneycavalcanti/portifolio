# Site estatico (HTML/CSS puro, sem build) servido por nginx.
# Pensado para deploy direto no Coolify: ele detecta este Dockerfile
# e builda/publica sem configuracao extra.
FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html

# nginx:alpine ja roda como usuario nao-root ("nginx") por padrao nas
# imagens recentes; nao precisa de USER/HEALTHCHECK aqui porque o
# Coolify faz seu proprio healthcheck HTTP contra a porta exposta.
EXPOSE 80
