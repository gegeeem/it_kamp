const getData = async() =>{
    const getProduct = await fetch('https://reqres.in/api/users/');
    const getJson = await getProduct.json();
    if(getProduct.ok){
        return getJson;
    }else{
        throw new Error(`Response ${getProduct.status}`)
    }
};
getData().then((data)=>{
    let getContainer = document.getElementById('container');
    let display = '';
    data.data.map(el=>
        {
            const cards = `
            <div>
            <div class="card">
                <img src="${el.avatar}" alt="">
                <div class="name_surname">
                    <h3>${el.first_name}</h3>
                    <h3>${el.last_name}</h3>
                </div>
            </div>
            </div>`;
            display += cards;
            ;
        });
        getContainer.innerHTML  = display;
})
