FROM  node:16
RUN mkdir /action
ADD  package.json /action/
ADD index.js /action/
ADD images.js /action/
WORKDIR /action
RUN npm install -g @vercel/ncc
RUN npm install
RUN npm run build
ENTRYPOINT ["node dist/index.js"]
