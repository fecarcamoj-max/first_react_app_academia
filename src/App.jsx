function App(){
  
  const message = "Full Stack - Front End 2026";
  const year = 2026;
  const courseName = "Nombre de curso Desarrollo Front.";
  const lessonNumber =  2;
  
  return (
          <>
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