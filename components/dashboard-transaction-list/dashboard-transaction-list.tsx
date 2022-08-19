import { Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Link from 'next/link';

const DashboardTransactionList = ({ data }: { data: Array<{
        id: string;
        description: string;
        timestamp: string;
        amount: string;
        status: string
    }>
}) => {
    return (
        <div>
            <div className="head d-flex">
                <div className="title">Recent Transactions</div>
                <div className="d-flex flex-grow-1 justify-content-end">
                    <Link href="/dashboard">
                        <a className="view-all">View all</a>
                    </Link>
                </div>
            </div>

            <div className="mt-2">
                <TableContainer component={Paper}>
                    <Table>

                        <TableBody>
                            {data.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell className="transaction-description" >
                                        {row.description}
                                    </TableCell>
                                    <TableCell>{row.timestamp}</TableCell>
                                    <TableCell>
                                        <span className="transaction-amount">{row.amount}</span>
                                    </TableCell>
                                    <TableCell align="right">
                                        <span className={`transaction-status ${row.status == 'Success' ? 'success' : 'pending'}`}>
                                            {row.status}
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default DashboardTransactionList