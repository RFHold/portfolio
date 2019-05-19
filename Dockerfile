FROM node:11.3.0-alpine

WORKDIR /usr/src/app

# Copy dependency info
COPY package*.json ./
COPY yarn.lock ./
COPY lerna.json ./

# Install production dependencies
RUN yarn install --only=production

# Copy all source code
COPY . .

RUN yarn build

FROM nginx:1.14.2

# Create webroot for compiled client
ENV CLIENT_ROOT /var/www/react-app
WORKDIR $CLIENT_ROOT

# Copy compiled client to webroot
COPY --from=0 /usr/src/app/build/. $CLIENT_ROOT

#Copy site config
COPY nginx.conf /tmp/docker_example.nginx
# Apply $CLIENT_ROOT and save copied config to /etc/nginx/conf.d/deault.conf on docker guest
RUN envsubst '$CLIENT_ROOT' < /tmp/docker_example.nginx > /etc/nginx/conf.d/default.conf

# Expose ports
EXPOSE 80

