import * as XLSX from "xlsx";

export const importSheet = (event: Event) => {
  const selectedFile = event.target?.files[0];
  const importedData: any[] = [];

  // if (selectedFile) {
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    
    fileReader.onload = (event: Event) => {
      let data = event.target?.result;

      let workBook = XLSX.read(data, { type: "binary" });

      workBook.SheetNames.forEach((sheet) => {
        let rowObject = XLSX.utils.sheet_to_json(workBook.Sheets[sheet]);
        importedData.push(...rowObject);

        console.log("2", importedData);
      });
    };
  // }

//   setTimeout(function () {
    console.log("3", importedData);
//   }, 400);

  return importedData;
};
