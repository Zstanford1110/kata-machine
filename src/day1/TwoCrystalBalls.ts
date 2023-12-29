export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpSize = Math.floor(Math.sqrt(breaks.length));

    let index = jumpSize;
    for(; index < breaks.length; index += jumpSize) {
        if(breaks[index]) {
            break;
        }
    }

    index -= jumpSize;

    for(let j = 0; j < jumpSize && j < breaks.length; j++, index++) {
        if(breaks[index]) {
            return index;
        }
    }

    return -1;
}