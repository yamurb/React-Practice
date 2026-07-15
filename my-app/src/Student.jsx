
function student(props){

    return( 
        <div className="student">
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>Student: {props.isStudent ? "yes" : "no"}</p>
        </div>
    );
       

}
export default student

//proptypes Practice = a mechanism that ensures that the passed value is of the correct type data type.