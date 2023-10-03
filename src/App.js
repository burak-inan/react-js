import HelloWorld from "./components/01-hello-world/hello-world";
import Jsx1 from "./components/03-jsx/jsx1";
import Jsx2 from "./components/03-jsx/jsx2";
import Jsx3 from "./components/03-jsx/jsx3";
import Jsx4 from "./components/03-jsx/jsx4";
import Jsx5 from "./components/03-jsx/jsx5";
import Jsx6 from "./components/03-jsx/jsx6";
import Style1 from "./components/04-style/style1";
import Style2 from "./components/04-style/style2";
import Style3 from "./components/04-style/style3";
import Style4 from "./components/04-style/style4";
import DigitalClock1 from "./components/05-clock1/digital-clock1";
import DigitalClock2 from "./components/08-clock2/digital-clock2";
import Greetings from "./components/06-props-1/greetings";
import CardContainer from "./components/07-cards/card-container";
import Index from "./components/HomeWorks/home-page/index";
import Image from "./components/09-images/image";
import Gallery from "./components/09-images/gallery";
import ProfileCard from "./components/10-profile/profile-card";
import BootstrapStatic from "./components/11-bootstrap/bootstrap-static";
import BootstrapDynamic from "./components/11-bootstrap/bootstrap-dynamic";
import ProductCards from "./components/HomeWorks/product-card/product-cards";
import Shop from "./components/14-products/shop";
import Icons1 from "./components/12-react-icons/icons1";
import Icons2 from "./components/12-react-icons/icons2";
import Events1 from "./components/13-events/events1";
import Events2 from "./components/13-events/events2";
import ProductCard from "./components/HomeWorks/product-card/product-card";
import Stateless from "./components/15-states/stateless";
import State from "./components/15-states/state";
import Birthday from "./components/17-birthday/birthday";
import UseEffect1 from "./components/18-useeffect/use-effect1";
import Counter from "./components/16-counter/counter";
import ProgressBarHw from "./components/HomeWorks/progress-bar/progress-bar";
import DigitalClock3 from "./components/19-digital-clock/digital-clock3";
import UseEffect2 from "./components/18-useeffect/use-effect2";
import FilterCountry from "./components/20-filter-table/filter-country";
import UseRef from "./components/21-useref/useref";
import FetchStudents from "./components/23-fetch-students.js/fetch-students";
import CountriesAPI from "./components/HomeWorks/countriesAPI/countries-api";
import Countries from "./components/24-axios-countries/countries";
import ParentComp from "./components/25-parent-comp/parent-comp";
import Form1 from "./components/26-forms/form1";
import Form2 from "./components/26-forms/form2";
import Form3 from "./components/26-forms/form3";
import Form4 from "./components/26-forms/form4";
import TodoApp from "./components/HomeWorks/todo-app/todo-app";
import Form5 from "./components/26-forms/form5";
import Form6 from "./components/26-forms/form6";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Menu from "./components/00-home/menu/menu";
import HeaderBrowserRouter from "./components/00-home/header/header-browser-router";
import StoreContext from "./store";
import { useEffect, useState } from "react";
import Exchange from "./components/27-context-api/exchange";
import ClassComp from "./components/22-class-component/class-comp";
import axios from "axios";
import HelloReact from "./components/02-hello-react/hello-react";
import Loader from "./components/HomeWorks/loader/loader";

const App = () => {

  const [counter, setCounter]= useState(10);

  const [currencies, setCurrencies] = useState({});


  const loadData = async()=>{
      try {
        const resp = await axios.get("https://api.frankfurter.app/latest?from=try")
        setCurrencies(resp.data.rates)
      } catch (error) {
        console.log(error)
      }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
<StoreContext.Provider value={{counter, setCounter, currencies}}>
    <BrowserRouter>
    <HeaderBrowserRouter/>
    <Container fluid>
      <Row>
        <Col sm={2}>
          <Menu/>
        </Col >
        <Col sm={10}>
          <Routes>
                <Route path="/hello-world" element={<HelloWorld />} />
                <Route path="/hello-react" element={<HelloReact />} />
                
                <Route path="/jsx1" element={<Jsx1 />} />
                <Route path="/jsx2" element={<Jsx2 />} />
                <Route path="/jsx3" element={<Jsx3 />} />
                <Route path="/jsx4" element={<Jsx4 />} />
                <Route path="/jsx5" element={<Jsx5 />} />
                <Route path="/jsx6" element={<Jsx6 />} />
                
                <Route path="/style1" element={<Style1 />} />
                <Route path="/style2" element={<Style2 />} />
                <Route path="/style3" element={<Style3 />} />
                
                <Route path="/clock1" element={<DigitalClock1 />} />
                <Route
                  path="/clock2"
                  element={<DigitalClock2 bgColor="red" textColor="yellow"/>}
                />
                
                <Route path="/greetings" element={<Greetings />} />
                <Route path="/card-container" element={<CardContainer/>} />
                <Route path="/image" element={<Image />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route
                  path="/profilecard"
                  element={
                    <ProfileCard name= "Walker" image="profile.jpg"  location ="Nashville, Tennesse" shot ="242" folowers="2423" following = "2342"/>
                  }
                />
                <Route path="/bootstrapstatic" element={<BootstrapStatic />} />
                <Route
                  path="/bootstrapdynamic"
                  element={<BootstrapDynamic />}
                />
                <Route path="/icons1" element={<Icons1 />} />
                <Route path="/icons2" element={<Icons2 />} />
                <Route path="/events1" element={<Events1 />} />
                <Route path="/events2" element={<Events2 />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/stateless" element={<Stateless />} />
                <Route path="/state" element={<State />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/birthday" element={<Birthday/>} />
                <Route path="/useeffect1" element={<UseEffect1 />} />
                <Route path="/useeffect2" element={<UseEffect2 />} />
                <Route path="/filter-country" element={<FilterCountry/>} />
                <Route path="/useref" element={<UseRef />} />
                <Route path="/clock3" element={<DigitalClock3 />} />
                <Route path="/classcomp" element={<ClassComp />} />
                <Route path="/usercards" element={<FetchStudents />} />
                <Route path="/countries" element={<Countries />} />
                <Route path="/parentcomp" element={<ParentComp />} />
                <Route path="/form1" element={<Form1 />} />
                <Route path="/form2" element={<Form2 />} />
                <Route path="/form3" element={<Form3 />} />
                <Route path="/form4" element={<Form4 />} />
                <Route path="/form5" element={<Form5 />} />
                <Route path="/form6" element={<Form6 />} />                
                <Route path="/exchange" element={<Exchange />} />
                <Route path="/countries-api" element={<CountriesAPI />} />
                <Route path="/index" element={<Index />} />
                <Route path="/product-cards" element={<ProductCards />} />
                <Route path="/progress-bar" element={<ProgressBarHw />} />
                <Route path="/todo-app" element={<TodoApp />} />
                <Route path="/loader" element={<Loader />} />
              </Routes>
 
        </Col>
      </Row>

    </Container>
    </BrowserRouter>
    </StoreContext.Provider>
  );
};

export default App;

{
  /* 
      App
      <HelloWorld />
      <HelloWorld />
      <Jsx1/>
      <Jsx2/>
      <Jsx3/>
      <Jsx4/>
      <Jsx5/>
      <Style1/>
      <Style2/>
      <Style3/>
      <Style4/>
      <DigitalClock1/>
      <Greetings/>
      <CardContainer/>      
      <DigitalClock2 bgColor="red" textColor="black"/> 
      <Index/>
      <Image/>
      <Gallery/>
      <ProfileCard name= "Walker" image="profile.jpg"  location ="Nashville, Tennesse" shot ="242" followers="2423" following = "2342"/>
      <BootstrapStatic/>
      <BootstrapDynamic/>      
      <ProductCards/>
      <Icons1/>
      <Icons2/>
      <Events1/>
      <Events2/>
      <Shop/> 
      <Stateless/>
      <State/>  
      <ProductList/>
      <Birthday/>
      <Counter/>
      <UseEffect1/>
      <ProgressBarHw/>,
      <UseEffect1/>
      <DigitalClock3 bgColor="orange" textColor="green"/>
      <UseEffect2/>
      <FilterCountry/>
      <UseRef/> 
      <UseRef/>
      <FetchStudents/>
      <CountriesAPI/>
      <Countries/>
      <ParentComp/>
      <Form1/>
      <Form2/> 
      <Form3/>
      <Form4/>
      <TodoApp/>
      <TryCountries/>
      <Form5/> 
      <Form6/>*/
}


