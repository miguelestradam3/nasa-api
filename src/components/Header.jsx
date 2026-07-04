function Header({ title }) {
    return (

        <header className="bg-dark text-white py-4 shadow">

            <div className="container">

                <h1 className="text-center m-0">
                    {title}
                </h1>

            </div>

        </header>

    );
}

export default Header;