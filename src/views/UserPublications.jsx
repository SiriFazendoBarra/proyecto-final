import { usePublicationsContext } from "../context/PublicationsContext"
import Cards from "../components/Cards"
import { useNavigate } from "react-router-dom"
import { useLoginContext } from "../context/LoginContext"

export default function Publications() {

    const { user } = useLoginContext()
    const { publications } = usePublicationsContext()
    const navigate = useNavigate()

    return (
        <div className="page">
            <div className="container py-5 d-flex flex-column">
                <section className="d-flex justify-content-between mb-5">
                    <div>
                        <h2>Your Publications</h2>
                        {publications ? <h3>Gotta catch for moar!</h3> : <h3>Ups! it seems very very empty right here</h3>}
                    </div>
                    <button className="btn btn-light my-auto" onClick={() => navigate(`/${user.name}/publications/addnew`)}   >Add new</button>

                </section>
                <section className="marketSection">
                    {
                        !publications ? null :
                            publications.map((item) => {
                                return (
                                    <Cards key={item.id} item={item} />
                                )
                            })
                    }
                </section>
            </div>

        </div>
    )
}