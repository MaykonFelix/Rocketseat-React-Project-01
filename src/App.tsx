import { Post } from "./components/Post.tsx";
import { Header } from "./components/Header.tsx";
import { Sidebar } from "./components/Siderbar";

import styles from "./App.module.css";

import "./global.css";

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: Strig

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/maykonfelix.png",
      name: "Maykon Felix",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      {
        type: "paragraph",
        content:
          "🍄 Acabei de Subir um projeto de REACT JS do meu portifolio. É um projeto que fiz"
      },
      { type: "paragraph", content: "com as aulas que aprendi da Rocketseat" },

      { type: "link", content: "maykon.felix/design" }
    ],
    publishedAt: new Date("2022-07-25 20:00:22")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator Developer"
    },
    content: [
      { type: "paragraph", content: "Fala Devs !!!" },
      {
        type: "paragraph",
        content: "Legal meu xará"
      },
      {
        type: "paragraph",
        content: "Bem vindo ao aprendizado da Rocketseat 🚀"
      },

      { type: "link", content: "mayk.brito/developer" }
    ],
    publishedAt: new Date("2022-07-30 21:00:22")
  }
];

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
