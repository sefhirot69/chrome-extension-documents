const generatorDni = ()  => {
    const numberRandom = Math.floor(1e8 * Math.random());
    const string = 'TRWAGMYFPDXBNJZSQVHLCKE';
    return numberRandom+string.charAt(numberRandom%23);
};

export default generatorDni;