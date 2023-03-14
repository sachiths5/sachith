let user=document.getElementById("user-form");
const retrieveEntries=()=>{
let  entires = localStorage.getItem("user-entries");
if(entries){
    entries=JSON.parse(entries);
}
else{
    entries=[];
}
return entries;
} 
const display =()=>{
    const entires=retrieveEntries();
    const tableentires=entries.map((entry) =>{
        const nameCell=<td>$(entry.name)</td>
        const emailCell=<td>$(entry.email)</td>
        const passwordCell=<td>$(entry.password)</td>
        const dobCell=<td>$(entry.dob)</td>
        const acceptTermsCell=<td>$(entry.acceptedterms)</td>
        const row=<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell}</tr>
        return row;

    },join("\n"));
    const table=<tr>$(tableentires)</tr>
    let details=document.getElementById("user-entries");
    details.innerHTML=table;

}
let saveuserform =(event)=>{
    event.preventDefault();
    const name=document.getElementById("name").Value;
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
    display();


}
user.addEventListener("submit",saveuseform)
display();