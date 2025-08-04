import {ClassRegistry} from "./types";
import {arqueiro, barbaro, gladiador, lanceiro, legionario,} from "./guerreiros";
import {druida, monge, clerigo, paladino} from "./divinos";
import {assassino, bardo, ladrao, espiao, desbravador} from "./ladinos";
import {ilusionista, mago, necromante, psionico} from "./arcanos";

const classes: ClassRegistry = {
    // Classes guerreiras
    arqueiro,
    legionario,
    barbaro,
    gladiador,
    lanceiro,

    // Classes divinas
    druida,
    monge,
    clerigo,
    paladino,

    // Classes ladinas
    assassino,
    bardo,
    desbravador,
    espiao,
    ladrao,

    // Classes arcanas
    ilusionista,
    mago,
    necromante,
    psionico,
};

export default classes;