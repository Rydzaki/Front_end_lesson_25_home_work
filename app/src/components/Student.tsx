type Assessment = number[];

//const rendomAsses:Assessment = [5, 4, 5, 3, 2, 4, 5, 4]

type Props = {
    firstName: string,
    lastName: string,
    assessment: Assessment
}

function Student({firstName, lastName, assessment}:Props){
    return(
        <div>
            <p>name: {firstName}</p>
            <p>last name: {lastName}</p>
            <p>average assessment: {assessment.reduce((acc, score) =>acc + score, 0) / assessment.length}</p>
        </div>
    )
}

export default Student