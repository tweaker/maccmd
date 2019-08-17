# Выключение экрана в MacOS
### Установка
```
cd ~/
git clone https://github.com/tweaker/maccmd.git
cd ~/maccmd
npm install pm2 -g
npm install
pm2 start app.js --name "maccmd"
pm2 startup macos
pm2 save
```
```
http://you_mac_ip:3000/sleep
```
