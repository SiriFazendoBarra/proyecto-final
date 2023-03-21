import { useSearchContext } from "../context/SearchContext"

export default function Nav2() {

    const { setCategories } = useSearchContext()

    return (
        <div className="Nav2 p-2">
            <div className="container d-flex text-white align-items-center  gap-2">
                <div className="divNav2 animation-zoom rounded">
                    <p className="m-0 mx-2" onClick={() => setCategories("")}>All</p>
                </div>
                <div className="divNav2 animation-zoom rounded" >
                    <p className="m-0 mx-2 " onClick={(e) => setCategories(e.target.outerText.toLowerCase())} >Accesories</p>
                </div>
                <div className="divNav2 animation-zoom rounded">
                    <p className="m-0 mx-2" onClick={(e) => setCategories(e.target.outerText.toLowerCase())}>Consoles</p>
                </div>
                <div className="divNav2 animation-zoom rounded">
                    <p className="m-0 mx-2" onClick={(e) => setCategories(e.target.outerText.toLowerCase())}>Games</p>
                </div>

            </div>

        </div>
    )
}