// src/App.jsx
import "./App.css";
import { useState } from "react";
import zombieFighters from "./zombiefighters";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);

  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      console.log("Not enough money");
      return;
    }
    setTeam([...team, fighter]);
    setMoney(money - fighter.price);
  };

  const handleRemoveFighter = (member) => {
    console.log("Fighter removed!");
    setTeam(team.filter(removeMember => removeMember.id != member.id));
    setMoney(member.price + money);
  };

  const totalStrength = () => {
    if (team.length === 0) {
      return 0
    } else {
      return team.reduce((sum, member) => sum + member.strength,0)
    }
  }
  const totalAgility = () => {
    if (team.length === 0) {
      return 0
    } else {
      return team.reduce((sum, member) => sum + member.agility,0)
    }
  
}


  return (
    <>
      <h1>Zombie Fighters</h1>
      <h4></h4>

      <div>Money: {money}</div>
      <div>Team Strength: {totalStrength()} </div>
      <div>Team Agility: {totalAgility()}</div>
      <div>Team</div>
      {team.length === 0 ? ("Pick some team members!") : <p>Time to fight!</p> }
      <div>Fighters</div>
      
        <div className="zombies">
          {zombieFighters.map((zombie) => (
            <>
              <ul key={zombie.id}>
              <p>Name: {zombie.name}</p>
              <p>Price: {zombie.price}</p>
              <p>Strength: {zombie.strength}</p>
              <p>Agility: {zombie.agility}</p>
              </ul>
            </>
          ))}
        </div>
      
      <button onClick={() => handleAddFighter(fighter)}>Add</button>
      <section></section>
    </>
  );
};

export default App;
