
// -------------5-------------------

import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  console.log(data);
  return (
    <div className="overflow-x-auto flex items-center justify-start  h-[55%] w-full gap-5 py-5 mt-10">
      
      {
        data.tasks.map((elem) => {
          console.log(elem);
          if(elem.active){
            return <AcceptTask/>
          }
          if(elem.completed){
            return <CompleteTask/>
          }
          if(elem.failed){
            return <FailedTask/>
          }
          if(elem.new){
            return <NewTask/>
          }

        })
      }

      
    </div>
  );
};

export default TaskList;
