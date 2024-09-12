import * as fs from 'fs';
import {randomString} from './random-string';

interface IUniqueName {
    tmpPrefix?: boolean;
    tokenLength?: number;
    datePrefix?: boolean;
}

export const uniqueName = (options: IUniqueName = { tmpPrefix: true, tokenLength: 32, datePrefix: true }) => {
    // Creo un random name para el fichero temporal
    // Seteo el flag del bucle a true para iniciarlo y hacer la primera comprobacion
    let randomTmpName: string = `${options.tmpPrefix ? 'mftmp-' : ''}${randomString({ tokenLength: options.tokenLength, datePrefix: options.datePrefix})}}`;
    let existTmpFile: boolean = true;

    // Se comprueba si ya existe un fichero con el 1º nombre generado
    // De ser así, se vuelve a generar un nuevo nombre aleatorio
    // La salida del bucle siempre la marca 'fs.existsSync' con el nuevo nombre generado
    while (existTmpFile) {
        existTmpFile = fs.existsSync(`./${randomTmpName}`);
        if (existTmpFile) {
            randomTmpName = `${options.tmpPrefix ? 'mftmp-' : ''}${randomString({ tokenLength: options.tokenLength, datePrefix: options.datePrefix})}}`;
        }
    }

    return randomTmpName;
}