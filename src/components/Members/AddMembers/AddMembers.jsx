import React, { useEffect, useState } from 'react';
import Table from '../../Shared/Table';
import AddMemberForm from './AddMemberForm';
import AddedView from './AddedView';

const AddMembers = () => {

    const listProv = [
        {
            name: 'Matias',
            last_name: 'Martinez',
            date_birth: '1998-08-02',
            date_joining: '1998-08-02',
            baptism: '',
            contact: '',
            church_school: false,
            bible_institute: false,
            another_church: '',
            cell: '',
            area: '',
        },
        {
            name: 'Matias',
            last_name: 'Martinez',
            date_birth: '1998-08-02',
            date_joining: '1998-08-02',
            baptism: '',
            contact: '',
            church_school: false,
            bible_institute: false,
            another_church: '',
            cell: '',
            area: '',
        },
        {
            name: 'Matias',
            last_name: 'Martinez',
            date_birth: '1998-08-02',
            date_joining: '1998-08-02',
            baptism: '',
            contact: '',
            church_school: false,
            bible_institute: false,
            another_church: '',
            cell: '',
            area: '',
        },
        {
            name: 'Matias',
            last_name: 'Martinez',
            date_birth: '1998-08-02',
            date_joining: '1998-08-02',
            baptism: '',
            contact: '',
            church_school: false,
            bible_institute: false,
            another_church: '',
            cell: '',
            area: '',
        },
        {
            name: 'Matias',
            last_name: 'Martinez',
            date_birth: '1998-08-02',
            date_joining: '1998-08-02',
            baptism: '',
            contact: '',
            church_school: false,
            bible_institute: false,
            another_church: '',
            cell: '',
            area: '',
        },
    ]
    const [membersList, setMembersList] = useState(listProv);  // Lista para almacenar miembro

    
    useEffect(() => {
        console.log(membersList);
//        setMembersList(listProv);
    }, [membersList]);

    return (
        <div className='flex justify-between h-[95%]'>
            <div className="flex flex-col justify-between w-[50%]">
                <div className="bg-white overflow-auto h-[90%] rounded-md">
                    <AddMemberForm setList={setMembersList} list={membersList}/>
                </div>
            </div>
            <div className="flex-col flex justify-around h-[100%] w-[49%] rounded-md">
                <div className="h-[56%] bg-white">
                    <AddedView title={"Lista a añadir"} setList={setMembersList} list={membersList}/>
                </div>
                <div className="bg-white overflow-auto h-[40%] rounded-md">
                    <AddedView title={"Agregados Recientemente"} /> {/* para agregados recientemente, hacer una llamada a la base filtrando por fecha de agregacion*/}
                </div>
            </div>
        </div>
    )
}

export default AddMembers;