import React from 'react';
import { FaUser } from "react-icons/fa6";

const AddedViewTable = ({ arr, selectedIds, setSelectedIds }) => {
    const handleSelect = (id) => {
        const index = selectedIds.indexOf(id);
        if (index === -1) {
            // Agregar el ID si no está seleccionado
            setSelectedIds([...selectedIds, id]);
        } else {
            // Quitar el ID si ya está seleccionado
            const newSelectedIds = [...selectedIds];
            newSelectedIds.splice(index, 1);
            setSelectedIds(newSelectedIds);
        }
    };

    const calculateAge = (birthDate) => {
        return new Date().getFullYear() - new Date(birthDate).getFullYear();
    };

    return (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="h-full text-xs text-gray-400 uppercase bg-stone-100">
                <tr>
                    <th scope="col" className="p-4">ID</th>
                    <th scope="col" className="px-3 py-3">Nombre</th>
                    <th scope="col" className="px-3 py-3">Edad</th>
                    <th scope="col" className="px-3 py-3">Contacto</th>
                    <th scope="col" className="px-3 py-3">Ingreso</th>
                    <th scope="col" className="px-3 py-3">Guía</th>
                    <th scope="col" className="px-3 py-3">Área</th>
                </tr>
            </thead>
            <tbody>
                {arr.length > 0 ? (
                    arr.map((e, i) => (
                        <tr
                            key={i}
                            onClick={() => handleSelect(i)}
                            className={`cursor-pointer ${selectedIds.includes(i) ? 'bg-blue-100' : ''} border-b border-gray-300 hover:bg-blue-100 text-sm whitespace-nowrap`}
                        >
                            <td className="w-4 p-">{i + 1}</td>
                            <td scope="row" className="items-center flex px-3 py-2 text-gray-900 dark:text-white">
                                <FaUser className="text-slate-500 size-3 mx-1 " />
                                <div className="font-semibold text-gray-500">
                                    {e.name} {e.last_name}
                                </div>
                            </td>
                            <td className="px-3 py-2">{calculateAge(e.date_birth)}</td>
                            <td className="px-3 py-2">{e.contact}</td>
                            <td className="px-3 py-2">
                            {
                                e.date_joining
                                ? new Intl.DateTimeFormat('es-AR', { dateStyle: 'medium' }).format(new Date(e.date_joining))
                                : ""
                            }
                            </td>
                            <td className="px-3 py-2">
                                {e.cell?.label ? e.cell.label : e.name_guide + " " + e.last_name_guide} {/* Si cell.label existe y tiene valor, lo muestra; si no, muestra el nombre y apellido del guía */}
                            </td>
                            <td className=" px-3 py-2">
                                {e.area?.label ? e.area.label : e.area_name} {/* Si area.label existe y tiene valor, lo muestra; si no, muestra el nombre del área */}
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="7" className="text-center p-4 text-gray-400">No hay datos</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default AddedViewTable;