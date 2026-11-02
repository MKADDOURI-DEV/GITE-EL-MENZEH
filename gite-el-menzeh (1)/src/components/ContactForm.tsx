import { useState, type FormEvent } from "react";
import { Check, Send, Loader2 } from "lucide-react";
import { siteConfig } from "@/config/site";

type ContactFormState = {
  nom: string;
  telephone: string;
  email: string;
  dateArrivee: string;
  dateDepart: string;
  personnes: string;
  message: string;
};

const initialState: ContactFormState = {
  nom: "",
  telephone: "",
  email: "",
  dateArrivee: "",
  dateDepart: "",
  personnes: "1",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const update = (key: keyof ContactFormState, value: string) =>
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
          Demande envoyée
        </h3>
        <p className="mt-2 max-w-md text-sm text-moroccan-green-700">
          Merci pour votre message. Nous vous contacterons dans les plus brefs
          délais pour répondre à votre demande.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-6"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-nom" className="label-luxury">
            Nom <span className="text-terracotta-500">*</span>
          </label>
          <input
            id="cf-nom"
            type="text"
            required
            value={form.nom}
            onChange={(e) => update("nom", e.target.value)}
            className="input-luxury"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="cf-tel" className="label-luxury">
            Téléphone <span className="text-terracotta-500">*</span>
          </label>
          <input
            id="cf-tel"
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
        <label htmlFor="cf-email" className="label-luxury">
          Email
        </label>
        <input
          id="cf-email"
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="input-luxury"
          placeholder="votre@email.com"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-arr" className="label-luxury">
            Date d'arrivée
          </label>
          <input
            id="cf-arr"
            type="date"
            value={form.dateArrivee}
            onChange={(e) => update("dateArrivee", e.target.value)}
            className="input-luxury"
          />
        </div>
        <div>
          <label htmlFor="cf-dep" className="label-luxury">
            Date de départ
          </label>
          <input
            id="cf-dep"
            type="date"
            value={form.dateDepart}
            onChange={(e) => update("dateDepart", e.target.value)}
            className="input-luxury"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-pers" className="label-luxury">
          Nombre de personnes
        </label>
        <select
          id="cf-pers"
          value={form.personnes}
          onChange={(e) => update("personnes", e.target.value)}
          className="input-luxury"
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? "personne" : "personnes"}
            </option>
          ))}
          <option value="10+">10 et plus</option>
        </select>
      </div>

      <div>
        <label htmlFor="cf-msg" className="label-luxury">
          Message
        </label>
        <textarea
          id="cf-msg"
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="input-luxury resize-none"
          placeholder="Votre message..."
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
            Envoyer une demande
          </>
        )}
      </button>
    </form>
  );
}
