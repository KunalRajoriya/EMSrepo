
// -------------5-------------------

import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  
  return (
    <div className="overflow-x-auto flex items-center justify-start  h-[55%] w-full gap-5 py-5 mt-10">
      
      {
        data.tasks.map((elem, idx) => {
          
          if(elem.active){
            return <AcceptTask key={idx}/>
          }
          if(elem.completed){
            return <CompleteTask key={idx}/>
          }
          if(elem.failed){
            return <FailedTask  key={idx}/>
          }
          if(elem.new){
            return <NewTask key={idx}/>
          }

        })
      }

      
    </div>
  );
};

export default TaskList;
