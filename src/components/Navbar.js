function Navbar({clickAction}){
    return(
        <div className="navbar">
            <img 
            src="https://us.123rf.com/450wm/lumut/lumut1505/lumut150500012/39994162-stock-vector-s-lame-logo.jpg?ver=6"
            alt="Logo"
            className="logo"  />
            <h1>Rotten Manga</h1>
            <button onClick={() => clickAction('user')}>User</button>
            <button onClick={() => clickAction('critic')}>Critic</button>
        </div>
    )
}

export default Navbar