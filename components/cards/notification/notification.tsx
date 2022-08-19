import { ActivityFilledIcon, DownloadFilledIcon, WalletDepositFilledIcon } from '../../icons/icons';
import styles from './notification.module.css';

const NotificationCard = ({ title, description, timestamp, amount, type }: { title: string, description: string, timestamp: string, amount: string, type: string }) => {
    return (
        <div className={styles.notificationCard}>
            <div className='icon-holder'>
                {
                    type == 'debit' && (
                        <ActivityFilledIcon fillColor='#194BFB' color='white'></ActivityFilledIcon>
                    )
                }
                {
                    type == 'credit' && (
                        <DownloadFilledIcon fillColor='#194BFB' color='white'></DownloadFilledIcon>
                    )
                }
                {
                    type == 'deposit' && (
                        <WalletDepositFilledIcon fillColor='#194BFB' color='white'></WalletDepositFilledIcon>
                    )
                }
                
            </div>
            <div className={styles.content}>
                <div>
                    <div className={styles.notificationCardTitle}>{title}</div>
                    <div>
                        <span className={styles.notificationCardDescription}> {description}</span>
                        <span className={styles.separator}> - </span>
                        <span className={styles.notificationCardTimestamp}>{timestamp}</span>
                    </div>

                </div>
            </div>
            <div className={styles.amount}>
                {
                    type == 'debit' && (
                        <span className={styles.debit}>{amount}</span>
                    )
                }
                {
                    type == 'credit' && (
                        <span className={styles.credit}>{amount}</span>
                    )
                }
                {
                    type == 'deposit' && (
                        <span className={styles.deposit}>{amount}</span>
                    )
                }
            </div>
        </div>
    )
}
export default NotificationCard