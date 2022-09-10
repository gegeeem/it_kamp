import React from "react";
export default function Form(){
    // const [name, setName] = React.useState('Faris')
    // const [email, setEmail] = React.useState('faris@gmail.com');
    const [formvalues, setFormValues] = React.useState({
        name: '',
        email:'',
    });
    return(
        <>
            <form 
                onSubmit={(e)=>{
                    e.preventDefault();
                    // console.log(`name:${formValues.name} meail: ${formValues.email}`)
                    console.log(formvalues)
                }
                }
            >
                {/* <input type="text" id="html" name="fav_language" value={name} defaultValue = 'Ime'
                onChange={(e)=>console.log(e.target.value)}/> */}

<input type="text" id="html" name="fav_language" formvalues={formvalues.name} 
                onChange={(e)=>setFormValues((prev)=>(
                    {...prev,
                    name:e.target.value}
                    ))}/>
                <label htmlFor="css">CSS</label><br/>
                <input type="text" id="javascript" name="fav_language" formvalues={formvalues.email}  onChange={(e)=>setFormValues((prev)=>(
                    {...prev,
                    email:e.target.value}
                    ))}/>
                <label htmlFor="javascript">JavaScript</label>
                <input type="submit" value="Submit"/>
            </form> 

        </>
        
    )
}

///prev vrednost za useState