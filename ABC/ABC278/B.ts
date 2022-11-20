import * as fs from 'fs';
 
const input = fs.readFileSync('/dev/stdin', 'utf-8').split('\n');

const [h, m] = input[0].split(' ')

const H = Number(h)
const M = Number(m)

const current = 60 * H + M

for (let i = 0; i < 1440; i++){
    const time = (current + i) % 1440;
    const hour = Math.floor(time / 60);
    const minute = time % 60;
    const a = Math.floor(hour / 10);
    const b = hour % 10;
    const c = Math.floor(minute / 10);
    const d = minute % 10;
    if (a * 10 + c < 24 && b * 10 + d < 60) {
        console.log(hour,minute)
        break;
    }
}