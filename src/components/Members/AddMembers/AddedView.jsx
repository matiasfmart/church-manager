import React, { useState, useEffect } from 'react';
import AddedViewTable from './AddedViewTable';
import { addMembers } from '../../../services/membersService';
import useFetch from '../../../hooks/useFetch';
import { processMembersList } from '../../../logic/memberLogic';

const AddedView = ({ title, setList, list = [] }) => {

    const [deleteBtn, setDeleteBtn] = useState();
    const [selectedId, setSelectedId] = useState([]);

    const removeItemSelected = () => {
        setList(list.filter((_, index) => !selectedId.includes(index)));
    };

    const pushMembers = async () => {
        try {
            const data = await addMembers(processMembersList(list));
            console.log(data);
        } catch (error) {
           //console.error('Error al agregar miembros:', error);
        }
    };
    
    return (
        <div className="p-4 h-full flex flex-col justify-around">
            <h1 className="mb-2 font-bold text-gray-600">{title}</h1>
            <div className='overflow-auto h-[75%]'>
                <AddedViewTable arr={list} flagBtn={setDeleteBtn} selectedId={selectedId} setSelectedId={setSelectedId}/>
            </div>

            <div className="flex justify-end">
                    <button
                            id="dropdownActionButton"
                            data-dropdown-toggle="dropdownAction"
                            className="inline-flex m-1 text-white bg-red-600 font-medium rounded-lg text-xs px-2.5 py-2.5 border border-red-600 hover:bg-white hover:text-red-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-red-300 disabled:hover:text-white disabled:border-red-300"
                            type="button"
                            onClick={() => removeItemSelected()}
                            disabled={!deleteBtn} // Directamente deshabilitado
                    >
                        Quitar de la lista
                    </button>
                    <button
                        id="dropdownActionButton"
                        data-dropdown-toggle="dropdownAction"
                        className="inline-flex m-1 text-white bg-blue-600 font-medium rounded-lg text-xs px-2.5 py-2.5 border border-blue-600 hover:bg-white hover:text-blue-600"
                        type="button"
                        onClick={() => pushMembers()}
                    >
                        Agregar miembros
                    </button>
            </div>
        </div>
    );
};

export default AddedView;
