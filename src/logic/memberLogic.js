import { getAllMembers } from "../services/membersService";

export const getAllProcessMembers = async () => {
    try {
      // Espera a que la llamada al servicio obtenga los datos
      const data = await getAllMembers();
    
      // Procesa los datos obtenidos
      const processedData = {
        ...data,
        additionalField: 'some value'
      };
    
      return processedData;
    } catch (error) {
      console.error("Error processing data", error);
      throw error; // Propaga el error para que sea manejado en la capa superior
    }
}

export const processMembersList = (dataList) => {
  const data = dataList.map((data) => ({
    "name": data.name,
    "last_name": data.last_name,
    "date_birth": data.date_birth,
    "date_joining": data.date_joining,
    "baptism": "2022-06-10",
    "contact": parseInt(data.contact),
    "church_school": data.church_school,
    "bible_institute": data.bible_institute,
    "another_church": data.another_church,
    "cell": data.cell.value,
    "area": data.area.value
}));
console.log(data);
  return data;
};
 

function processMembers(data){
    data.forEach(e => {
        e.id_area
    });
}