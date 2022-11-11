import React from "react";

type NewComponentType = {
    // students: Array<StudentType>
    students: StudentType[]
}

type StudentType = {
    id: number,
    name: string,
    age: number
}


const NewComponent = (props: NewComponentType) => {
    return (

        <ul>
            {props.students.map((ObjectFromStudentArray, index)=>{

                return(
                    <li key={ObjectFromStudentArray.id}>
                        <span>{ObjectFromStudentArray.name}</span>
                        <span> age: {ObjectFromStudentArray.age}</span>
                        </li>
                )
            })}

        </ul>
    )
}

export default NewComponent