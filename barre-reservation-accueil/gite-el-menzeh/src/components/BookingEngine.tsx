import { useEffect, useMemo, useRef, useState } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Minus,
  Phone,
  Plus,
  Users,
} from "lucide-react";
import { siteConfig } from "@/config/site";

/* ------------------------------------------------------------------ */
/*  Construction du lien Nozoul                                         */
/*  Format attendu par le moteur :                                      */
/*  <bookingUrl>?period=AAAA-MM-JJ,AAAA-MM-JJ&adults=2&child=1&ages=5   */
/* ------------------------------------------------------------------ */
export function buildNozoulUrl(opts: {
  checkIn: string;
  checkOut: string;
  adults: number;
  childAges: number[];
}) {
  const params = new URLSearchParams();
  params.set("period", `${opts.checkIn},${opts.checkOut}`);
  params.set("adults", String(opts.adults));
  params.set("child", String(opts.childAges.length));
  if (opts.childAges.length > 0) {
    params.set("ages", opts.childAges.join(","));
  }
  return `${siteConfig.bookingUrl}?${params.toString()}`;
}

/* ------------------------------------------------------------------ */
/*  Utilitaires de dates (heure locale, sans décalage UTC)              */
/* ------------------------------------------------------------------ */
const MONTHS = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];
const MONTHS_SHORT = [
  "janv.", "févr.", "mars", "avr.", "mai", "juin",
  "juil.", "août", "sept.", "oct.", "nov.", "déc.",
];
const WEEKDAYS = ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"];

const startOfDay = (d: Date) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate());
const toISO = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
const shortDate = (d: Date) => `${d.getDate()} ${MONTHS_SHORT[d.getMonth()]}`;
const sameDay = (a: Date | null, b: Date | null) =>
  !!a && !!b && a.getTime() === b.getTime();
const nightsBetween = (a: Date, b: Date) =>
  Math.round((b.getTime() - a.getTime()) / 86_400_000);

/* ------------------------------------------------------------------ */
/*  Calendrier mensuel                                                  */
/* ------------------------------------------------------------------ */
function MonthGrid({
  month,
  checkIn,
  checkOut,
  hover,
  onPick,
  onHover,
}: {
  month: Date;
  checkIn: Date | null;
  checkOut: Date | null;
  hover: Date | null;
  onPick: (d: Date) => void;
  onHover: (d: Date | null) => void;
}) {
  const today = startOfDay(new Date());
  const first = new Date(month.getFullYear(), month.getMonth(), 1);
  const offset = (first.getDay() + 6) % 7; // lundi en premier
  const daysInMonth = new Date(
    month.getFullYear(),
    month.getMonth() + 1,
    0
  ).getDate();

  const rangeEnd = checkOut ?? (checkIn && hover && hover > checkIn ? hover : null);

  const cells: (Date | null)[] = [
    ...Array.from({ length: offset }, () => null),
    ...Array.from(
      { length: daysInMonth },
      (_, i) => new Date(month.getFullYear(), month.getMonth(), i + 1)
    ),
  ];

  return (
    <div>
      <p className="mb-3 text-center font-display text-lg font-semibold text-sand-900">
        {MONTHS[month.getMonth()]} {month.getFullYear()}
      </p>
      <div className="grid grid-cols-7 gap-y-1 text-center">
        {WEEKDAYS.map((w) => (
          <span
            key={w}
            className="pb-1 text-[11px] font-semibold uppercase tracking-wider text-sand-400"
          >
            {w}
          </span>
        ))}
        {cells.map((d, i) => {
          if (!d) return <span key={`e${i}`} />;
          const past = d < today;
          const isIn = sameDay(d, checkIn);
          const isOut = sameDay(d, rangeEnd);
          const inRange = !!checkIn && !!rangeEnd && d > checkIn && d < rangeEnd;
          return (
            <button
              key={d.getTime()}
              type="button"
              disabled={past}
              onClick={() => onPick(d)}
              onMouseEnter={() => onHover(d)}
              onMouseLeave={() => onHover(null)}
              className={[
                "relative mx-auto flex h-10 w-full items-center justify-center text-sm transition-colors",
                past ? "cursor-not-allowed text-sand-300 line-through" : "text-sand-800",
                inRange ? "bg-terracotta-50" : "",
                isIn && rangeEnd ? "rounded-l-full bg-terracotta-50" : "",
                isOut && checkIn ? "rounded-r-full bg-terracotta-50" : "",
              ].join(" ")}
            >
              <span
                className={[
                  "flex h-10 w-10 items-center justify-center rounded-full",
                  isIn || isOut
                    ? "bg-terracotta-600 font-semibold text-cream-50"
                    : !past
                    ? "hover:bg-sand-100"
                    : "",
                ].join(" ")}
              >
                {d.getDate()}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Compteur +/-                                                        */
/* ------------------------------------------------------------------ */
function Counter({
  label,
  hint,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  hint: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  const btn =
    "flex h-9 w-9 items-center justify-center rounded-full border border-sand-300 text-sand-700 transition-colors hover:border-terracotta-400 hover:text-terracotta-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-sand-300 disabled:hover:text-sand-700";
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div>
        <p className="text-sm font-semibold text-sand-900">{label}</p>
        <p className="text-xs text-sand-500">{hint}</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className={btn}
          disabled={value <= min}
          onClick={() => onChange(value - 1)}
          aria-label={`Retirer ${label.toLowerCase()}`}
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-5 text-center text-sm font-semibold text-sand-900">
          {value}
        </span>
        <button
          type="button"
          className={btn}
          disabled={value >= max}
          onClick={() => onChange(value + 1)}
          aria-label={`Ajouter ${label.toLowerCase()}`}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Moteur de réservation                                               */
/* ------------------------------------------------------------------ */
type BookingEngineProps = {
  /** Version barre (page d'accueil) : sans les encadrés d'information */
  compact?: boolean;
};

export default function BookingEngine({ compact = false }: BookingEngineProps) {
  const { booking } = siteConfig;
  const today = startOfDay(new Date());

  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [hover, setHover] = useState<Date | null>(null);
  const [month, setMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [adults, setAdults] = useState(2);
  const [childAges, setChildAges] = useState<number[]>([]);
  const [openPanel, setOpenPanel] = useState<"dates" | "guests" | null>(null);
  const [error, setError] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);

  // Fermeture des panneaux au clic extérieur / touche Échap
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpenPanel(null);
      }
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenPanel(null);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const nextMonth = useMemo(
    () => new Date(month.getFullYear(), month.getMonth() + 1, 1),
    [month]
  );
  const canGoBack =
    month > new Date(today.getFullYear(), today.getMonth(), 1);

  const pickDay = (d: Date) => {
    setError("");
    if (!checkIn || checkOut || d <= checkIn) {
      setCheckIn(d);
      setCheckOut(null);
      return;
    }
    setCheckOut(d);
    setOpenPanel("guests");
  };

  const setChildren = (n: number) =>
    setChildAges((prev) =>
      n > prev.length
        ? [...prev, ...Array.from({ length: n - prev.length }, () => booking.defaultChildAge)]
        : prev.slice(0, n)
    );

  const nights = checkIn && checkOut ? nightsBetween(checkIn, checkOut) : 0;

  const datesLabel =
    checkIn && checkOut
      ? `${shortDate(checkIn)} — ${shortDate(checkOut)}`
      : checkIn
      ? `${shortDate(checkIn)} — Départ ?`
      : "Arrivée — Départ";

  const guestsLabel = `${adults} adulte${adults > 1 ? "s" : ""}${
    childAges.length
      ? `, ${childAges.length} enfant${childAges.length > 1 ? "s" : ""}`
      : ""
  }`;

  const submit = () => {
    if (!checkIn || !checkOut) {
      setError("Merci de choisir vos dates d'arrivée et de départ.");
      setOpenPanel("dates");
      return;
    }
    const url = buildNozoulUrl({
      checkIn: toISO(checkIn),
      checkOut: toISO(checkOut),
      adults,
      childAges,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const fieldBtn =
    "flex w-full items-center gap-3 rounded-xl border bg-cream-50 px-4 py-3.5 text-left transition-all";

  return (
    <div ref={rootRef}>
      <div className="relative">
      <div className="grid gap-3 md:grid-cols-[1.4fr_1fr_auto] md:items-end">
        {/* Dates */}
        <div>
          <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.15em] text-sand-500">
            Dates du séjour
          </label>
          <button
            type="button"
            onClick={() => setOpenPanel(openPanel === "dates" ? null : "dates")}
            className={`${fieldBtn} ${
              openPanel === "dates"
                ? "border-terracotta-400 ring-2 ring-terracotta-200"
                : "border-sand-300 hover:border-sand-400"
            }`}
            aria-expanded={openPanel === "dates"}
          >
            <CalendarDays className="h-5 w-5 shrink-0 text-terracotta-600" />
            <span className="flex-1 text-sm font-medium text-sand-900">
              {datesLabel}
            </span>
            {nights > 0 && (
              <span className="rounded-full bg-sand-100 px-2.5 py-0.5 text-xs font-medium text-sand-700">
                {nights} nuit{nights > 1 ? "s" : ""}
              </span>
            )}
          </button>
        </div>

        {/* Voyageurs */}
        <div>
          <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.15em] text-sand-500">
            Voyageurs
          </label>
          <button
            type="button"
            onClick={() => setOpenPanel(openPanel === "guests" ? null : "guests")}
            className={`${fieldBtn} ${
              openPanel === "guests"
                ? "border-terracotta-400 ring-2 ring-terracotta-200"
                : "border-sand-300 hover:border-sand-400"
            }`}
            aria-expanded={openPanel === "guests"}
          >
            <Users className="h-5 w-5 shrink-0 text-terracotta-600" />
            <span className="flex-1 text-sm font-medium text-sand-900">
              {guestsLabel}
            </span>
          </button>
        </div>

        {/* Bouton */}
        <button type="button" onClick={submit} className="btn-primary h-[52px] md:px-9">
          Vérifier les disponibilités
        </button>
      </div>


      {/* Panneau calendrier */}
      {openPanel === "dates" && (
        <div className="absolute left-0 right-0 top-full z-30 mt-3 rounded-2xl bg-cream-50 p-5 shadow-large ring-1 ring-sand-200 md:right-auto md:w-[640px]">
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))
              }
              disabled={!canGoBack}
              className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full text-sand-700 hover:bg-sand-100 disabled:opacity-30"
              aria-label="Mois précédent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() =>
                setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))
              }
              className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-full text-sand-700 hover:bg-sand-100"
              aria-label="Mois suivant"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="grid gap-6 md:grid-cols-2">
              <MonthGrid
                month={month}
                checkIn={checkIn}
                checkOut={checkOut}
                hover={hover}
                onPick={pickDay}
                onHover={setHover}
              />
              <div className="hidden md:block">
                <MonthGrid
                  month={nextMonth}
                  checkIn={checkIn}
                  checkOut={checkOut}
                  hover={hover}
                  onPick={pickDay}
                  onHover={setHover}
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-sand-200 pt-4 text-sm">
            <span className="text-sand-500">
              {!checkIn
                ? "Choisissez votre date d'arrivée"
                : !checkOut
                ? "Choisissez votre date de départ"
                : `${nights} nuit${nights > 1 ? "s" : ""} sélectionnée${nights > 1 ? "s" : ""}`}
            </span>
            {(checkIn || checkOut) && (
              <button
                type="button"
                onClick={() => {
                  setCheckIn(null);
                  setCheckOut(null);
                }}
                className="font-medium text-sand-600 underline-offset-4 hover:underline"
              >
                Effacer
              </button>
            )}
          </div>
        </div>
      )}

      {/* Panneau voyageurs */}
      {openPanel === "guests" && (
        <div className="absolute left-0 right-0 top-full z-30 mt-3 rounded-2xl bg-cream-50 p-5 shadow-large ring-1 ring-sand-200 md:left-auto md:right-0 md:w-[380px]">
          <div className="divide-y divide-sand-200">
            <Counter
              label="Adultes"
              hint={`${booking.childMaxAge + 1} ans et plus`}
              value={adults}
              min={1}
              max={booking.maxAdults}
              onChange={setAdults}
            />
            <Counter
              label="Enfants"
              hint={`De 0 à ${booking.childMaxAge} ans`}
              value={childAges.length}
              min={0}
              max={booking.maxChildren}
              onChange={setChildren}
            />
          </div>

          {childAges.length > 0 && (
            <div className="mt-2 grid grid-cols-2 gap-3 border-t border-sand-200 pt-4">
              {childAges.map((age, i) => (
                <label key={i} className="text-xs font-medium text-sand-600">
                  Âge de l'enfant {i + 1}
                  <select
                    value={age}
                    onChange={(e) =>
                      setChildAges((prev) =>
                        prev.map((a, j) => (j === i ? Number(e.target.value) : a))
                      )
                    }
                    className="input-luxury mt-1 py-2 text-sm"
                  >
                    {Array.from({ length: booking.childMaxAge + 1 }, (_, n) => (
                      <option key={n} value={n}>
                        {n} an{n > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </label>
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={() => setOpenPanel(null)}
            className="btn-secondary mt-4 w-full py-2.5"
          >
            Valider
          </button>
        </div>
      )}

      </div>

      {error && (
        <p className="mt-3 text-sm font-medium text-terracotta-700" role="alert">
          {error}
        </p>
      )}

      {/* Informations */}
      {!compact && (
      <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
        <p className="rounded-xl bg-cream-100 px-4 py-3 text-sand-600 ring-1 ring-sand-200/60">
          Chambres <strong className="text-sand-800">single, double et triple</strong> :
          disponibilités, tarifs et paiement en ligne sur notre moteur de réservation sécurisé.
        </p>
        <p className="flex items-start gap-2 rounded-xl bg-terracotta-50 px-4 py-3 text-terracotta-800 ring-1 ring-terracotta-200/70">
          <Phone className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            Pour réserver un <strong>salon</strong>, merci de nous appeler
            {siteConfig.phone ? (
              <>
                {" "}au{" "}
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="font-semibold underline underline-offset-2"
                >
                  {siteConfig.phone}
                </a>
              </>
            ) : null}
            .
          </span>
        </p>
      </div>
      )}
    </div>
  );
}
