import React, { Component } from 'react';
import './tracker.css';

class Tracker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expenseName: '',
            amount: '',
            expenses: [],
            total: 0,
        };
    }

    handleInputChange = (event) => {
        this.setState({
            
            [event.target.name]: event.target.value,
        });
    };

    // handleAddExpense = () => {
    //     const { expenseName, amount, expenses, total } = this.state;

    //     if (expenseName.trim() === '' || amount.trim() === '') {
    //         alert('Please enter both expense name and amount.');
    //         return;
    //     }

    //     const newExpense = {
    //         id: Date.now(),
    //         expenseName,
    //         amount: parseFloat(amount),
    //     };

    //     this.setState({
    //         expenses: [...expenses, newExpense],
    //         expenseName: '',
    //         amount: '',
    //         total: total + parseFloat(amount),
    //     });

    //     if (total + parseFloat(amount) > 200000) {
    //         alert('Budget exceeds 200,000!');
    //     }
    // };
    handleAddExpense = () => {
        const { expenseName, amount, expenses, total } = this.state;
    
        if (expenseName.trim() === '') {
            alert('Please enter the expense name.');
            return;
        }
    
        const amountValue = parseFloat(amount);
        if (isNaN(amountValue)) {
            alert('Please enter a numerical value for the amount.');
            return;
        }
    
        const newExpense = {
            id: Date.now(),
            expenseName,
            amount: amountValue,
        };
    
        this.setState({
            expenses: [...expenses, newExpense],
            expenseName: '',
            amount: '',
            total: total + amountValue,
        });
    
        if (total + amountValue > 200000) {
            alert('Budget exceeds 200,000!');
        }
    };
    

    handleDeleteExpense = (id) => {
        const { expenses, total } = this.state;
        const expenseToDelete = expenses.find((expense) => expense.id === id);

        this.setState({
            expenses: expenses.filter((expense) => expense.id !== id),
            total: total - expenseToDelete.amount,
        });
    };

    render() {
        const { expenseName, amount, expenses, total } = this.state;

        return (
            <div className="body1">

            <div className="expense-tracker-container">
                <div className="input-section">
                    <h2 className="title">Add Expense</h2>
                    <label htmlFor="expenseName">Expense Name:</label>
                    <input
                        type="text"
                        id="expenseName"
                        name="expenseName"
                        value={expenseName}
                        onChange={this.handleInputChange}
                        required
                        />
                    <label htmlFor="amount">Amount:</label>
                    <input
                        type="text"
                        id="amount"
                        name="amount"
                        value={amount}
                        onChange={this.handleInputChange}
                        required
                        />
                    <button type="button" onClick={this.handleAddExpense}>
                        Add
                    </button>
                </div>

                <div className="table-section">
                    <h2>Expense Table</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Expense Name</th>
                                <th>Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map((expense) => (
                                <tr key={expense.id}>
                                    <td>{expense.expenseName}</td>
                                    <td>{expense.amount}</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={() => this.handleDeleteExpense(expense.id)}
                                            >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="total-section">
                        <strong>Total:</strong> {total}
                    </div>
                </div>
            </div> 
                            </div>
        );
    }
}

export default Tracker;
