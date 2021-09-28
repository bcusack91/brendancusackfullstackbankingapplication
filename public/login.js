function Login() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');

    return (
        <Card
            bgcolor="primary"
            header="Login"
            status={status}
            body={show ?
                <CreateLoginForm setShow={setShow} /> :
                <CreateLoginMsg setShow={setShow} />}
        />
    )
}

function CreateLoginMsg(props) {
    return (<>
    <h5>Login Successful!</h5>
    </>);
}

function CreateLoginForm(props) {
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);

    function handle() {
        console.log(email, password);
        ctx.users.push({email,password});
        props.setShow(false);
    }
    return (<>
    
        Email address<br/>
        <input 
            type="input"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}/><br/>
        
        Password<br/>
        <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}/><br/>

        <button type="submit"
            className="btn btn-light"
            onClick={handle}>Login</button>
    </>);
}