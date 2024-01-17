import validaIEAC from "./validaIEAC";
import validaIEAL from "./validaIEAL";
import validaIEAM from "./validaIEAM";
import validaIEAP from "./validaIEAP";
import validaIEBA from "./validaIEBA";
import validaIECE from "./validaIECE";
import validaIEDF from "./validaIEDF";
import validaIEES from "./validaIEES";
import validaIEGO from "./validaIEGO";
import validaIEMA from "./validaIEMA";
import validaIEMG from "./validaIEMG";
import validaIEMS from "./validaIEMS";
import validaIEMT from "./validaIEMT";
import validaIEPA from "./validaIEPA";
import validaIEPB from "./validaIEPB";
import validaIEPE from "./validaIEPE";
import validaIEPI from "./validaIEPI";
import validaIEPR from "./validaIEPR";
import validaIERJ from "./validaIERJ";
import validaIERN from "./validaIERN";
import validaIERO from "./validaIERO";
import validaIERR from "./validaIERR";
import validaIERS from "./validaIERS";
import validaIESC from "./validaIESC";
import validaIESE from "./validaIESE";
import validaIESP from "./validaIESP";
import validaIETO from "./validaIETO";

function validarInscricaoEstadual(inscricao, estado) {

    inscricao = inscricao.replace(/\D/g, '');
    
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

