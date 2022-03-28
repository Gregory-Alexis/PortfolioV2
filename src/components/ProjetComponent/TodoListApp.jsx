import Todo from "../../images/Todo.png";
import ProjectCustom from "./ProjectCustom";

const TodoList = () => {
  return (
    <ProjectCustom
      src={Todo}
      alt="todo list"
      hrefGithub="https://github.com/Westindiess/TodoList"
      hrefNetlify="https://gregtodos.netlify.app"
      titre="Todo List"
    />
  );
};

export default TodoList;
