/*import PropTypes from 'prop-types';
import clsx from "clsx";*/
import css from './TransactionHistory.module.css';

const TransactionHistoryItem = ({type, amount, currency}) => {
    return (
        <>
        <td className={css.transtype}>{type}</td>
        <td className={css.transamount}>{amount}</td>
        <td className={css.transcurrency}>{currency}</td>
      </>
    );
}

const TransactionHistory = ({items}) => {
    return (
        <table className={css.transtable}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            {items.map(({ id, type, amount, currency }) => {
                return (
                <tr key={id}>
                    <TransactionHistoryItem type={type} amount={amount} currency={currency} />
                </tr>
                );
            })}
          </tbody>
        </table>
    );
}

export default TransactionHistory;