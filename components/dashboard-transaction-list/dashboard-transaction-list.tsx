import { Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Link from 'next/link';
import DashboardTransactionCard from '../cards/dashboard-transaction-card/dashboard-transaction-card';
import { format } from 'date-fns';

const DashboardTransactionList = ({ data, mode }: {
    data: Array<{
        id: string;
        description: string;
        timestamp: string;
        amount: string;
        direction: string,
        asset: string
        created_at: string
    }>,
    mode: string
}) => {
    return (
        <div>
            {
                mode == 'recent' &&
                <div className="head d-flex">
                    <div className="title">Recent Transactions</div>
                    <div className="d-flex flex-grow-1 justify-content-end">
                        <Link href="/dashboard/transactions">
                            <a className="view-all">View all</a>
                        </Link>
                    </div>
                </div>
            }

            <div className="mt-2">

                <div className='d-block d-lg-none'>
                    {data.map((row) => (
                        <DashboardTransactionCard key={row.id} amount={row.amount} description={row.description} direction={row.direction} asset={row.asset} time={row.created_at}></DashboardTransactionCard>
                    ))}
                </div>

                <TableContainer className='d-none d-lg-block' component={Paper}>
                    <Table>

                        <TableBody>
                            {data.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell className='transaction-description' >
                                        <div>
                                            <div className='d-flex'>
                                                {
                                                    row.asset == 'NGN' && row.direction == 'debit' &&
                                                    <img className="transaction-image-placeholder" src='/images/send.svg' />
                                                }
                                                {
                                                    row.asset == 'NGN' && row.direction == 'credit' &&
                                                    <img className="transaction-image-placeholder" src='/images/receive.svg' />
                                                }
                                                {
                                                    row.asset != 'NGN' &&
                                                    <div style={{ backgroundImage: "url(" + "https://api.kochure.com/test/static/assets/" + row.asset + '.png' + ")" }} className="transaction-image-placeholder" >
                                                    </div>
                                                }

                                                <div>
                                                    <div className=''>{row.description}</div>
                                                    <div className='tx-time'>{format(new Date(row.created_at), 'MMMM dd, yyyy H:mma')}</div>
                                                </div>
                                            </div>

                                        </div>
                                    </TableCell>
                                    <TableCell>{row.timestamp}</TableCell>

                                    <TableCell align="right">
                                        <span className={`transaction-status ${row.direction}`}>
                                            {
                                                row.direction == 'debit' &&
                                                '-'
                                            }
                                            {
                                                row.direction == 'credit' &&
                                                '+'
                                            }
                                            {
                                                row.asset == 'NGN' &&
                                                '₦'
                                            }
                                            <span>{row.amount} </span>
                                            {
                                                row.asset != 'NGN' &&
                                                row.asset
                                            }
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div >
    )
}

export default DashboardTransactionList