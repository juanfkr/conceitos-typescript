// permite a mistura de dois ou mais tipos
type ID = number | string;

// type narrowing: quando dois ou mais membros (tipos) de um parâmetro não possuem um método em comum
// é necessário fazer a validação do tipo
function print(value: string | number) {
    if(typeof value === "string") {
        return value.toUpperCase();
    }
    return value;
}''