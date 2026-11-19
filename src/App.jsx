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

  return (
          <>
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