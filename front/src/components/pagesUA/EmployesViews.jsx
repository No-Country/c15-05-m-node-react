import { FaUserSlash } from "react-icons/fa"

function EmployesViews({employes}) {

    return (
        <section className="employes__view">
            {
                employes.length > 0 ? 
                ( 
                    employes.map((employee) => (
                        <article key={employee._id} className="employes__card">
                          <img src="https://i.imgur.com/L2D9Elb.png" alt={employee.name} />
                          <h4>{employee.name}</h4>
                          <p>{employee.email}</p>
                        </article>
                      ))
                )
            :(
                <div className="no_employees">
                    <FaUserSlash />
                    <h3>Sin Empleados registrados</h3>
                </div>
            )

            }
           

            

        </section>
    );
}

export default EmployesViews;