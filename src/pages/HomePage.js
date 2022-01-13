import { useEffect, useState } from "react";
import { getSchools } from "../api/schools";

const HomePage = () => {

  const [schools, setSchools] = useState([])

  console.log(schools);

  const loadSchools = async () => {
    try {
      const result = await getSchools()
      setSchools([...schools, ...result.data.docs])
    } catch(error) {
      console.warn(error);
    }
  }

  return (
    <main>
      <header>
      <h1>
        Bem-vinde ao projeto AGNES
      </h1>
      <p>
        Nós queremos ajudar você e outros estudantes
      </p>
      </header>
      <button onClick={loadSchools}>Buscar</button>
      <ul>
        {schools.map(school => (
          <li key={`school-${school._id}`}>
            <h2>{school.name}</h2>
          </li>
        ))}
      </ul>
    </main>
  )

}

export default HomePage;