import { YEARS, type Person, type YearType } from "../sections/team/team";
import OGTartanHacksAmyQuispe from "../assets/team-page/OGTartanHacksAmyQuispe.jpg";
import OGTartanHacksTeam from "../assets/team-page/OGTartanHacksTeam.jpg";
import TH2026 from "../assets/team-page/TH2026.png";
import Banner2026 from "../assets/team-page/Banner2026.png";
import Nova2025 from "../assets/team-page/Nova2025.jpg";
import Nova2024 from "../assets/team-page/Nova2024.jpg";
import TH2025 from "../assets/team-page/TH2025.jpg";
import Banner2025 from "../assets/team-page/Banner2025.jpg";
import DogHouse2025 from "../assets/team-page/DogHouse2025.png";
import Pdf2023 from "../assets/team-page/Pdf2023.jpg";
import Pdf2022 from "../assets/team-page/Pdf2022.jpg";
import TH2024 from "../assets/team-page/TH2024.jpg";
import Banner2024 from "../assets/team-page/Banner2024.jpeg";
import DogHouse2024 from "../assets/team-page/DogHouse2024.jpeg";
import DogHouse2024Awards from "../assets/team-page/DogHouse2024Awards.jpg";
import DogHouse2023 from "../assets/team-page/DogHouse2023.jpg";
import SeniorPicnic2025 from "../assets/team-page/SeniorPicnic2025.jpg";
import SeniorPicnic2024 from "../assets/team-page/SeniorPicnic2024.png";
import SeniorPicnic2023 from "../assets/team-page/SeniorPicnic2023.jpg";
import Fence2026 from "../assets/team-page/Fence2026.jpg";
import Fence2025 from "../assets/team-page/Fence2025.jpg";
import Fence2022Fall from "../assets/team-page/Fence2022Fall.png";
import Fence2022Spring from "../assets/team-page/Fence2022Spring.png";
import Banner2022 from "../assets/team-page/Banner2022.png";
import Banner2023 from "../assets/team-page/Banner2023.png";
import TH2012 from "../assets/team-page/TH2012.jpg";
import TH2013 from "../assets/team-page/TH2013.jpg";
import TH2014 from "../assets/team-page/TH2014.png";
import TH2015 from "../assets/team-page/TH2015.png";
import TH2016 from "../assets/team-page/TH2016.png";
import TH2017 from "../assets/team-page/TH2017.png";
import TH2018 from "../assets/team-page/TH2018.png";
import TH2019 from "../assets/team-page/TH2019.png";
import TH2019_2 from "../assets/team-page/TH2019-2.png";
import TH2020 from "../assets/team-page/TH2020.png";
import TH2020_2 from "../assets/team-page/TH2020-2.png";
import TH2021 from "../assets/team-page/TH2021.png";
import TH2021_2 from "../assets/team-page/TH2021-2.jpg";
import TH2022 from "../assets/team-page/TH2022.jpg";
import TH2022_2 from "../assets/team-page/TH2022-2.png";
import TH2023 from "../assets/team-page/TH2023.png";

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
                      {team.map((member, i) => (
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
            ScottyLabs Over the Years
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontWeight: 600 }}>2025-26</span>{" "}
            <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
              <img
                src={Nova2025}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <img
                src={Fence2026}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <img
                src={TH2026}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <img
                src={Banner2026}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
            <a
              href="https://medium.com/tartanhacks/introducing-foundry-carnegie-mellons-first-student-led-startup-accelerator-4c71a0902c10"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#819AFF",
                textDecoration: "none",
                display: "block",
              }}
            >
              https://medium.com/tartanhacks/introducing-foundry-carnegie-mellons-first-student-led-startup-accelerator-4c71a0902c10
            </a>
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontWeight: 600 }}>2024-25</span>{" "}
            <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
              <img
                src={Nova2024}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <img
                src={Fence2025}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <img
                src={TH2025}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <img
                src={Banner2025}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <img
                src={DogHouse2025}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <img
                src={SeniorPicnic2025}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontWeight: 600 }}>2023-24</span>{" "}
            <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
              <img
                src={Pdf2023}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <img
                src={TH2024}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <img
                src={Banner2024}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <img
                src={DogHouse2024}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <img
                src={DogHouse2024Awards}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <img
                src={SeniorPicnic2024}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
            <a
              href="http://www-03-thetartan.andrew.cmu.edu/2024/11/25/never-get-lost-again-with-cmumaps/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#819AFF",
                textDecoration: "none",
                display: "block",
              }}
            >
              http://www-03-thetartan.andrew.cmu.edu/2024/11/25/never-get-lost-again-with-cmumaps/
            </a>
            <a
              href="https://medium.com/tartanhacks/celebrating-scottylabs-12th-birthday-cd4f23692da1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#819AFF",
                textDecoration: "none",
                display: "block",
              }}
            >
              https://medium.com/tartanhacks/celebrating-scottylabs-12th-birthday-cd4f23692da1
            </a>
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontWeight: 600 }}>2022-23</span>{" "}
            <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
              <img
                src={Fence2022Fall}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <img
                src={Pdf2022}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <img
                src={TH2023}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <img
                src={Banner2023}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <img
                src={DogHouse2023}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <img
                src={SeniorPicnic2023}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
            <a
              href="https://cargocollective.com/tiffanyhchen/ScottyLabs-Promotional-Materials"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#819AFF",
                textDecoration: "none",
                display: "block",
              }}
            >
              https://cargocollective.com/tiffanyhchen/ScottyLabs-Promotional-Materials
            </a>
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontWeight: 600 }}>2021-22</span>{" "}
            <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
              <img
                src={Fence2022Spring}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <img
                src={TH2022}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <img
                src={TH2022_2}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <img
                src={Banner2022}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
            <a
              href="https://medium.com/tartanhacks/recap-of-tartanhacks-2022-b5b040c7804e"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#819AFF",
                textDecoration: "none",
                display: "block",
              }}
            >
              https://medium.com/tartanhacks/recap-of-tartanhacks-2022-b5b040c7804e
            </a>
            <a
              href="https://medium.com/tartanhacks/tartanhacks-2022-branding-c3171dfb9106"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#819AFF",
                textDecoration: "none",
                display: "block",
              }}
            >
              https://medium.com/tartanhacks/tartanhacks-2022-branding-c3171dfb9106
            </a>
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontWeight: 600 }}>2020-21</span>{" "}
            <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
              <img
                src={TH2021}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <img
                src={TH2021_2}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
            <a
              href="https://medium.com/tartanhacks/thx-chronicles-the-tartanhacks-software-suite-part-i-85836f980a01"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#819AFF",
                textDecoration: "none",
                display: "block",
              }}
            >
              https://medium.com/tartanhacks/thx-chronicles-the-tartanhacks-software-suite-part-i-85836f980a01
            </a>
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontWeight: 600 }}>2019-20</span>{" "}
            <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
              <img
                src={TH2020}
                style={{
                  height: "50px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <img
                src={TH2020_2}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
            <a
              href="https://www.ytorralva.com/tartanhacks"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#819AFF",
                textDecoration: "none",
                display: "block",
              }}
            >
              https://www.ytorralva.com/tartanhacks
            </a>
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontWeight: 600 }}>2018-19</span>{" "}
            <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
              <img
                src={TH2019}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <img
                src={TH2019_2}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
            <a
              href="https://www.chengeric.com/cmueats/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#819AFF",
                textDecoration: "none",
                display: "block",
              }}
            >
              https://www.chengeric.com/cmueats/
            </a>
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontWeight: 600 }}>2017-18</span>{" "}
            <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
              <img
                src={TH2018}
                style={{
                  height: "50px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontWeight: 600 }}>2016-17</span>{" "}
            <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
              <img
                src={TH2017}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontWeight: 600 }}>2015-16</span>{" "}
            <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
              <img
                src={TH2016}
                style={{
                  height: "50px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontWeight: 600 }}>2014-15</span>{" "}
            <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
              <img
                src={TH2015}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
            <a
              href="https://jez.io/tartanhacks/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#819AFF",
                textDecoration: "none",
                display: "block",
              }}
            >
              https://jez.io/tartanhacks/
            </a>
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontWeight: 600 }}>2013-14</span>{" "}
            <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
              <img
                src={TH2014}
                style={{
                  height: "50px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
            <a
              href="https://www.cs.cmu.edu/link/scottylabs-making-it-easier-makers"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#819AFF",
                textDecoration: "none",
                display: "block",
              }}
            >
              https://www.cs.cmu.edu/link/scottylabs-making-it-easier-makers
            </a>
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontWeight: 600 }}>2012-13</span>{" "}
            <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
              <img
                src={TH2013}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
            <a
              href="https://www.facebook.com/ScottyLabs/posts/340694309339069/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#819AFF",
                textDecoration: "none",
                display: "block",
              }}
            >
              https://www.facebook.com/ScottyLabs/posts/340694309339069/
            </a>
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontWeight: 600 }}>2011-12</span>{" "}
            <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
              <div style={{ textAlign: "center" }}>
                <img
                  src={OGTartanHacksAmyQuispe}
                  style={{
                    height: "400px",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    marginTop: "8px",
                    fontSize: "12px",
                    color: "#6b7280",
                  }}
                >
                  Amy Quispe at First TartanHacks
                </div>
              </div>

              <div style={{ textAlign: "center" }}>
                <img
                  src={OGTartanHacksTeam}
                  style={{
                    height: "400px",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    marginTop: "8px",
                    fontSize: "12px",
                    color: "#6b7280",
                  }}
                >
                  Vinay Vemuri, Quintin Carlon, Julia Teitelbaum, Ryhan Hassan &
                  Jeff Cooper
                </div>
              </div>
              <img
                src={TH2012}
                style={{
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
