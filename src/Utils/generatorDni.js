import calculateLetter from "./calculateLetter";
import chainsPad from "./chainsPad";

const generatorDni = ()  => {
    const numberRandom = Math.floor(1e8 * Math.random());
    return chainsPad(numberRandom.toString(),8)+calculateLetter(numberRandom);
};

export default generatorDni;