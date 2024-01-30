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

    switch (estado.toUpperCase()) {
        case 'AC':
            validaIEAC(inscricao);
            break;
        case 'AL':
            validaIEAL(inscricao);
            break;
        case 'AP':
            validaIEAP(inscricao);
            break;
        case 'AM':
            validaIEAM(inscricao);
            break;
        case 'BA':
            validaIEBA(inscricao);
            break;
        case 'CE':
            validaIECE(inscricao);
            break;
        case 'DF':
            validaIEDF(inscricao);
            break;
        case 'ES':
            validaIEES(inscricao);
            break;
        case 'GO':
            validaIEGO(inscricao);
            break;
        case 'MA':
            validaIEMA(inscricao);
            break;
        case 'MT':
            validaIEMT(inscricao);
            break;
        case 'MS':
            validaIEMS(inscricao);
            break;
        case 'MG':
            validaIEMG(inscricao);
            break;
        case 'PA':
            validaIEPA(inscricao);
            break;
        case 'PB':
            validaIEPB(inscricao);
            break;
        case 'PR':
            validaIEPR(inscricao);
            break;
        case 'PE':
            validaIEPE(inscricao);
            break;
        case 'PI':
            validaIEPI(inscricao);
            break;
        case 'RJ':
            validaIERJ(inscricao);
            break;
        case 'RN':
            validaIERN(inscricao);
            break;
        case 'RS':
            validaIERS(inscricao);
            break;
        case 'RO':
            validaIERO(inscricao);
            break;
        case 'RR':
            validaIERR(inscricao);
            break;
        case 'SC':
            validaIESC(inscricao);
            break;
        case 'SP':
            validaIESP(inscricao);
            break;
        case 'SE':
            validaIESE(inscricao);
            break;
        case 'TO':
            validaIETO(inscricao);
            break;
        default:
            console.error('Estado não suportado para validação.');
            return false;
    }
}


console.log(validarInscricaoEstadual(estado, inscricao))