const Header = ({title, value}) => {
   // const { title } = props; // { title : title }
    return (
        <header>
            <h1>{title}</h1>
            <h2>{value}</h2>
        </header>
    );
};

export default Header;