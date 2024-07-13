import React from 'react';
import MaterialTable from 'material-table';

function Table() {
  return (
    <MaterialTable
      title="Example Table"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      ]}
      data={[
        { name: 'John', surname: 'Doe', birthYear: 1987 },
        { name: 'Jane', surname: 'Doe', birthYear: 1990 },
      ]}
    />
  );
}

export default Table;