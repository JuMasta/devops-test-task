FROM node:14-alpine3.12


COPY package.json yarn.lock /usr/src/
RUN cd /usr/src \
    && yarn install --pure-lockfile

COPY . /usr/src

WORKDIR /usr/src/


ENTRYPOINT ["yarn","start"]
