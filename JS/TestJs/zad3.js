
const getUsers = async()=>{
    const getRequest = await fetch('https://reqres.in/api/users?page=2')
    const getJson = await getRequest.json();
    if(getRequest.ok){
        return getJson;
    }else{
        throw new Error(`Response: ${getRequest.status}`)
    }

};
getUsers().
then(res=>{
    console.log(res.data);
});
