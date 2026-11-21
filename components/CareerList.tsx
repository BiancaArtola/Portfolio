import Image from "next/image";
import { career, formatYears, getCompanyYears } from "../data/career";
import { useLanguage } from "./LanguageContext";

const LOGO_SIZE = 44;

const CompanyLogo = ({ name, logo }: { name: string; logo?: string }) =>
  logo ? (
    <Image
      className="company-logo"
      src={logo}
      alt=""
      width={LOGO_SIZE}
      height={LOGO_SIZE}
    />
  ) : (
    <span className="company-monogram" aria-hidden="true">
      {name.charAt(0)}
    </span>
  );

const CareerList = ({ showLogos = true }: { showLogos?: boolean }) => {
  const { language, t } = useLanguage();

  return (
    <ul className="career-list">
      {career.map((company) => (
        <li key={company.name} className="career-company">
          <div className="company-header">
            {showLogos && (
              <CompanyLogo name={company.name} logo={company.logo} />
            )}
            <div>
              <span className="company-name">{company.name}</span>
              <span className="company-years">
                {getCompanyYears(company, t.about.present)}
              </span>
            </div>
          </div>
          <ul className="career-roles">
            {company.roles.map((role) => (
              <li key={role.title.en + role.from} className="career-role-item">
                <span className="career-role-title">
                  {role.title[language]}
                </span>
                <span className="career-years">
                  {formatYears(role.from, role.to, t.about.present)}
                </span>
                <span className="career-stack">{role.stack}</span>
                {role.highlights[language].length > 0 && (
                  <ul className="career-highlights">
                    {role.highlights[language].map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default CareerList;
