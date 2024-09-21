export const plusMinus = (arr) => {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveCount += 1
        }else if (arr[i] < 0) {
            negativeCount += 1
        }else{
            zeroCount += 1
        }
    }

    console.log((positiveCount / arr.length).toFixed(6));
    console.log((negativeCount / arr.length).toFixed(6));
    console.log((zeroCount / arr.length).toFixed(6));
}