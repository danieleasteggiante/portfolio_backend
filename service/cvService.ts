import pdf from 'pdf-creator-node';
import fs from 'fs';
import path from 'path';


const config = {
    format: "A4",
    orientation: "portrait",
    border: "0mm",
}

let htmlTemplate = fs.readFileSync(path.join(__dirname, '../pdfs/template.html'), 'utf8');
import {cvObject} from '../models/CVContent';

export function getCV() {
    return cvObject;
}

export async function createPDF(): Promise<string> {
    const pathGenerated = path.join(__dirname, "../pdfs/output/cvDanieleAsteggiante.pdf");
    const profileImagePath = fs.readFileSync(path.join(__dirname, '../pdfs/profile.png'));
    const document = {
        format: "A4",
        orientation: "portrait",
        border: "50mm",
        html: htmlTemplate,
        data: {
            cv: cvObject,
            image : profileImagePath.toString('base64')
        },
        path: pathGenerated,
    }
    return pdf.create(document, config)
        .then((res: any) => {
            console.log(res);
            return Promise.resolve(pathGenerated);
        })
        .catch((error: any) => {
            return Promise.reject(error);
        });
}