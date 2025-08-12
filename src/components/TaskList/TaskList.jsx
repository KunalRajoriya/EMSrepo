
// -------------5-------------------

import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  
  return (
    
    <div className="overflow-x-auto flex items-center justify-start bg-gradient-to-br from-[#10103a]/80 to-[#1a1a4f]/80   
  shadow-[0_0_12px_rgba(90,90,255,0.15)] 
  backdrop-blur-md rounded-4xl p-5 h-[50%] w-full gap-5 py-5 mt-15 ">
      
      {
        data.tasks.map((elem, idx) => {
          
          if(elem.newTask){
            return <NewTask key={idx} data ={elem}/>
          }
          if(elem.accepted){
            return <AcceptTask key={idx} data ={elem}/> 
          }
          if(elem.completed){
            return <CompleteTask key={idx} data ={elem}/>
          }
          if(elem.failed){
            return <FailedTask  key={idx} data ={elem}/>
          }
          

        })
      }

      
    </div>
  );
};

export default TaskList;
