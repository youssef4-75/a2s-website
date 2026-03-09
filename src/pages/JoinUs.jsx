import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";

const initialFormData = {
  formulaire: 'join_us',
  nom: '',
  email: '',
  dateNaissance: '',
  telephone: '',
  genre: '',
  filiere: '',
  cycle: '',
  competences: [],
  notes: '',
};

export default function JoinUs() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (skill) => {
    setFormData((prev) => ({
      ...prev,
      competences: prev.competences.includes(skill)
        ? prev.competences.filter((s) => s !== skill)
        : [...prev.competences, skill],
    }));
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setAcceptTerms(false);
    setStatus('idle');
    setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!acceptTerms) {
      setStatus('error');
      setErrorMsg('Veuillez accepter les termes et conditions.');
      return;
    }
    setStatus('success');
    setFormData(initialFormData);
    setAcceptTerms(false);
  };

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#1e3a5f', paddingTop: 'max(5rem, 8vh)' }}>
      <div className="container py-5" style={{ maxWidth: '92%' }}>
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

                <form onSubmit={handleSubmit}>

                  {/* INFORMATIONS PERSONNELLES */}
                  <h5 className="fw-bold mb-3">Informations Personnelles</h5>
                  <div className="row g-3">

                    <div className="col-md-6">
                      <label className="form-label">Nom Complet</label>
                      <input type="text" className="form-control" name="nom" value={formData.nom} onChange={handleChange} required />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Date de Naissance</label>
                      <input type="date" className="form-control" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} required />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Numéro de Téléphone</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="+212 6XXXXXXXX"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Genre</label>
                      <select className="form-select" name="genre" value={formData.genre} onChange={handleChange} required>
                        <option value="">Sélectionner</option>
                        <option value="Homme">Homme</option>
                        <option value="Femme">Femme</option>
                      </select>
                    </div>
                  </div>

                  <hr className="my-5" />

                  {/* INFORMATIONS ÉTUDIANT */}
                  <h5 className="fw-bold mb-3">Informations Étudiant</h5>
                  <div className="row g-3">

                    <div className="col-md-6">
                      <label className="form-label">Filière</label>
                      <select className="form-select" name="filiere" value={formData.filiere} onChange={handleChange} required>
                        <option value="">Sélectionner</option>
                        <option value="AMOA">AMOA</option>
                        <option value="GI">GI</option>
                        <option value="GRT">GRT</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label d-block">Cycle</label>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="cycle"
                          value="Ingénieur"
                          checked={formData.cycle === 'Ingénieur'}
                          onChange={handleChange}
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
                          value="Master"
                          checked={formData.cycle === 'Master'}
                          onChange={handleChange}
                        />
                        <label className="form-check-label">
                          Master
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <label className="form-label d-block">Compétences</label>

                      {['HTML', 'CSS', 'JavaScript'].map((skill) => (
                        <div className="form-check" key={skill}>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={formData.competences.includes(skill)}
                            onChange={() => handleCheckbox(skill)}
                          />
                          <label className="form-check-label">{skill}</label>
                        </div>
                      ))}
                    </div>

                    <div className="col-12">
                      <label className="form-label">Notes Supplémentaires</label>
                      <textarea
                        className="form-control"
                        name="notes"
                        rows="4"
                        placeholder="Votre message..."
                        value={formData.notes}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={acceptTerms}
                          onChange={(e) => setAcceptTerms(e.target.checked)}
                        />
                        <label className="form-check-label">
                          J'accepte les termes et conditions
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* STATUS MESSAGES */}
                  {status === 'success' && (
                    <div className="alert alert-success mt-4 text-center">
                      Votre inscription a été envoyée avec succès !
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="alert alert-danger mt-4 text-center">
                      Erreur : {errorMsg}
                    </div>
                  )}

                  {/* BOUTONS */}
                  <div className="d-flex justify-content-between mt-5">
                    <button type="button" className="btn btn-outline-secondary px-4" onClick={handleReset}>
                      Réinitialiser
                    </button>

                    <button type="submit" className="btn btn-primary px-4" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Envoi en cours...' : "S'inscrire"}
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