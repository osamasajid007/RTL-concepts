import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo"
const mockTodo=()=>{
    return(
        <BrowserRouter>
        <Todo/>
        </BrowserRouter>
    )
   
}
test("input is added or not",()=>{
    const {getByTestId}=render(<mockTodo/>)
    const 
})