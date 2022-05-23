import React from 'react';

export default props =>{

    const rows = props.cats.map(cat=>{
            return(
                <tr key={cat.id}>
                    <td>{cat.id}</td>
                    <td>{cat.name}</td>
                    <td>{cat.age}</td>
                    <td>{cat.pelagem}</td>
                    <td>
                        <button type='button' title='Editar' className='btn btn-info' onClick={e =>props.edit()}>
                            <i className='pi pi-pencil'></i>
                        </button>
                        <button type='button' title='Excluir' className='btn btn-danger' onClick={e =>props.delete(cat.id)}>
                            <i className='pi pi-trash'></i>
                        </button>
                    </td>
                </tr>

            )
        }

    )

    return(
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='col'>Id</th>
                    <th scope='col'>Nome</th>
                    <th scope='col'>Idade</th>
                    <th scope='col'>Pelagem</th>
                    <th scope='col'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}