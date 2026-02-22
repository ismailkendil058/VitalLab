export function MarqueeBanner() {
  const items = [
    "Dentistes",
    "Kinesitherapeutes",
    "Osteopathes",
    "Salles de sport",
    "Veterinaires",
    "Therapeutes",
    "Medecins",
    "Cliniques",
    "Bien-etre",
  ]

  return (
    <div className="relative overflow-hidden border-y border-border bg-card py-3 sm:py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-4 text-xs font-medium text-muted-foreground sm:mx-6 sm:text-sm md:mx-8"
          >
            <span className="text-primary/40 mr-4 sm:mr-6 md:mr-8">{"\u2022\u2022\u2022"}</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
