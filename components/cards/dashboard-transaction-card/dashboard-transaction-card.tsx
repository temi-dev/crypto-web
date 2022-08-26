import styles from './dashboard-transaction-card.module.css';

const DashboardTransactionCard = ({ status }: { status: string }) => {
    return (
        <div className={styles.dashboardTransactionCard}>
            <div style={{ backgroundImage: "url(" + "/images/profile.png" + ")" }} className={styles.imagePlaceholder}>
            </div>
            <div className={styles.description}>
                <div>
                    <div className={styles.title}>Bitcoin transaction</div>
                    <div className={styles.timestamp}>Jan 16, 2022</div>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.price}>-₦140,000</div>
                <div className='mt-2'>
                    <span className={`transaction-status ${status == 'Success' ? 'success' : 'pending'}`}>
                        {status}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DashboardTransactionCard