import Modal from '../UI/Modal';
// import CartItem from './CartItem';
import classes from './Cart.module.css';
// import CartContext from '../../store/cart-context';

const Cart = (props) => {
    const cardItems = [];

    return (
        <Modal onClose={props.onClose}>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>3</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>
                    Close
          </button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;