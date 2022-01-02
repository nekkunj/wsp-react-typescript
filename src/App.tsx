import * as React from 'react';


var file_name_list=new Array()
// import './App.css';
interface File_interface {
  name:string
}
function display(files_i:File_interface){
file_name_list.push(files_i.name);
const file_name=document.getElementById('filenames')!;
const p = document.createElement("p");

p.innerHTML ='/'+ files_i.name ;
file_name?.appendChild(p);
}

 function App() {
 
 
  

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files || [];
    // const files=e.target.value;
    const file_name=document.getElementById('filenames')!;
    file_name.innerHTML=""
    for (let i=0;i<files.length;i++) {
      display(files[i])

    }
    // setFiles(Array.from(files));
  };

  const handleLocation=( event: React.FormEvent<HTMLInputElement>) => {
    
  let loc=(document.getElementById('input_location') as HTMLFormElement).value;
  const file_name=document.getElementById('filenames')!.childNodes;
  for (let i = 0; i < file_name.length; i++) {
    const temp=file_name[i] as HTMLFormElement;
    temp.innerHTML=loc+ "/"+file_name_list[i];
  }
  
  
  
  }
  return (
    <div className="App">
    <h3>File Upload</h3>
    <input type="file" onChange={handleOnChange} multiple />
    <br></br>
    <input type="text" id ="input_location" onChange={handleLocation} />
    <br></br>
    <div id="filenames">

    </div>

    </div>
  );
}


export default App;