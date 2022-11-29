import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf-8').split('\n');
const [n] = input[0].split(' ')

const map = new Map<string, boolean>();
let ok = true
const cond = (str:string): boolean => {
    return (str[0] == 'H' || str[0] == 'D' || str[0] == 'C' || str[0] == 'S') && 
    (str[1] == 'A' || str[1] == '2' || str[1] == '3' || str[1] == '4' || str[1] == '5' || str[1] == '6' || str[1] == '7' || str[1] == '8' 
    || str[1] == '9' || str[1] == 'T' || str[1] == 'J' || str[1] == 'Q' || str[1] == 'K')
} 


for (let i = 0; i < Number(n); i++) {
    const [str] = input[i + 1].split(' ')
    if(map.has(str) || !cond(str)){
        ok = false
        break
    }
    map.set(str, true)
}

ok? console.log("Yes") : console.log("No")