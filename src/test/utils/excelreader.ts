import * as XLSX from "xlsx"

export class ExcelReader {

    static getData(sheetName: string) {
        const workbook = XLSX.readFile("../data_files/");
        const worksheet = workbook.Sheets[sheetName];

        return XLSX.utils.sheet_to_json(worksheet);
    }
}