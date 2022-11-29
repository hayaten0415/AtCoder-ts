import * as fs from 'fs';
import { exit } from 'process';
import { Queue } from 'queue-typescript';
const input = fs.readFileSync('/dev/stdin', 'utf-8').split('\n');
const [n] = input[0].split(' ')

type Pair = {
    first: number
    second: number
}
const numbers = new Set<number>();
const map = new Map<number, number>();
let tmp = new Array<Pair>(Number(n));

for (let i = 0; i < Number(n); i++) {
    const [A, B] = input[i + 1].split(' ')
    tmp[i] = {first: Number(A), second:Number(B)}
    numbers.add(Number(A))
    numbers.add(Number(B))
}

const array:number[] = [...numbers];
const f = (a:number, b:number) => a-b
array.sort(f)
if (array[0] !== 1) {
    console.log(1)
    exit(0)
}
for (let i = 0; i < array.length; i++) {
    map.set(array[i], i)
}
const Graph:Record<number, number[]> = {}

for (let i = 0; i < Number(n); i++) {
    let a:number = map.get(tmp[i].first)!!
    let b:number = map.get(tmp[i].second)!!
    if(!Graph[a])Graph[a] = []
    if(!Graph[b])Graph[b] = []
    Graph[a].push(b)
    Graph[b].push(a)
}

const visited = new Array<boolean>(array.length) 
let queue = new Queue<number>(1);

while (queue.length > 0) {
    let v = queue.dequeue()
    visited[v] = true
    for (let i = 0; i < Graph[v].length; i++) {
        const element = Graph[v][i];
        if(visited[element])continue
        queue.enqueue(element)
    }
}

for (let i = array.length -1; i >= 0; i--) {
    if(visited[i]){
        console.log(array[i])
        break
    }    
}