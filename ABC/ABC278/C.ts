import * as fs from 'fs';
 
const input = fs.readFileSync('/dev/stdin', 'utf-8').split('\n');

const [_, Q] = input[0].split(' ')
const q = Number(Q)
const map = new Map<string, boolean>();
for (let i = 0; i < q; i++){
    const[t,a,b] = input[i+1].split(' ')
    if(t === "1"){
        map.set(a + " " + b, true)
    }else if(t === "2"){
        map.delete(a + " " + b)
    }else{
        if(map.has(a + " " + b) && map.has(b + " " + a)){
            console.log("Yes")
        }else{
            console.log("No")
        }
    }
}