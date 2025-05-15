import React, { useState, useEffect } from "react";

const StarWarsBlog = () => {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => setPeople(data.results))
      .catch((error) => console.error("Error fetching people:", error));
  }, []);

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/")
      .then((response) => response.json())
      .then((data) => setPlanets(data.results))
      .catch((error) => console.error("Error fetching planets:", error));
  }, []);

  useEffect(() => {
    fetch("https://swapi.dev/api/vehicles/")
      .then((response) => response.json())
      .then((data) => setVehicles(data.results))
      .catch((error) => console.error("Error fetching vehicles:", error));
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}>The Star Wars Universe</h1>
      
      {/* People Section */}
      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.5rem", borderBottom: "2px solid #ddd", paddingBottom: "5px" }}>Legendary Characters</h2>
        {people.map((person) => (
          <article key={person.url} style={{ padding: "15px", borderBottom: "1px solid #ccc" }}>
            <h3>{person.name}</h3>
            <p><strong>Height:</strong> {person.height} cm</p>
            <p><strong>Birth Year:</strong> {person.birth_year}</p>
          </article>
        ))}
      </section>

      {/* Planets Section */}
      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.5rem", borderBottom: "2px solid #ddd", paddingBottom: "5px" }}>Planetary Worlds</h2>
        {planets.map((planet) => (
          <article key={planet.url} style={{ padding: "15px", borderBottom: "1px solid #ccc" }}>
            <h3>{planet.name}</h3>
            <p><strong>Climate:</strong> {planet.climate}</p>
            <p><strong>Population:</strong> {planet.population}</p>
          </article>
        ))}
      </section>

      {/* Vehicles Section */}
      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.5rem", borderBottom: "2px solid #ddd", paddingBottom: "5px" }}>Iconic Vehicles</h2>
        {vehicles.map((vehicle) => (
          <article key={vehicle.url} style={{ padding: "15px", borderBottom: "1px solid #ccc" }}>
            <h3>{vehicle.name}</h3>
            <p><strong>Model:</strong> {vehicle.model}</p>
            <p><strong>Manufacturer:</strong> {vehicle.manufacturer}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default StarWarsBlog;
