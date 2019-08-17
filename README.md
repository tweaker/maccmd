# Выключение экрана в MacOS
### Установка
```
cd ~/
git clone https://github.com/tweaker/maccmd.git
cd ~/maccmd
npm install pm2 -g
npm install
pm2 start app.js --name "maccmd"
```
После выполнения команды `pm2 startup macos`, нужно скопировать строчку "sudo env...", и выполнить ее в терминале
```
pm2 startup macos
pm2 save
```
```
http://you_mac_ip:3000/sleep
```
