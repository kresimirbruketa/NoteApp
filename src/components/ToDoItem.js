import React from "react";


function ToDoItem (props) {
    

// callback funkcija je tu pozvana kako bi se onClick 
// aktivirao onda kada klikneš a ne odmah kada se stvori note

    return (
         <div 
            onClick={function() {props.onChecked(props.id)}}>
                <li> {props.toDoItem} </li>
        </div>
        
    )
}

export default ToDoItem;


// const [line , setLineTrough] = useState (false);


// // linetrough funkcija
// // klikom na text ako nema linije (false) dodaj liniju, ako ima linije (true)
// // onda makni liniju

// function lineTroughText (){
//     setLineTrough (function (prevValue) {
//         return (
//             !prevValue)
//     });
// }

// return (
//     <div onClick={lineTroughText}>
//         <li style={{textDecoration: line ? "line-through" : "none" }} > {props.toDoItem} </li>
//     </div>
    
// )
// }