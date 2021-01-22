import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '../styles/_app.scss';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      mode: 'light'
    }
  }

  /**
   * Toggles the mode state of the app. If currently on light, changes to dark. And vice versa.
   */
  toggleMode = () => {
    if (this.state.mode === 'light') {
      this.setState({
        mode: 'dark'
      })
      document.getElementById('app-wrapper').classList.add('dark-mode')
      console.log("Mode changed to dark")
    }
    else {
      this.setState({
        mode: 'light'
      })
      document.getElementById('app-wrapper').classList.remove('dark-mode')
      console.log("Mode change to light")
    }
  }

  /**
   * Handles rendering the button in the app. If light-mode, renders a moon. If dark-mode, renders a sun
   */
  renderButton = () => {
    if (this.state.mode === 'light') {
      return (
        <button className="app__light-mode-btn icon level-right" onClick={() => this.toggleMode()}>
          <FontAwesomeIcon icon={faMoon} />
        </button>
      )
    }
    else {
      return (
        <button className="app__dark-mode-btn icon level-right" onClick={() => this.toggleMode()}>
          <FontAwesomeIcon icon={faSun} />
        </button>
      )
    }
  }

  render = () => {
    return (
      <div id="app-wrapper" className="app">
        <div className="level">
          <div>
            <h1 className="title">Dark Mode Challenge</h1>
          </div>

          {/* --The button that should toggle dark mode-- */}
          {this.renderButton()}

        </div>

        <div className="columns">
          <div className="column">
            <p>Lollipop powder powder. Cotton candy caramels chupa chups halvah muffin caramels apple pie topping cake. Topping chocolate bar pastry chocolate cake. Cupcake tart jujubes dragÃ©e jelly-o icing sugar plum. Chocolate bar lollipop candy canes. Biscuit croissant apple pie pudding caramels wafer tart tootsie roll macaroon. Croissant tiramisu chocolate bar carrot cake lemon drops halvah.</p>
          </div>
          <div className="column">
            <p>Marshmallow tiramisu liquorice bear claw chocolate bar bear claw tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart. Pudding sugar plum chocolate cake cake biscuit pastry pastry chocolate bar tart. Lemon drops dessert gummies icing.</p>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Name" />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Email" />
          </div>
        </div>

        <section className="section">
          <div className="buttons level-right">
            <a className="button is-primary">Save</a>
            <a className="button is-link">Submit</a>
          </div>
        </section>
      </div>
    );
  }

}