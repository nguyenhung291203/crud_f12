const SERVER = "http://localhost:3001/customers/";


export const getListCustomerApi=async()=> {
    const res =await fetch(SERVER,{method:'GET'});
    const data =await res.json();
    return data;
}

export const addCustomerApi=async(customer) =>{

    const res = await fetch(SERVER, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customer)
    });
    const data = res.json();
    return data;
}

export const deleteCustomerApi=async(id) =>{
    const res = await fetch(SERVER+id, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' },
    });
    const data = res.json();
    return data;
}

export const updateCustomerApi = async(id,customer)=>{
    const res = await fetch(SERVER+id,{
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customer)
    })
    const data = res.json();
    return data;
}



