type Props = {
    text: string
};

function BTN ({text}:Props){

    return(
        <div>
            <p>
            <button>{text}</button>
            </p>           
        </div>
    )
}

export default BTN