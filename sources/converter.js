module.exports = function (hexa) {
    if (hexa[0] != '#')
        return 'Hash missing';
    else if (hexa.length != 7)
        return 'Wrong Format';

    hexa = hexa.toUpperCase().match(/([0-9-A-F]{2})/g);

    if (hexa.length != 3)
        return 'Error';

    return [parseInt(hexa[0], 16), parseInt(hexa[1], 16), parseInt(hexa[2], 16)];
};
