import React from 'react'

class SushiWallet extends React.Component {
    state = {
        amount: 0
    }

    handleAmount = (e) => {
        console.log(e.target.value)
        this.setState({
            amount: parseInt(e.target.value, 10)
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleAmountChange(this.state.amount)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleAmount} type="number"/>
                    <button>More Money Please!</button>
                </form>
            </div>
        )
    }
}

export default SushiWallet;