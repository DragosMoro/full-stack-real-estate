import "./Properties.css"
import SearchBar from "../../components/searchBar/SearchBar"
import useProperties from "../../hooks/useProperties"
import {SyncLoader} from "react-spinners"
import PropertyCard from "../../components/propertyCard/PropertyCard"

const Properties = () => {
    const { data, isError, isLoading} = useProperties()
    if(isError)
    {
        return(
            <div className="wrapper">
                <span>
                    Error while fetching data
                </span>

            </div>
        )
    }
    if(isLoading)
    {
        return(
            <div className="wrapper flexCenter" style={{height:"60vh"}}>
                <SyncLoader height="80" width ="80" radius={1} color="#4066ff" aria-label="sync-loading"/>
            </div>
        )

    }
    console.log(data)
    return (
        <div className="wrapper">
            <div className="flexColCenter paddings innerWidth properties-container">
                <SearchBar />
                <div className="paddings flexCenter properties">
                    {
                        data.map((property, i) => (<PropertyCard card={property} key={i}/>))
                    }
                </div>
            </div>
        </div>
    )
}

export default Properties