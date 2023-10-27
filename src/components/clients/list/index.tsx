import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { Button } from '../../../ui-library/button';
import { Table } from '../../../ui-library/table';
import { TableContainer } from './styles';
import { Flex } from '../../../ui-library/flex';


interface Record {
  name: string;
  currentPlan: string;
  owner: string;
  date: string;
  trainingDays: number;
  status: string;
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: "25%",
  },
  {
    title: 'Current plan',
    dataIndex: 'currentPlan',
    width: "12%",
  },
  {
    title: 'Owner',
    dataIndex: 'owner',
    width: "12%",
  },
  {
    width: "12%",
    title: 'Last Assigned date',
    dataIndex: 'date',
  },
  {
    width: "12%",
    title: 'Next Training in Days',
    dataIndex: 'trainingDays',
  },
  {
    title: 'Status',
    width: "10%",
    render: (_: string, record: Record) => {
      return (
        <Flex centered>
          <Button type="default" name={record.status} />
        </Flex>
      )
    }
  },
  {
    title: '',
    width: "10%",
    render: (_: string, record: Record) => {
      return (
        <Flex centered>
          <Button type="primary" icon={<FontAwesomeIcon icon={faCalendarDays} />} />
        </Flex>
      )
    }
  },
  {
    title: '',
    render: (_: string, record: Record) => {
      return (<Button type="primary" icon={<FontAwesomeIcon icon={faCommentDots} />} />)
    }
  }
]

const data = new Array(100).fill(0).map(() => (
  {
    name: 'Tomer Capone',
    currentPlan: 'Weight Loss',
    owner: 'John Doe',
    date: '13/10/2023',
    trainingDays: 10,
    status: 'pending',
  }
));


export const ClientsList = () => {

  return (
    <TableContainer>
      <Table columns={columns} dataSource={data} />
    </TableContainer>
  )
}