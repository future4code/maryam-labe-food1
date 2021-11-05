import React, {useState, useLayoutEffect} from "react";
import axios from "axios";
import useForm from "../../Hooks/useForm";
import useProtectedPage from "../../Hooks/useProtectedPage";
import HomeCard from "../../Components/HomeCard";
import { useHistory } from "react-router-dom";
import { goToHome, goToCart, goToProfile } from "../../Routes/coordinator";
import { HomeContainer, Title, Search, Filters, FiltersOff, FiltersOn, Feed, MenuTab } from "./styled";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import homepage from "../../Assets/assets_MyProfilePage/homepage.svg";
import shoppingcart from "../../Assets/assets_MyProfilePage/shoppingcart.svg";
import avatar from "../../Assets/assets_MyProfilePage/avatar.svg";


const HomePage = () => {

    useProtectedPage()

    const history = useHistory()

    const [restaurants, setRestaurants] = useState([])
    const [allRestaurants, setAllRestaurants] = useState([])
    const [flagRestaurants, setFlagRestaurants] = useState(false)
    const [arabeFilter, setArabeFilter] = useState(false)
    const [asiaticaFilter, setAsiaticaFilter] = useState(false)
    const [baianaFilter, setBaianaFilter] = useState(false)
    const [burguerFilter, setBurguerFilter] = useState(false)
    const [carneFilter, setCarneFilter] = useState(false)
    const [massaFilter, setMassaFilter] = useState(false)
    const [mexicanaFilter, setMexicanaFilter] = useState(false)
    const [petiscoFilter, setPetiscoFilter] = useState(false)
    const [sobremesaFilter, setSobremesaFilter] = useState(false)
    const [form, onChange, cleanFields] = useForm({name:''})

    const url = " https://us-central1-missao-newton.cloudfunctions.net/rappi4A/restaurants"

    const headers = {
        'Content-Type':'application/json',
        headers: {auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkEwMDVtSEJmeVNrdDdPTjBITGFwIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjMzMy44ODguNjY2LTQ0IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlJ1YSBQcmF0ZXMsIDYxMyAtIEJvbSBSZXRpcm8iLCJpYXQiOjE2MzU3ODYwMjJ9.c3DrQNxkx04oHnK17zfWApScHr6uqZayrPIxKN7RXcA'}
    }

    const getRestaurants = () => {
        axios
            .get (url, headers)
            .then ((response) => {
                setRestaurants (response.data.restaurants)
                setAllRestaurants (response.data.restaurants)
            }).catch ((error) => {
                console.log(error.data)
            })
    }
    
    useLayoutEffect(() => {
        getRestaurants()
    }, [flagRestaurants])

    const filtersButtons = (filter, turnsOff) => {

        if (filter === 'arabe') {
            setArabeFilter(!arabeFilter)
            setAsiaticaFilter(false)
            setBaianaFilter(false)
            setBurguerFilter(false)
            setCarneFilter(false)
            setPetiscoFilter(false)
            setMassaFilter(false)
            setMexicanaFilter(false)
            setSobremesaFilter(false) 

            const filteredList = allRestaurants && allRestaurants.filter((restaurant) => {
                return(restaurant.category === 'Árabe')
            })
            
            setRestaurants(filteredList)
        } else if (filter === 'asiatica') {
            setAsiaticaFilter(!asiaticaFilter)
            setArabeFilter(false)
            setBaianaFilter(false)
            setBurguerFilter(false)
            setCarneFilter(false)
            setPetiscoFilter(false)
            setMassaFilter(false)
            setMexicanaFilter(false)
            setSobremesaFilter(false)

            const filteredList = allRestaurants && allRestaurants.filter((restaurant) => {
                return(restaurant.category === 'Asiática')
            })

            setRestaurants(filteredList)
        } else if (filter === 'baiana') {
            setBaianaFilter(!baianaFilter)
            setAsiaticaFilter(false)
            setArabeFilter(false)
            setBurguerFilter(false)
            setCarneFilter(false)
            setPetiscoFilter(false)
            setMassaFilter(false)
            setMexicanaFilter(false)
            setSobremesaFilter(false)

            const filteredList = allRestaurants && allRestaurants.filter((restaurant) => {
                return(restaurant.category === 'Baiana')
            })

            setRestaurants(filteredList)
        } else if (filter === 'burguer') {
            setBurguerFilter(!burguerFilter)
            setAsiaticaFilter(false)
            setArabeFilter(false)
            setBaianaFilter(false)
            setCarneFilter(false)
            setPetiscoFilter(false)
            setMassaFilter(false)
            setMexicanaFilter(false)
            setSobremesaFilter(false)

            const filteredList = allRestaurants && allRestaurants.filter((restaurant) => {
                return(restaurant.category === 'Hamburguer')
            })

            setRestaurants(filteredList)
        } else if (filter === 'carne') {
            setCarneFilter(!carneFilter)
            setArabeFilter(false)
            setAsiaticaFilter(false)
            setBaianaFilter(false)
            setBurguerFilter(false)
            setPetiscoFilter(false)
            setMassaFilter(false)
            setMexicanaFilter(false)
            setSobremesaFilter(false)

            const filteredList = allRestaurants && allRestaurants.filter((restaurant) => {
                return(restaurant.category === 'Carnes')
            })

            setRestaurants(filteredList)
        } else if (filter === 'petisco') {
            setPetiscoFilter(!petiscoFilter)
            setArabeFilter(false)
            setAsiaticaFilter(false)
            setBaianaFilter(false)
            setBurguerFilter(false)
            setCarneFilter(false)
            setMassaFilter(false)
            setMexicanaFilter(false)
            setSobremesaFilter(false) 

            const filteredList = allRestaurants && allRestaurants.filter((restaurant) => {
                return(restaurant.category === 'Petiscos')
            })

            setRestaurants(filteredList)
        } else if (filter === 'massa') {
            setMassaFilter(!massaFilter)
            setArabeFilter(false)
            setAsiaticaFilter(false)
            setBaianaFilter(false)
            setBurguerFilter(false)
            setCarneFilter(false)
            setPetiscoFilter(false)
            setMexicanaFilter(false)
            setSobremesaFilter(false) 

            const filteredList = allRestaurants && allRestaurants.filter((restaurant) => {
                return(restaurant.category === 'Italiana')
            })

            setRestaurants(filteredList)
        }  else if (filter === 'mexicana'){
            setMexicanaFilter(!mexicanaFilter)
            setArabeFilter(false)
            setAsiaticaFilter(false)
            setBaianaFilter(false)
            setBurguerFilter(false)
            setCarneFilter(false)
            setPetiscoFilter(false)
            setMassaFilter(false)
            setSobremesaFilter(false) 

            const filteredList = allRestaurants && allRestaurants.filter((restaurant) => {
                return(restaurant.category === 'Mexicana')
            })

            setRestaurants(filteredList)
        } else if (filter === 'sobremesa'){
            setSobremesaFilter(!sobremesaFilter)
            setArabeFilter(false)
            setAsiaticaFilter(false)
            setBaianaFilter(false)
            setBurguerFilter(false)
            setCarneFilter(false)
            setPetiscoFilter(false)
            setMassaFilter(false)
            setMexicanaFilter(false)

            const filteredList = allRestaurants && allRestaurants.filter((restaurant) => {
                return(restaurant.category === 'Sorvetes')
            })

            setRestaurants(filteredList)
        } 
        
        if (turnsOff) {
            setFlagRestaurants(!flagRestaurants)
        }
    }

    const onSubmitForm = (event) => {
        event.preventDefault()

        let filteredElements = []
        const searchArray = form.name.toUpperCase().split(' ')

        allRestaurants.map((restaurant) => {
            let arrayRestaurant = restaurant.name.split(' ')
            arrayRestaurant.filter((palavra) => {
                if (searchArray.indexOf(palavra.toUpperCase()) !== -1){
                    filteredElements.push(restaurant)
                }
            })
        })

        setRestaurants(filteredElements)
        cleanFields()
    }

    const listRestaurants = restaurants && restaurants.map((restaurant) => {
        return (
            <HomeCard 
                key={restaurant.id}
                restId={restaurant.id}
                name={restaurant.name}
                category={restaurant.category}
                description={restaurant.description}
                address={restaurant.address}
                deliveryTime={restaurant.deliveryTime}
                shipping={restaurant.shipping}
                logoUrl={restaurant.logoUrl} 
            />
        )
    })

    return (
        <HomeContainer>
            <Title>
                <span>Rappi4</span>
            </Title>
            <form onSubmit={onSubmitForm}>
                <Search placeholder = 'Restaurante' name={"name"} value={form.name} onChange={onChange} required type={"text"} />  
            </form>
            <Filters>
                {(arabeFilter) ? (<FiltersOn onClick={() => filtersButtons('arabe', true)} >Árabe</FiltersOn>) : (<FiltersOff onClick={() => filtersButtons('arabe', false)} >Árabe</FiltersOff>)}
                {(asiaticaFilter) ? (<FiltersOn onClick={() => filtersButtons('asiatica', true)} >Asiática</FiltersOn>) : (<FiltersOff onClick={() => filtersButtons('asiatica', false)} >Asiática</FiltersOff>)}
                {(baianaFilter) ? (<FiltersOn onClick={() => filtersButtons('baiana', true)} >Baiana</FiltersOn>) : (<FiltersOff onClick={() => filtersButtons('baiana', false)} >Baiana</FiltersOff>)}
                {(burguerFilter) ? (<FiltersOn onClick={() => filtersButtons('burguer', true)} >Burguer</FiltersOn>) : (<FiltersOff onClick={() => filtersButtons('burguer', false)} >Burguer</FiltersOff>)}
                {(carneFilter) ? (<FiltersOn onClick={() => filtersButtons('carne', true)} >Carne</FiltersOn>) : (<FiltersOff onClick={() => filtersButtons('carne', false)} >Carne</FiltersOff>)}
                {(massaFilter) ? (<FiltersOn onClick={() => filtersButtons('massa', true)} >Massa</FiltersOn>) : (<FiltersOff onClick={() => filtersButtons('massa', false)} >Massa</FiltersOff>)}
                {(mexicanaFilter) ? (<FiltersOn onClick={() => filtersButtons('mexicana', true)} >Mexicana</FiltersOn>) : (<FiltersOff onClick={() => filtersButtons('mexicana', false)} >Mexicana</FiltersOff>)}
                {(petiscoFilter) ? (<FiltersOn onClick={() => filtersButtons('petisco', true)} >Petisco</FiltersOn>) : (<FiltersOff onClick={() => filtersButtons('petisco', false)} >Petisco</FiltersOff>)}
                {(sobremesaFilter) ? (<FiltersOn onClick={() => filtersButtons('sobremesa', true)} >Sobremesa</FiltersOn>) : (<FiltersOff onClick={() => filtersButtons('sobremesa', false)} >Sobremesa</FiltersOff>)}                    
            </Filters>
            <Feed>
                {restaurants.length > 0 ? (listRestaurants)
                :
                <h1>Desculpa, não encontramos!</h1>}
            </Feed>
            <MenuTab>
                <BottomNavigation showLabels>
                    <BottomNavigationAction
                        onClick={() => goToHome(history)}
                        icon={<img src={homepage} alt="icone da Home Page" />}
                    />
                    <BottomNavigationAction
                        onClick={() => goToCart(history)}
                        icon={<img src={shoppingcart} alt="icone do Carrinho" />}
                    />
                    <BottomNavigationAction
                        onClick={() => goToProfile(history)}
                        icon={<img src={avatar} alt="icone do Perfil do Usuário" />}
                    />
                </BottomNavigation>
            </MenuTab>
        </HomeContainer>
    )
}

export default HomePage;