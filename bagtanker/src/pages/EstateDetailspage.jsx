import {useParams} from 'react-router'
import {useFetch} from '../hooks/useFetch'
import { HeaderImage} from '../components/HeaderImage/HeaderImage'
import { DetailsContainer } from '../components/DetailsContainer/DetailsContainer'

export function EstateDetailspage() {
    const {id} = useParams();

    const {data, isLoading, error} = useFetch(
        import.meta.env.Vite_PUBLIC_BASE_URL + "/api/estates/" + id,
    )

    if (isLoading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Error: {error}</p>
    }
    console.log("Enkelt broede data:",data)
    return (
        <>
        <HeaderImage imageUrl = {data?.estateImage[0].image.filename} />
        <DetailsContainer estateData={data} />
        
        </>
    )
    
}