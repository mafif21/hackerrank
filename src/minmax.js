export const miniMaxSum = (arr) => {
    const min = [...arr].sort((a, b) => a - b).splice(0, arr.length - 1).reduce((a, b) => a + b, 0);
    const max = [...arr].sort((a, b) => a - b).splice(1, arr.length).reduce((a, b) => a + b, 0);
    console.log(min, max)
}