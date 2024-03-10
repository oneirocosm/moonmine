process.env.DEBUG = 'minecraft-protocol';
import mineflayer from "mineflayer";

const mineBot = mineflayer.createBot({
    host: '127.0.0.1',
    username: 'bot',
    auth: 'offline',
})

mineBot.on('chat', (username, message) => {
    if (message === 'ping') {
        mineBot.chat('pong')
    }
})

mineBot.on('error', (err) => {
    console.log(err);
})