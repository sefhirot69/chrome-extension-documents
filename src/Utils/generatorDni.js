import calculateLetter from "./calculateLetter";
import utilsChainsPad from "./utilsChainsPad";

const generatorDni = ()  => {
    const numberRandom = Math.floor(1e8 * Math.random());
    return utilsChainsPad(numberRandom.toString(),8)+calculateLetter(numberRandom);
};

export default generatorDni;