import React, { Component } from 'react';
import '../../style/pages/formPage.css';

class FormPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="formPage-container">
        <h2 className="formPage-title"> Contact</h2>
        <div className="formPage-white-container">
          <p className="formPage-sentence-before-completing-form">
            Pour toutes demandes de renseignement ou commentaires, veuillez remplir le formulaire
            ci-dessous.
          </p>
          <form action="" className="formPage-form">
            <div className="formPage-label">
              <label htmlFor="name">Nom </label>
              <div>
                <input
                  className="formPage-input"
                  type="text"
                  name="name"
                  id="name"
                  required
                ></input>
              </div>
            </div>

            <div className="formPage-label">
              <label htmlFor="email">Email </label>
              <div>
                <input
                  className="formPage-input"
                  type="email"
                  name="email"
                  id="email"
                  required
                ></input>
              </div>
            </div>

            <div>
              <label className="formPage-label" HTMLfor="message">
                Message
              </label>
              <div>
                <textarea></textarea>
              </div>
            </div>

            <div className="formPage-submit-div">
              <input
                className="formPage-submit-btn"
                type="submit"
                value="Envoyer"
                onClick={() => alert('Votre message a bien été envoyé')}
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormPage;
