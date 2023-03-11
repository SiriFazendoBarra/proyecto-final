import { useDataContext } from "../context/DataContext"

import Cards from "../components/Cards"

export default function Home (){

    const {market} = useDataContext()
    console.log(market)

    return(
        <div className="page">
                <div className="container">
                <h1>Home</h1>
                {
                    market.map((item)=>{
                        return(
                            <Cards item={item}/>
                        )
                    })
                }

                
            </div>
            
        </div>
    )
}