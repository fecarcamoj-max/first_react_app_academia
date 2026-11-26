import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import UserCard from "./UserCard";
import ProductCard from "./ProductCard";
import OrderSummary from "./OrderSummary";

function App(){
  
  const message = "Full Stack - Front End 2026";
  const year = 2026;
  const courseName = "Nombre de curso Desarrollo Front.";
  const lessonNumber =  2;

  // Actividad:::
  const title = "React Course";
  const subtitle = "Introduction to JSX";
  const yearNumber = new Date().getFullYear();
  const nextYear = yearNumber + 1;
  const nombre = "Fabian";
  return (
          <>
            <Header 
              nextYear={nextYear}
              nombre={nombre}
              apellido="Letelier"
            />
              <OrderSummary
                orderId={789}
                totalPrice={100.6}
                isPaid={true}
              />
              <OrderSummary
                orderId={987}
                totalPrice={156.87}
                isPaid={false}
              />
              <UserCard 
                name="Ricardo"
                age={33}
                isOnline={true}
              />
              <UserCard
                name="Marcela"
                age={44}
                isOnline={false}
              />
              <ProductCard
                name="Laptop"
                price={999.99}
                isAvailable={true}
              />
              <ProductCard
                name="Mouse"
                price={25.5}
                isAvailable={false}
              />
            <Content />
            <Footer />

            <hr></hr>
            
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <small>Mensaje pequeño</small>
            <p>Año actual {yearNumber} y el que viene {nextYear}</p>
            Hola Mundo
            {message} {10 + 5} message
            <br></br> Año: {year}
            <br></br> Largo del mensaje {message.length}
            <br></br> {courseName} - {lessonNumber}
          </>
        )
    ;
}

export default App;