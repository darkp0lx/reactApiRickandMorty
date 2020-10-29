import React from "react";
import '../assets/styles/Main.scss'
class Main extends React.Component {
  render() {
    return(
    <section className="main">
    <h2 className="main__title">¿Qué quieres ver hoy Paolo?</h2>
    <input type="text" className="input" placeholder="Buscar..." />
  </section>)
  }
}
export default Main