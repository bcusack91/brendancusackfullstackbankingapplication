function Balance(){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');  
  
    return (
      <Card
        bgcolor="warning"
        header="Balance"
        status={status}
        body={show ?
          <BalanceForm setShow={setShow} setStatus={setStatus}/> :
          <BalanceMsg setShow={setShow}/>}
      />
    )
  
  }
let bal_2 = null;
  function BalanceMsg(props){
    return(<>
      <h5>Success</h5>
      <h6 id="balance_head">{`Your balance is: ${bal_2}`}</h6>
      <button type="submit" 
        className="btn btn-light" 
        onClick={() => props.setShow(true)}>

            Check balance again
      </button>
    </>);
  }
  
  function BalanceForm(props){
    const [email, setEmail]   = React.useState('');
    //const [balance, setBalance] = React.useState('');  
    const ctx = React.useContext(UserContext);  
  
    function handle(){
      /*const user = ctx.users.find((user) => user.email == email);
      if (!user) {
        props.setStatus('fail!')      
        return;      
      }
  
      setBalance(user.balance);
      console.log(user);
      */

      //let bal_2 = null;
      const url=`/account/balance/${email}`;
      (async () => {
        var res = await fetch(url);
        const data = await res.json();
        console.log(data)
        bal_2 = JSON.stringify(data.balance);
        console.log(bal_2);
        //props.setStatus('Your balance is: ' + data.balance);
        //props.setShow(false);
      })().then(() => {   
        console.log(bal_2);
        //props.setStatus(`Your balance is: ${bal_2}`);
        props.setShow(false);
      }
        );

    }
  
    return (<>
  
      Email<br/>
      <input type="input" 
        className="form-control" 
        placeholder="Enter email" 
        value={email} 
        onChange={e => setEmail(e.currentTarget.value)}/><br/>
  
      <button type="submit" 
        className="btn btn-light" 
        onClick={handle}>
          Check Balance
      </button>
  
    </>);
  }