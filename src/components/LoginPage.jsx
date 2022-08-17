import { useContext } from "react"
import { UserContext } from "../context/UserContext";

export const LoginPage = () => {

    const { user, setUser } = useContext( UserContext );

    const sigIn = () => {
        setUser({
            id: 'sdanlkjnseldkj',
            name: 'Fede',
            active: true
        })
    };

    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre>
                {
                    JSON.stringify( user, null, 3 )
                }
            </pre>

            {
                !user && 
                <button className="btn btn-primary" onClick={ sigIn }>
                    Establecer usuario
                </button>
            }
        </>
    )
}