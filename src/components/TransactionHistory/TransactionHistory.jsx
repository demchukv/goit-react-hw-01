import PropTypes from 'prop-types';
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

TransactionHistory.propTypes = {
    items: PropTypes.array,
};
TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
};

export default TransactionHistory;