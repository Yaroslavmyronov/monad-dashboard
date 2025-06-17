#
# Stage 1: build with Node
#
FROM node:lts AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

#
# Stage 2: serve the static build on port 3000
#
FROM node:lts
WORKDIR /app

# copy your built files (assuming dist/, public/, etc.)
COPY --from=build /app/dist    ./dist
# if you have assets in public/, copy that too:
# COPY --from=build /app/public  ./public

# install a tiny static server
RUN npm install -g serve

EXPOSE 3000

# serve your /dist (or wherever your index.html lives)
CMD ["serve", "-s", "dist", "-l", "3000"]

