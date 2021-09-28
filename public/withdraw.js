function Withdraw() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');

    return (
        <Card
            bgcolor="info"
            header="Withdraw"
            status={status}
            body={show ?
                <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
                <WithdrawMsg setShow={setShow} />}
        />
    )
}

function WithdrawMsg(props) {
    return (<>
    <h5>Withdraw Successful!</h5>
    <button 
        type="submit"
        className="btn btn-light"
        onClick={() => props.setShow(true)}>
            Withdraw Again
        </button>
    </>);
}

function WithdrawForm(props) {
    const [email, setEmail]   = React.useState('');
    const [amount, setAmount] = React.useState('');
    const ctx = React.useContext(UserContext);

    function handle(){
        /*console.log(email,amount);
        const user = ctx.users.find((user) => user.email == email);
        if (!user) {
          props.setStatus('fail!');
          return;      
        }
    
        user.balance = user.balance - Number(amount);
        console.log(user);*/

        console.log(email, amount);
        const url = `/account/withdraw/${email}/${amount}`;
            (async () => {
                var res = await fetch(url);
                var data = await res.json();
                console.log(data)})();
                props.setShow(false);
            
        props.setStatus('');      
        props.setShow(false);
    }

    return (<>
    
        Email<br/>
        <input 
            type="input"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}/><br/>
        
        Amount<br/>
        <input
            type="number"
            className="form-control"
            placeholder="Enter Amount"
            value={amount}
            onChange={e => setAmount(e.currentTarget.value)}/><br/>

        <button type="submit"
            className="btn btn-light"
            onClick={handle}>Withdraw</button>
    </>);
}