export const countingSort = (arr) => {
    const count = new Array(arr.length).fill(0);

    for (let j = 0; j < arr.length; j++) {
        count[arr[j]] += 1;
    }

    return count.slice(0, 100);
}