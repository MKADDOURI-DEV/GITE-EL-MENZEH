import { useState, type FormEvent } from "react";
import { Check, Send, Loader2 } from "lucide-react";

type ReservationFormState = {
  nom: string;
  telephone: string;
  email: string;
  dateArrivee: string;
  dateDepart: string;
  adultes: string;
  enfants: string;
  typeHebergement: string;
  message: string;
};

const initialState: ReservationFormState = {
  nom: "",
  telephone: "",
  email: "",
  dateArrivee: "",
  dateDepart: "",
  adultes: "2",
  enfants: "0",
  typeHebergement: "",
  message: "",
};

export default function ReservationForm() {
  const [form, setForm] = useState<ReservationFormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const update = (key: keyof ReservationFormState, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulation d'envoi — remplacer par une vraie intégration (email, API, Supabase, etc.)
    setTimeout(() => {
      setStatus("success");
      setForm(initialState);
    }, 1200);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-moroccan-green-50 p-10 text-center ring-1 ring-moroccan-green-200">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-moroccan-green-500 text-cream-50">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-moroccan-green-800">
          Demande de réservation envoyée
        </h3>
        <p className="mt-2 max-w-md text-sm text-moroccan-green-700">
          Merci pour votre demande de réservation. Nous vous contacterons
          rapidement pour confirmer la disponibilité et les détails de votre
          séjour.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-6"
        >
          Nouvelle demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="rf-nom" className="label-luxury">
            Nom complet <span className="text-terracotta-500">*</span>
          </label>
          <input
            id="rf-nom"
            type="text"
            required
            value={form.nom}
            onChange={(e) => update("nom", e.target.value)}
            className="input-luxury"
            placeholder="Votre nom complet"
          />
        </div>
        <div>
          <label htmlFor="rf-tel" className="label-luxury">
            Téléphone <span className="text-terracotta-500">*</span>
          </label>
          <input
            id="rf-tel"
            type="tel"
            required
            value={form.telephone}
            onChange={(e) => update("telephone", e.target.value)}
            className="input-luxury"
            placeholder="Votre numéro"
          />
        </div>
      </div>

      <div>
        <label htmlFor="rf-email" className="label-luxury">
          Email
        </label>
        <input
          id="rf-email"
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="input-luxury"
          placeholder="votre@email.com"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="rf-arr" className="label-luxury">
            Date d'arrivée <span className="text-terracotta-500">*</span>
          </label>
          <input
            id="rf-arr"
            type="date"
            required
            value={form.dateArrivee}
            onChange={(e) => update("dateArrivee", e.target.value)}
            className="input-luxury"
          />
        </div>
        <div>
          <label htmlFor="rf-dep" className="label-luxury">
            Date de départ <span className="text-terracotta-500">*</span>
          </label>
          <input
            id="rf-dep"
            type="date"
            required
            value={form.dateDepart}
            onChange={(e) => update("dateDepart", e.target.value)}
            className="input-luxury"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="rf-adultes" className="label-luxury">
            Nombre d'adultes
          </label>
          <select
            id="rf-adultes"
            value={form.adultes}
            onChange={(e) => update("adultes", e.target.value)}
            className="input-luxury"
          >
            {Array.from({ length: 15 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
            <option value="15+">15 et plus</option>
          </select>
        </div>
        <div>
          <label htmlFor="rf-enfants" className="label-luxury">
            Nombre d'enfants
          </label>
          <select
            id="rf-enfants"
            value={form.enfants}
            onChange={(e) => update("enfants", e.target.value)}
            className="input-luxury"
          >
            {Array.from({ length: 10 }, (_, i) => i).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
            <option value="10+">10 et plus</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="rf-type" className="label-luxury">
          Type d'hébergement
        </label>
        <select
          id="rf-type"
          value={form.typeHebergement}
          onChange={(e) => update("typeHebergement", e.target.value)}
          className="input-luxury"
        >
          <option value="">— Informations sur demande —</option>
          <option value="chambre">Chambre</option>
          <option value="suite">Suite</option>
          <option value="groupe">Groupe / Famille</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div>
        <label htmlFor="rf-msg" className="label-luxury">
          Message
        </label>
        <textarea
          id="rf-msg"
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="input-luxury resize-none"
          placeholder="Précisez votre demande..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Demander une réservation
          </>
        )}
      </button>
    </form>
  );
}
