function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">BadBank</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" href="#createAccount" id="createAccount">Create Account</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Login" id="login">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Deposit" id="loadDeposit">Deposit</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Withdraw" id="loadWithdraw">Withdraw</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Balance" id="loadBalance">Balance</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Alldata" id="loadAllData()">AllData</a>
                    </li>
                </ul>
        </div>
    </nav>
    );
};