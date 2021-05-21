FROM  node:16
RUN mkdir /action
ADD  package.json /action/
ADD index.js /action/
ADD images.js /action/
ADD entrypoint.sh /
RUN cd /action && npm install -g @vercel/ncc
RUN cd /action && npm install
RUN cd /action && npm run build
ENTRYPOINT ["/entrypoint.sh"]
