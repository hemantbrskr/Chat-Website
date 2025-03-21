import Conversations from "./Conversations";
import Searchinput from "./Searchinput";
import LogoutButton from "./LogoutButton";

const sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
        <Searchinput/>
        <div className="divider px-3"></div>
        <Conversations/>
        <LogoutButton/>
        
    </div>
  );
};

export default sidebar;


//Stater code fro this file 

// import Conversations from "./Conversations";
// import Searchinput from "./Searchinput";
// import LogoutButton from "./LogoutButton";

// const sidebar = () => {
//   return (
//     <div className="border-r border-slate-500 p-4 flex flex-col">
//         <Searchinput/>
//         <div className="divider px-3"></div>
//         <Conversations/>
//         <LogoutButton/>
        
//     </div>
//   );
// };

// export default sidebar;