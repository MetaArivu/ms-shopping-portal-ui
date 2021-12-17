#################################################################
#
# PodShell - Developer Tool box to test Pods in Kubernetes
#
# (C) MetaMagic Global Inc, NJ, USA, 2018
#
# Arivu Services & Containers - Apache 2
#
# Version 0.1
#################################################################
FROM metamagic/alpine:latest

LABEL author="Araf Karsh Hamid <araf.karsh@metamagic.in>"

RUN apk add --no-cache apache2 

# Copy Starting page for Apache 2
RUN mkdir /run/apache2

COPY dist/* /var/www/localhost/htdocs/
# Open port for httpd access
EXPOSE 80

# Run httpd in foreground so that the container does not quit
# soon after start
# To run this container in the back ground use the -d option
#
#     $ sudo docker run -d broadtech/alpine-apache2
#
CMD ["-D","FOREGROUND"]

# Srart httpd when container runs
ENTRYPOINT ["/usr/sbin/httpd"]

