const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

const client = new Client();

client.initialize();

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Client is ready!');
});

//Membalas Pesan dengan gambar dari url
client.on('message', async (message) => {
  if (message.body === 'meme') {
    //mendapatkan media dari url
    const media = await MessageMedia.fromUrl(
      'https://user-images.githubusercontent.com/41937681/162612030-11575069-33c2-4df2-ab1b-3fb3cb06f4cf.png'
    );

    //membalas dengan media
    client.sendMessage(message.from, media, {
      caption: 'meme',
    });
  }
});
