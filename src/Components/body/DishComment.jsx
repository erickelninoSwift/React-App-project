import React from "react";
import Table from 'react-bootstrap/Table';
import dateFormat from "dateformat";


const DishComment = (props) =>{

    
    let content = <div>
        Null
    </div>;
    

    content = props.comment.map(dataComment =>{

        return(
            <Table striped bordered hover style={{fontSize: "10px"}}>
      <thead>
        <tr>
          <th>id</th>
          <th>comment</th>
          <th>author</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{dataComment.id}</td>
          <td>{dataComment.comment}</td>
          <td>{dataComment.author}</td>
          <td>{dateFormat(dataComment.date, "dddd, mmmm dS, yyyy")}</td>
        </tr>
      </tbody>
    </Table>
        );
    })


    console.log(content)



    console.log(props.comment)
    return(
        <>
         {content}
        </>
    );

}


export default DishComment