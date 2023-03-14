let userform=document.getElementById("form")
let userEntires=[]
let saveuserform =(event)=>{
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").Value;
    const password=document.getElementById("password").Value;
    const dob=document.getElementById("dob").value;
    const acceptedterms=document.getElementById("acceptTerms").Checked;
    const entry={
        name,
        email,
        password,
        dob,
        acceptedterms
    }
    userEntires.push(entry);
    localStorage.setItem("user-entries",JSON.stringify(userEntires));
}
userform.addEventListener("submit",saveuserform)
