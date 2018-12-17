import React, { Component } from "react";
import { Table } from 'antd';

const columns = [
  { title: 'ID#', dataIndex: 'id', fixed: 'left', width: 100 },
  { title: 'Name', dataIndex: 'name', fixed: 'left', width: 200 },
  { title: 'Phone No.', dataIndex: 'phone', width: 300 },
  { title: 'Address', dataIndex: 'address', width: 500 },
  { title: 'Remark', dataIndex: 'remark', width: 500 },
  { title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => (
      <a href="javascript:;">Action</a>
    )
  }
]
const dataSource = new Array(20).fill(0).map((elmt, idx) => ({
  id: idx + 1,
  name: 'Marco-' + (idx + 1).toString().padStart(4, '0'),
  address: 'A enigmatic place that far far away.',
  phone: '+86-138-0013-8000',
  remark: 'Lorem ipsum dolor sit amet.'
}))

export default class AntdTable extends Component {
  render() {
    return (
      <Table
        className="antd-table"
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: 1700, y: 240 }} />
    )
  }
}
