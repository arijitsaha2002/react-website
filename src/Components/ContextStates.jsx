import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

function AppStates({ children }) {

    const [collections, setCollections] = useState({});
    const [products, setProducts] = useState({});
    const [categories, setCategories] = useState({});
    const [technology, setTechnology] = useState([]);
    const [faqs, setFaqs] = useState([]);
    const [prom1, setProm1 ] = useState(0);
    const [prom2, setProm2 ] = useState(0);
    const [prom3, setProm3 ] = useState(0);
    const [prom4, setProm4 ] = useState(0);
    const [prom5, setProm5 ] = useState(0);
    const domain = "192.168.0.101:8000";

    useEffect(() => {
        axios.get("http://"+ domain +"/api/collections/").then((response) => {
            let data = response.data;
            let newData = {}

            for (let i = 0; i < data.length; i++) {
                newData[data[i].id] = i;
            }            

            setCollections({ "data": data, "lookup": newData });
            setProm1(prom1 + 1);
        })
        axios.get("http://"+ domain +"/api/products/").then((response) => {
            let data = response.data;
            let newData = {}

            for (let i = 0; i < data.length; i++) {
                newData[data[i].id] = i;
            }            
            setProducts({ "data": data, "lookup": newData });
            setProm2(prom2 + 1);
        })
        axios.get("http://"+ domain +"/api/categories/").then((response) => {
            let data = response.data;
            let newData = {}

            for (let i = 0; i < data.length; i++) {
                newData[data[i].id] = i;
            }            
            setCategories({ "data": data, "lookup": newData });
            setProm3(prom3 + 1);
        })
        axios.get("http://"+ domain +"/api/faqs/").then((response) => {
            setFaqs(response.data);
            setProm4(prom4 + 1);
        })
        axios.get("http://"+ domain +"/api/technology/").then((response) => {
            setTechnology(response.data);
            setProm5(prom5 + 1);
        })
    }, [])

    const State = {
        "collections": collections,
        "products": products,
        "categories": categories,
        "faqs": faqs,
        "technology": technology,
        "prom": prom1 + prom2 + prom3 + prom4 + prom5,
    }

    return (
        <AppContext.Provider value={State}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppStates };