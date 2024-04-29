
export const ApiCall={
    LoginUser,
    SignUpUser,
    GetNotes,
    AddNote,
    DeleteNote,
    EditNote
}


var url=process.env.REACT_APP_Backend_Url;
async function LoginUser(obj){
 return await fetch(`${url}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
    
}

async function SignUpUser(obj){
  return await fetch(`${url}/api/auth/createuser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
    
}

async function GetNotes(){
    return await fetch(`${url}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('auth-token'),
        }
      });
}

async function AddNote(obj){
    return  await fetch(`${url}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('auth-token')
        },
        body: JSON.stringify(obj)
      });
}

async function DeleteNote(id){
  
    return await fetch(`${url}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('auth-token')
        }
      });
}

async function EditNote(obj){
    let id=obj.id
    return await fetch(`${url}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('auth-token')
        },
        body: JSON.stringify(obj)
      });
}

