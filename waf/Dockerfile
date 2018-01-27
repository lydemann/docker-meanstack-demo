FROM ubuntu:16.04

COPY build.multi.sh /build.multi.sh
RUN chmod +x /build.multi.sh && /bin/bash -c "source /build.multi.sh"

FROM ubuntu:16.04

COPY config.multi.sh /config.multi.sh

COPY --from=0 /usr/src/modsecurity/ /usr/src/modsecurity/
COPY --from=0 /usr/local/nginx/ /usr/local/nginx/

RUN chmod +x /config.multi.sh && /bin/bash -c "source /config.multi.sh"

COPY nginx.conf /usr/local/nginx/conf/nginx.conf
COPY modsec_includes.conf /usr/local/nginx/conf/modsec_includes.conf
COPY modsecurity.conf /usr/local/nginx/conf/modsecurity.conf
COPY crs-setup.conf /usr/local/nginx/conf/rules/crs-setup.conf

RUN chmod -R 777 /var/log/
RUN chmod -R 777 /usr/local/nginx/
VOLUME ["/var/log/", "/usr/local/nginx/"]

EXPOSE 80
CMD nginx -g 'daemon off;'
