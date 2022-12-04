function replace(string) {
    var code = { "a": "z", "A": "Z", "b": "y", "B": "y", "c": "x", "C": "X", "d": "w", "D": "W", "e": "v", "E": "V", "f": "u", "F": "U", "g": "t", "G": "T", "h": "s", "H": "S", "i": "r", "I": "R", "j": "q", "J": "Q", "k": "p", "K": "P", "l": "o", "L": "O", "m": "n", "M": "N", "n": "m", "N": "M", "o": "l", "O": "L", "p": "k", "P": "K", "q": "j", "Q": "J", "r": "i", "R": "I", "s": "h", "S": "H", "t": "g", "T": "G", "u": "f", "U": "F", "v": "e", "V": "E", "w": "d", "W": "D", "x": "c", "X": "C", "y": "b", "Y": "B", "z": "a", "Z": "A", "ä": "ß", "Ä": "ẞ", "ö": "ü", "Ö": "Ü", "ü": "ö", "Ü": "Ö", "ß": "ä", "ẞ": "Ä" };
    return Array.from(string, c => code[c] || c).join('');
}

console.log(replace('abcdefghijklmnopqrstuvwxyz')); // 'Öyvinfg2019'
