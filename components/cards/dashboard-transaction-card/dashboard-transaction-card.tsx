import styles from './dashboard-transaction-card.module.css';
import { format } from 'date-fns'

const DashboardTransactionCard = ({ description, direction, amount, asset, time }: { description: string, direction: string, amount: string, asset: string, time: string }) => {
    return (
        <div className={styles.dashboardTransactionCard}>
            <div className={styles.description}>
                <div>
                    <div className={styles.title}>{description}</div>
                    <div className={styles.timestamp}>{format(new Date(time), 'MMMM dd, yyyy H:mma')}</div>
                </div>
            </div>
            <div className={styles.info}>
                <div className='mt-2'>
                    <span className={`transaction-status ${direction}`}>
                        {
                            direction == 'debit' &&
                            '-'
                        }
                        {
                            direction == 'credit' &&
                            '+'
                        }
                        {
                            asset == 'NGN' &&
                            '₦'
                        }
                        <span>{amount} </span>
                        {
                            asset != 'NGN' &&
                            asset
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DashboardTransactionCard