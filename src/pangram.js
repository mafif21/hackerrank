export const pangram = (s) => {
    s = s.replace(/\s/g, "").toLowerCase();
    let alphabet = new Set()

    for (const w of s) {
        alphabet.add(w)
    }

    return alphabet.size === 26 ? 'pangram' : 'not pangram';
}