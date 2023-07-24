const Count = ({record ,button,no})=>{
    return(
        <center>
            <h1>Table</h1>
            <table border={1} cellPadding={18}>
            <thead>
                <tr>
                    <td>Grid</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Password</td>
                    <td>Course</td>
                    <td>City</td>
                    <th>{no}</th>
                </tr>
            </thead>
            <tbody>
                {
                    record.map((v)=>{
                       return(
                        <tr key={v.grid}>
                            <td>{v.grid}</td>
                            <td>{v.name}</td>
                            <td>{v.email}</td>
                            <td>{v.password}</td>
                            <td>{v.course}</td>
                            <td>{v.city}</td>
                            <button onClick={()=>button()}>Add</button>
                        </tr>
                       )
                    })
                }
            </tbody>
        </table>
        </center>
    )
}

export default Count;