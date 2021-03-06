/* eslint max-len: 0 */
/* eslint no-alert: 0 */
/* eslint guard-for-in: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn, InsertButton } from 'react-bootstrap-table';


const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(5);

function onAfterInsertRow(row) {
  let newRowStr = '';
  for (const prop in row) {
    newRowStr += prop + ': ' + row[prop] + ' \n';
  }
  alert('The new row is:\n ' + newRowStr);
}

const tmp = {
  id: 'f123',
  name : 'foo',
  price : 'foobar'
}


export default class InsertRowTable extends React.Component {

  handleInsertButtonClick = (onClick) => {
    onClick();
  }

  createCustomInsertButton = (onClick) => {
    return (
        <InsertButton
          noModal={ true }
          btnText='CustomInsertText'
          onClick={ () => this.handleInsertButtonClick(onClick) }/>
    );
  }

  render() {
    const options = {
      insertBtn: this.createCustomInsertButton
    };
    return (
      <BootstrapTable data={ products } insertRow={ true } options={ options }  >
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
