FROM nginx:alpine

# Copy website files
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80