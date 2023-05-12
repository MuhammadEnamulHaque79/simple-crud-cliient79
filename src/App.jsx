import './App.css'

function App() {
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    const user = { name, email };
    console.log(user);

    //send data from client side to server side;
    fetch('http://localhost:5000/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId){
          alert('Users added successfully');
        
        }
        form.reset();

      })

  }

  return (
    <>

      <h1>SIMPLE CRUD</h1>
      <div className='form-container'>
        <form onSubmit={handleAddUser}>
          <input type="text" name="name" />
          <br />
          <input type="email" name="email" id="" />
          <br />
          <input type="submit" value="Add User" />

        </form>
      </div>

    </>
  )
}

export default App
//67_4 module will be start;