import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

const users = [
  {
    userName: "icd1972",
    name: "Ismael Cruz Dominguez",
    isFollowing: true,
  },
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: true,
  },
  {
    userName: "NN2ed_s4ur0n",
    name: "Pedro Candel",
    isFollowing: false,
  },
  {
    userName: "pepeluxx",
    name: "Jose Luis Verdeguer",
    isFollowing: true,
  },
  {
    userName: "F1",
    name: "Formula 1",
    isFollowing: false,
  },
];

export function App() {
  const formatUserName = (userName) => `@${userName}`

  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          formatUserName={formatUserName}
          isFollowing={isFollowing}
          userName={userName}
          name={name}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
