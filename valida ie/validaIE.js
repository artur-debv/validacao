import validaIEAC from "./validaIEAC.js";
import validaIEAL from "./validaIEAL.js";
import validaIEAM from "./validaIEAM.js";
import validaIEAP from "./validaIEAP.js";
import validaIEBA from "./validaIEBA.js";
import validaIECE from "./validaIECE.js";
import validaIEDF from "./validaIEDF.js";
import validaIEES from "./validaIEES.js";
import validaIEGO from "./validaIEGO.js";
import validaIEMA from "./validaIEMA.js";
import validaIEMG from "./validaIEMG.js";
import validaIEMS from "./validaIEMS.js";
import validaIEMT from "./validaIEMT.js";
import validaIEPA from "./validaIEPA.js";
import validaIEPB from "./validaIEPB.js";
import validaIEPE from "./validaIEPE.js";
import validaIEPI from "./validaIEPI.js";
import validaIEPR from "./validaIEPR.js";
import validaIERJ from "./validaIERJ.js";
import validaIERN from "./validaIERN.js";
import validaIERO from "./validaIERO.js";
import validaIERR from "./validaIERR.js";
import validaIERS from "./validaIERS.js";
import validaIESC from "./validaIESC.js";
import validaIESE from "./validaIESE.js";
import validaIESP from "./validaIESP.js";
import validaIETO from "./validaIETO.js";

const estado = 'ac';
let inscricao = "01.004.823/001-12";

function validarInscricaoEstadual(estado, inscricao) {

    let resultado;

    switch (estado.toUpperCase()) {
        case 'AC':
            resultado = validaIEAC(inscricao);
            break;
        case 'AL':
             resultado = validaIEAL(inscricao);
            break;
        case 'AP':
             resultado = validaIEAP(inscricao);
            break;
        case 'AM':
             resultado = validaIEAM(inscricao);
            break;
        case 'BA':
             resultado = validaIEBA(inscricao);
            break;
        case 'CE':
             resultado = validaIECE(inscricao);
            break;
        case 'DF':
             resultado = validaIEDF(inscricao);
            break;
        case 'ES':
resultado = validaIEES(inscricao);
            break;
        case 'GO':
             resultado = validaIEGO(inscricao);
            break;
        case 'MA':
             resultado = validaIEMA(inscricao);
            break;
        case 'MT':
             resultado = validaIEMT(inscricao);
            break;
        case 'MS':
             resultado = validaIEMS(inscricao);
            break;
        case 'MG':
             resultado = validaIEMG(inscricao);
            break;
        case 'PA':
             resultado = validaIEPA(inscricao);
            break;
        case 'PB':
             resultado = validaIEPB(inscricao);
            break;
        case 'PR':
             resultado = validaIEPR(inscricao);
            break;
        case 'PE':
             resultado = validaIEPE(inscricao);
            break;
        case 'PI':
             resultado = validaIEPI(inscricao);
            break;
        case 'RJ':
resultado = validaIERJ(inscricao);
            break;
        case 'RN':
             resultado = validaIERN(inscricao);
            break;
        case 'RS':
             resultado = validaIERS(inscricao);
            break;
        case 'RO':
             resultado = validaIERO(inscricao);
            break;
        case 'RR':
             resultado = validaIERR(inscricao);
            break;
        case 'SC':
             resultado = validaIESC(inscricao);
            break;
        case 'SP':
             resultado = validaIESP(inscricao);
            break;
        case 'SE':
             resultado = validaIESE(inscricao);
            break;
        case 'TO':
             resultado = validaIETO(inscricao);
            break;
        default:
            console.error('Estado não suportado para validação.');
            return false;
    }

    return resultado
}

console.log(validarInscricaoEstadual(estado, inscricao))