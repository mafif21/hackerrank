export const breakingRecords = (scores) => {
    const storage = {
        min: scores[0],
        max: scores[0],
        count: {
            min: 0,
            max: 0,
        }
    }

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] == scores[0]){
            continue
        }

        if (scores[i] > storage["max"]){
            storage.max = scores[i]
            storage.count.max += 1
        }else if(scores[i] < storage["min"]){
            storage.min = scores[i]
            storage.count.min += 1
        }
    }

    return [storage.count.max, storage.count.min]
}