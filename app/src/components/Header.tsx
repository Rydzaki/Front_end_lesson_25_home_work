type Props = {
    text:string
};

function Header({text}:Props){
    return(
        <h1>{text}</h1>
    )
}

export default Header;