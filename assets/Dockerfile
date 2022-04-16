FROM Endpanda/queen-juliet:public

RUN git clone https://github.com/Endpanda/Queen-Juliet /root/Queen-Juliet
WORKDIR /root/Queen-Juliet/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "assets/module.js"]
