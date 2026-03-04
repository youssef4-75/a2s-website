import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

export default function JoinUs() {
  return (
    <div className="min-vh-100" style={{ backgroundColor: '#1e3a5f', paddingTop: '100px' }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-5">

                <h2 className="text-center mb-4 fw-bold">
                  Formulaire d'inscription A2S
                </h2>
                <p className="text-center text-muted mb-5">
                  Veuillez remplir vos informations personnelles et académiques
                </p>

                <form>

                  {/* INFORMATIONS PERSONNELLES */}
                  <h5 className="fw-bold mb-3">Informations Personnelles</h5>
                  <div className="row g-3">

                    <div className="col-md-6">
                      <label className="form-label">Nom Complet</label>
                      <input type="text" className="form-control" />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Mot de passe</label>
                      <input type="password" className="form-control" />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Date de Naissance</label>
                      <input type="date" className="form-control" />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Numéro de Téléphone</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="+212 6XXXXXXXX"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Genre</label>
                      <select className="form-select">
                        <option value="">Sélectionner</option>
                        <option>Homme</option>
                        <option>Femme</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label">Photo de Profil</label>
                      <input type="file" className="form-control" />
                    </div>
                  </div>

                  <hr className="my-5" />

                  {/* INFORMATIONS ÉTUDIANT */}
                  <h5 className="fw-bold mb-3">Informations Étudiant</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Filière</label>
                      <select className="form-select">
                        <option>AMOA</option>
                        <option>GI</option>
                        <option>GRT</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label d-block">Cycle</label>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="cycle"
                          value="engineering"
                        />
                        <label className="form-check-label">
                          Ingénieur
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="cycle"
                          value="master"
                        />
                        <label className="form-check-label">
                          Master
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <label className="form-label d-block">Compétences</label>

                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">HTML</label>
                      </div>

                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">CSS</label>
                      </div>

                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">JavaScript</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <label className="form-label">Notes Supplémentaires</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Votre message..."
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">
                          J'accepte les termes et conditions
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* BOUTONS */}
                  <div className="d-flex justify-content-between mt-5">
                    <button type="reset" className="btn btn-outline-secondary px-4">
                      Réinitialiser
                    </button>

                    <button type="submit" className="btn btn-primary px-4">
                      S'inscrire
                    </button>
                  </div>

                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}