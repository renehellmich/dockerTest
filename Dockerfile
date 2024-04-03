FROM node:current-alpine
WORKDIR /app
COPY . .
RUN npm install


ENV VARIABLE="value"
CMD ["npm", "start"]
EXPOSE 3000