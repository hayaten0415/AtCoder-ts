import * as fs from 'fs';
 
const input = fs.readFileSync('/dev/stdin', 'utf-8').split('\n');
const [_, k] = input[0].split(' ')
const values = input[1].split(' ')

for (let i = 0; i < values.length; i++) {
    if(values[i] == k){
        console.log(i + 1)
        break
    }  
}