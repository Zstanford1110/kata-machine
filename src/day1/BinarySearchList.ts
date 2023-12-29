export default function bs_list(haystack: number[], needle: number): boolean {
    let left = 0;
    let right = haystack.length - 1;

    while (left <= right) {
        let middle = Math.floor(left + (right - left)/2);
        let middleValue = haystack[middle];
        if(middleValue === needle) {
            return true;
        } else if (middleValue > needle) {
            right = middle - 1;
        } else if (middleValue < needle) {
            left = middle + 1;
        }
    }

    return false;
}