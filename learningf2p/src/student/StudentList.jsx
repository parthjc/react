import React, { useContext } from 'react'
import { AppContext } from './context'
import { SubStudentList } from './SubStudentList'

export const StudentList = () => {
    const {students,studentDistpacther} = useContext(AppContext)
    const deleteStudent =(stu)=>{
        studentDistpacther("DELETE_STUDENT",stu)
    }
  return (
    <div><h1>StudentList is Child Component of Student</h1>

        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    students?.map((stu)=>{
                        return(
                            <tr>
                                <td>{stu.id}</td>
                                <td>{stu.name}</td>
                                <td>{stu.age}</td>
                                <td>
                                    <button onClick={()=>{deleteStudent(stu)}}>DELETE</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>

            </table>

                {/* proops drilling */}
            {/* <SubStudentList students = {props.students}/> */}
            <SubStudentList/>
    </div>
  )
}