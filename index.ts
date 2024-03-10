//process.env.DEBUG = 'minecraft-protocol';
import mineflayer from "mineflayer";
import prismarine from 'prismarine-viewer';
const viewer = prismarine.mineflayer

const mineBot = mineflayer.createBot({
    host: '127.0.0.1',
    username: 'bot',
    auth: 'offline',
})

mineBot.once('spawn', () => {
    viewer(mineBot, { port: 3007, firstPerson: false }) // port is the minecraft server port, if first person is false, you get a bird's-eye view
    mineBot.chat(`/gamemode creative ${mineBot.username}`);
    mineBot.chat(`/effect give ${mineBot.username} minecraft:invisibility infinite 49 true`);
    mineBot.chat(`/tp ${mineBot.username} 0 320 0`);
    mineBot.creative.startFlying();
})

mineBot.on('chat', (username, message) => {
    if (message === 'ping') {
        mineBot.chat('pong')
    }
})

mineBot.on('error', (err) => {
    console.log(err);
})