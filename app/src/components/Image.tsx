type Props = {
    url:string;
};

function Image ({url}:Props){
    return(
        <div>
            <img src={url} alt="batman" />
        </div>
        
    )
}

export default Image;