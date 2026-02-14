import { YEARS, type Person, type YearType } from "../sections/team/team";

/** Wraps children in an anchor only if href exists (so the whole card becomes clickable). */
const ClickableWrapper: React.FC<{
  href?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}> = ({ href, children, ariaLabel }) => {
  if (!href) return <div style={{ height: "100%" }}>{children}</div>;

  return (
    <a
      href={href.trim()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "block",
        height: "100%",
      }}
    >
      {children}
    </a>
  );
};

// Reusable director card matching the screenshot design
const DirectorCard: React.FC<{ person: Person; size?: number }> = ({
  person,
}) => {
  const card = (
    <div
      style={{
        padding: "16px 16px 20px",
        alignItems: "center",
        gap: "12px",
        borderRadius: "20px",
        background: "#FFF",
        height: "100%",
        boxSizing: "border-box",
        boxShadow: "0 6px 16px 0 rgba(0, 0, 0, 0.15)",
        cursor: person.url ? "pointer" : "default",
        transition: "transform 120ms ease, box-shadow 120ms ease",
      }}
      onMouseEnter={(e) => {
        if (!person.url) return;
        (e.currentTarget as HTMLDivElement).style.transform =
          "translateY(-1px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 10px 22px 0 rgba(0, 0, 0, 0.18)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 6px 16px 0 rgba(0, 0, 0, 0.15)";
      }}
    >
      {/* Photo with rounded corners - fills remaining space */}
      <div
        style={{
          flex: "1",
          borderRadius: "12px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F3F4F6",
          minHeight: "0",
        }}
      >
        <img
          src={person.image}
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            objectFit: "cover",
          }}
          loading="lazy"
        />
      </div>
      {/* Name and role below photo */}
      <div style={{ textAlign: "center", width: "100%" }}>
        <div
          style={{
            fontWeight: 700,
            fontSize: "16px",
            color: "#07123b",
            marginTop: 7,
            marginBottom: "4px",
            lineHeight: "1.2",
          }}
        >
          {person.name}
        </div>
        <div
          style={{
            fontSize: "12px",
            color: "#6b7280",
            lineHeight: "1.3",
          }}
        >
          {person.role}
        </div>
      </div>
    </div>
  );

  return (
    <ClickableWrapper
      href={person.url}
      ariaLabel={`Open ${person.name}'s link`}
    >
      {card}
    </ClickableWrapper>
  );
};

// Team member card - similar to DirectorCard but smaller
const TeamMemberCard: React.FC<{ person: Person }> = ({ person }) => {
  const initials = person.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  const card = (
    <div
      style={{
        padding: "0px 5px 10px",
        alignItems: "center",
        gap: "8px",
        borderRadius: "12px",
        background: "#FFF",
        boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)",
        height: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
        cursor: person.url ? "pointer" : "default",
        transition: "transform 120ms ease, box-shadow 120ms ease",
      }}
      onMouseEnter={(e) => {
        if (!person.url) return;
        (e.currentTarget as HTMLDivElement).style.transform =
          "translateY(-1px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 6px 14px 0 rgba(0, 0, 0, 0.14)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 2px 8px 0 rgba(0, 0, 0, 0.1)";
      }}
    >
      {/* Photo with rounded corners only on top */}
      <div
        style={{
          flex: "1",
          borderRadius: "12px 12px 0 0",
          overflow: "hidden",
          background: "#F3F4F6",
          marginInline: "-5px",
        }}
      >
        {person.image ? (
          <img
            src={person.image}
            style={{
              width: "100%",
              aspectRatio: "1 / 1",
              objectFit: "cover",
              display: "block",
            }}
            loading="lazy"
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#F3F4F6",
              color: "#111827",
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            {initials}
          </div>
        )}
      </div>

      {/* Name and role below photo */}
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontWeight: 700,
            fontSize: "9px",
            color: "#07123b",
            marginTop: 5,
            marginBottom: "2px",
            lineHeight: "1.2",
            wordBreak: "break-word",
          }}
        >
          {person.name}
        </div>
        <div
          style={{
            fontSize: "7px",
            color: "#6b7280",
            lineHeight: "1.2",
          }}
        >
          {person.role}
        </div>
      </div>
    </div>
  );

  return (
    <ClickableWrapper
      href={person.url}
      ariaLabel={`Open ${person.name}'s link`}
    >
      {card}
    </ClickableWrapper>
  );
};

// Leadership data
export default function Team() {
  // Exact colors from Figma with 60% opacity
  const lineColors = [
    "rgba(177, 179, 233, 0.00)", // Column 0 - Director of ScottyLabs (transparent)
    "rgba(177, 179, 233, 0.60)", // Column 1 - Events
    "rgba(177, 202, 233, 0.60)", // Column 2 - Outreach
    "rgba(236, 151, 152, 0.60)", // Column 3 - Tech
    "rgba(232, 187, 174, 0.60)", // Column 4 - Labrador
    "rgba(205, 179, 210, 0.60)", // Column 5 - Design
    "rgba(179, 213, 224, 0.60)", // Column 6 - Finance
  ];

  return (
    <section
      style={{ padding: "48px 24px", maxWidth: "1400px", margin: "0 auto" }}
    >
      <h1 style={{ fontSize: "32px", margin: "0 0 24px 0", color: "#07123b" }}>
        Leadership
      </h1>
      <div
        style={{
          borderRadius: "20px",
          border: "1px solid #B0B0B0",
          background: "#F2F3F7",
          padding: "48px",
          paddingLeft: "130px",
          paddingRight: 40,
          position: "relative",
          overflowX: "auto",
          overflowY: "hidden",
        }}
      >
        {/* Content with relative positioning */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            minWidth: 1000,
          }}
        >
          {/* Vertical lines spanning the entire height */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
              gap: "12px",
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            {lineColors.map((color: string, idx: number) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "25px",
                    height: "100%",
                    backgroundColor: color,
                    borderRadius: "9999px",
                  }}
                />
              </div>
            ))}
          </div>
          {YEARS.map((year: YearType, yearIdx: number) => (
            <div
              key={`${year.label}-${yearIdx}`} // IMPORTANT: avoid duplicate keys since labels repeat
              style={{
                marginBottom: yearIdx === YEARS.length - 1 ? "0" : "60px",
                position: "relative",
              }}
            >
              {/* Directors row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(7, 1fr)",
                  gap: "12px",
                  marginBottom: "16px",
                }}
              >
                {/* Year label aligned with horizontal line */}
                <div
                  style={{
                    position: "absolute",
                    left: "-110px",
                    top: "100px",
                    transform: "translateY(-50%)",
                    color: "#000",
                    fontFamily: "Satoshi, sans-serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: "1",
                    whiteSpace: "nowrap",
                    zIndex: 2,
                  }}
                >
                  {year.label}
                </div>

                {/* Horizontal line through center of directors */}
                <div
                  style={{
                    position: "absolute",
                    top: "100px",
                    left: "-20px",
                    width: "calc(100% / 7 * 6 + (100% / 7 + 12px) / 2 + 20px)",
                    height: "1px",
                    backgroundColor: "#819AFF",
                    zIndex: 0,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "-4px",
                      top: "-4px",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#819AFF",
                    }}
                  />
                </div>

                {year.directors.map((director, i) => (
                  <div
                    key={
                      director?.name ??
                      `empty-director-${year.label}-${yearIdx}-${i}`
                    }
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {director ? <DirectorCard person={director} /> : null}
                  </div>
                ))}
              </div>

              {/* Teams grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(7, 1fr)",
                  gap: "12px",
                }}
              >
                {year.teams.map((team: Person[], colIdx: number) => {
                  return (
                    <div
                      key={colIdx}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, minmax(0,1fr))",
                        gap: 8,
                        alignItems: "center",
                        height: "fit-content",
                      }}
                    >
                      {team
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((member, i) => (
                          <TeamMemberCard
                            key={`${member.name}-${member.role}`}
                            person={member}
                          />
                        ))}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Textbox Rectangle */}
      <div
        style={{
          borderRadius: "20px",
          border: "1px solid #B0B0B0",
          background: "#F2F3F7",
          padding: "48px",
          minHeight: "200px",
          marginTop: "48px",
        }}
      >
        <div
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontSize: "16px",
            color: "#07123b",
            lineHeight: "1.8",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: "20px",
              marginBottom: "16px",
              color: "#07123b",
            }}
          >
            LORE
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontWeight: 600 }}>2024</span>{" "}
            <a
              href="http://www-03-thetartan.andrew.cmu.edu/2024/11/25/never-get-lost-again-with-cmumaps/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#819AFF", textDecoration: "none" }}
            >
              http://www-03-thetartan.andrew.cmu.edu/2024/11/25/never-get-lost-again-with-cmumaps/
            </a>
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontWeight: 600 }}>2022</span>{" "}
            <a
              href="https://cargocollective.com/tiffanyhchen/ScottyLabs-Promotional-Materials"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#819AFF", textDecoration: "none" }}
            >
              https://cargocollective.com/tiffanyhchen/ScottyLabs-Promotional-Materials
            </a>
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontWeight: 600 }}>2018</span>{" "}
            <a
              href="https://www.chengeric.com/cmueats/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#819AFF", textDecoration: "none" }}
            >
              https://www.chengeric.com/cmueats/
            </a>
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontWeight: 600 }}>2013-14</span>{" "}
            <a
              href="https://www.cs.cmu.edu/link/scottylabs-making-it-easier-makers"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#819AFF", textDecoration: "none" }}
            >
              https://www.cs.cmu.edu/link/scottylabs-making-it-easier-makers
            </a>
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontWeight: 600 }}>2012</span>{" "}
            <a
              href="https://www.facebook.com/ScottyLabs/posts/340694309339069/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#819AFF", textDecoration: "none" }}
            >
              https://www.facebook.com/ScottyLabs/posts/340694309339069/
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
