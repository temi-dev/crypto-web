import styles from './dashboard-transaction-card.module.css';

const DashboardTransactionCard = ({ description, direction, amount }: { description: string, direction: string, amount: string }) => {
    return (
        <div className={styles.dashboardTransactionCard}>
            <div className={styles.description}>
                <div>
                    <div className={styles.title}>{description}</div>
                    <div className={styles.timestamp}>Jan 16, 2022</div>
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
                        <span>{amount}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DashboardTransactionCard