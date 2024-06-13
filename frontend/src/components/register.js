function Register () {
    return(
        <div id="div-register">
            <h1> Register users </h1>
            <form action="/register_user" method="post">
                <label> Name </label> <input name="name"/> <br/> <br/>
                <label> Lastname </label> <input name="lastname"/> <br/> <br/>
                <label> Id </label> <input name="id"/> <br/> <br/>
                <button> Register </button>
            </form>
        </div>
    )
}

export {Register}