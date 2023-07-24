const Function = ({records ,button,no})=>{
    return(
        <table border={1}>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>{no}</td>
                </tr>
            </thead>
            <tbody>
                {
                    records.map((v)=>{
                       return(
                        <tr key={v.id}>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                            <td>{v.email}</td>
                            <button onClick={()=>button()}>Add</button>
                        </tr>
                       )
                    })
                }
            </tbody>
        </table>
    )
}

export default Function;