function numbernp() {
    let value = prompt("input", "0");
    let number = parseInt(value);
    let resultat = "";

    if (number >= 0) {
        resultat = "P";
    } else {
        resultat = "N";
    }

    document.write(resultat);

    return resultat;
}
numbernp()