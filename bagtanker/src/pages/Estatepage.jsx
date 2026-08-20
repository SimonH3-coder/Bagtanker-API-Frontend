import { useEffect, useState} from "react";
import { EstateCard } from "../components/EstateCard/EstateCard";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { useFetch } from "../hooks/useFetch";

export function Estatepage() {
    // Fetch estate data

    const {
        data: estateData,
        isLoading: estateLoading,
        error: estateError,
    } = useFetch(import.meta.env.VITE_PUBLIC_BASE_URL + "/api/products");

    const [sortedData, setSortedData] = useState([]);

    console.log(sortedData);

    // Smart  sortering
    const sort = (e) => {
        const clone = [...estateData];
        const sorted = clone.sort((a, b) => a[e.target.value] < b[e.target.value]);
        setSortedData(sorted);
    }

    // Smart filtering

    const filter = (e) => {
        const clone = [...estateData];
        const filtered = clone.filter((item) => item.category === e.target.value);
        setSortedData(filtered);
    }

    const sortArray = (event) => {
        const option = event.target.value
        console.log(option)

        switch (option) {
            case 'price': {
                const clone = [...estateData]
                const sortedPrice = clone.sort((a, b) => a.price < b.price)
                setSortedData(sortedPrice)
                break; }
            
            case 'title': {
                const clone = [...estateData]
                const sortedTitle = clone.sort((a, b) => a.title < b.title)
                setSortedData(sortedTitle)
                break; }
            case 'description': {
                const clone = [...estateData]
                const sortedDescription = clone.sort((a, b) => a.description < b.description)
                setSortedData(sortedDescription)
                break; }
            }

        }
    return (
        <>
        <div>
        <h1>Estate page</h1>
        <select onChange= {(event) => sortArray(event)}>
            <option value = {"price"}>Pris</option>
            <option value = {"title"}>Titel</option>
            <option value = {"description"}>Beskrivelse</option>
        </select>

        <select onChange = {(event) => filterArray(event)}>
            <option value = {'value'}>Broede</option>
            <option value = {'estate'}>Rundstykker</option>
            <option value = { 'coop'}>Kager</option>
        </select>
        </div>
        <GridContainer
        
        styleProps = {{
            gridTemplateColumns: "repeat(3, 1fr)",
            width: "80%",
            margin: "auto",
        }}
            
            >
                {sortedData?
                sortedData?.map((estate) => {
                    return (
                        <EstateCard
                            key={estate.id}
                            title={estate.title}
                            slug={estate.slug}
                            imageUrl={estate.imageUrl}
                            price={estate.price}
                            description={estate.description}
                        />
                    )
                })
                : estateData?.map((estate) => {
                    return (
                        <EstateCard
                            key={estate.id}
                            title={estate.title}
                            slug={estate.slug}
                            imageUrl={estate.imageUrl}
                            price={estate.price}
                            description={estate.description}
                        />
                    )
                })}
                </GridContainer>
        </>
    )
}