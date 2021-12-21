FROM node:14-alpine3.12

ENV REACT_APP_API="http://194.67.86.2:80"
ENV PUBLIC_URL="http://194.67.86.2:80"

COPY package.json yarn.lock /usr/src/
RUN cd /usr/src \
    && yarn install --pure-lockfile

COPY . /usr/src

WORKDIR /usr/src/


ENTRYPOINT ["yarn","start"]
