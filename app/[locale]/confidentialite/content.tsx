import type { ReactNode } from "react";
import type { SeoLocale } from "@/lib/seo";

/* ====================================================================
   Politique de confidentialité — contenu localisé (fr / en / es)
   Les clés logiques sont identiques dans chaque langue ; seuls les
   textes sont traduits. Détails légaux / contact verbatim.
   ==================================================================== */

export type ConfidentialiteArticle = {
  number: string;
  title: string;
  body: ReactNode;
};

export type ConfidentialiteContent = {
  meta: { title: string; description: string };
  jsonld: { name: string; description: string };
  header: {
    eyebrow: string;
    h1: string;
    intro: ReactNode;
    lastUpdateLabel: string;
    lastUpdate: string;
  };
  articles: ConfidentialiteArticle[];
  footer: ReactNode;
};

const linkClass =
  "text-violet-400/90 underline decoration-violet-400/30 underline-offset-2 transition-colors hover:text-violet-300 hover:decoration-violet-300/50";

/* ============================== FR ============================== */
const fr: ConfidentialiteContent = {
  meta: {
    title: "Politique de confidentialité : RGPD, cookies",
    description:
      "Politique de confidentialité d'Astro Cours : cookies, données collectées, durée de conservation, sécurité et droits RGPD. Consultez vos droits ici.",
  },
  jsonld: {
    name: "Politique de confidentialité",
    description:
      "Politique de confidentialité d'Astro Cours : cookies, données collectées, durée de conservation, sécurité et droits RGPD. Consultez vos droits ici.",
  },
  header: {
    eyebrow: "Protection des données",
    h1: "Politique de confidentialité",
    intro: (
      <>
        Conformément au Règlement général sur la protection des données (RGPD)
        et à la loi Informatique et Libertés, cette page détaille la manière
        dont le site{" "}
        <strong className="text-text/80">astro-cours.com</strong> collecte,
        utilise et protège vos données personnelles.
      </>
    ),
    lastUpdateLabel: "Dernière mise à jour",
    lastUpdate: "16 avril 2026",
  },
  articles: [
    {
      number: "Art. 1",
      title: "Données collectées",
      body: (
        <>
          <p>
            Le site Astro Cours ne collecte des données personnelles que de
            manière strictement nécessaire au fonctionnement et à
            l&apos;amélioration du service. Les données suivantes peuvent être
            recueillies de manière automatique lors de votre visite&nbsp;:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>données de navigation anonymisées (pages consultées, temps passé)</li>
            <li>données techniques (type de navigateur, système d&apos;exploitation, résolution d&apos;écran)</li>
            <li>adresse IP tronquée à des fins de mesure d&apos;audience</li>
          </ul>
          <p>
            <strong className="text-text/90">Aucune donnée personnelle directement identifiante</strong>{" "}
            (nom, prénom, email, date de naissance, thème astral)
            n&apos;est collectée sans votre action explicite&nbsp;: ces
            informations ne sont enregistrées que si vous nous écrivez
            spontanément par e-mail.
          </p>
        </>
      ),
    },
    {
      number: "Art. 2",
      title: "Outils d'analyse",
      body: (
        <>
          <p>
            Le site utilise des outils de mesure d&apos;audience à des fins
            statistiques et d&apos;amélioration du contenu, notamment&nbsp;:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong className="text-text/90">Ahrefs Analytics</strong>{" "}
              (statistiques de fréquentation)
            </li>
          </ul>
          <p>
            Ces outils ne permettent pas d&apos;identifier personnellement les
            utilisateurs.
          </p>
        </>
      ),
    },
    {
      number: "Art. 3",
      title: "Cookies",
      body: (
        <>
          <p>
            Des cookies techniques ou de mesure d&apos;audience peuvent être
            utilisés afin d&apos;assurer le bon fonctionnement du site et
            d&apos;analyser sa fréquentation de manière agrégée. Vous pouvez à
            tout moment configurer votre navigateur pour refuser les cookies
            ou être averti de leur dépôt&nbsp;: cela n&apos;altère pas
            l&apos;accès au contenu du site.
          </p>
          <p>
            <strong className="text-text/90">Aucun cookie publicitaire, de
            retargeting ou de profilage comportemental n&apos;est utilisé.</strong>{" "}
            Le site ne pratique ni revente de données, ni partage avec des
            régies publicitaires tierces.
          </p>
        </>
      ),
    },
    {
      number: "Art. 4",
      title: "Durée de conservation",
      body: (
        <>
          <p>
            Les données collectées sont conservées pour une durée strictement
            nécessaire aux finalités pour lesquelles elles ont été recueillies,
            puis supprimées ou anonymisées. À titre indicatif, les statistiques
            de navigation sont conservées <strong className="text-text/90">treize mois maximum</strong>,
            conformément aux recommandations de la CNIL.
          </p>
        </>
      ),
    },
    {
      number: "Art. 5",
      title: "Droits des utilisateurs",
      body: (
        <>
          <p>
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), vous disposez des droits suivants&nbsp;:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>droit d&apos;accès</li>
            <li>droit de rectification</li>
            <li>droit à l&apos;effacement</li>
            <li>droit d&apos;opposition</li>
          </ul>
          <p>
            Pour exercer vos droits, vous pouvez contacter&nbsp;:{" "}
            <a href="mailto:white-wolf-web@outlook.com" className={linkClass}>
              white-wolf-web@outlook.com
            </a>
            . Vous disposez également du droit d&apos;introduire une réclamation
            auprès de la{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              CNIL
            </a>
            .
          </p>
        </>
      ),
    },
    {
      number: "Art. 6",
      title: "Sécurité des données",
      body: (
        <>
          <p>
            Le site Astro Cours met en œuvre des mesures techniques et
            organisationnelles adaptées pour préserver la sécurité, la
            confidentialité et l&apos;intégrité de vos données&nbsp;:
            chiffrement HTTPS, en-têtes de sécurité stricts (HSTS, CSP,
            X-Frame-Options), hébergement sur infrastructure européenne et
            accès restreint aux journaux techniques.
          </p>
          <p>
            En cas d&apos;incident de sécurité susceptible d&apos;affecter vos
            droits et libertés, une notification sera adressée à la CNIL dans
            un délai de 72 heures, conformément à l&apos;article 33 du RGPD.
          </p>
        </>
      ),
    },
  ],
  footer: (
    <p>
      Politique de confidentialité rédigée conformément au Règlement général
      sur la protection des données (RGPD) et à la loi n°&nbsp;78-17 du
      6&nbsp;janvier 1978 modifiée.
    </p>
  ),
};

/* ============================== EN ============================== */
const en: ConfidentialiteContent = {
  meta: {
    title: "Privacy policy: GDPR, cookies",
    description:
      "Astro Cours privacy policy: cookies, data collected, retention period, security and GDPR rights. Review your rights here.",
  },
  jsonld: {
    name: "Privacy policy",
    description:
      "Astro Cours privacy policy: cookies, data collected, retention period, security and GDPR rights. Review your rights here.",
  },
  header: {
    eyebrow: "Data protection",
    h1: "Privacy policy",
    intro: (
      <>
        In accordance with the General Data Protection Regulation (GDPR) and the
        French Data Protection Act, this page details how the{" "}
        <strong className="text-text/80">astro-cours.com</strong> website
        collects, uses and protects your personal data.
      </>
    ),
    lastUpdateLabel: "Last updated",
    lastUpdate: "16 April 2026",
  },
  articles: [
    {
      number: "Art. 1",
      title: "Data collected",
      body: (
        <>
          <p>
            The Astro Cours website only collects personal data that is strictly
            necessary for the operation and improvement of the service. The
            following data may be collected automatically during your visit:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>anonymised browsing data (pages viewed, time spent)</li>
            <li>technical data (browser type, operating system, screen resolution)</li>
            <li>truncated IP address for audience measurement purposes</li>
          </ul>
          <p>
            <strong className="text-text/90">No directly identifying personal data</strong>{" "}
            (surname, first name, email, date of birth, natal chart) is collected
            without your explicit action: this information is only recorded if you
            write to us spontaneously by email.
          </p>
        </>
      ),
    },
    {
      number: "Art. 2",
      title: "Analytics tools",
      body: (
        <>
          <p>
            The website uses audience measurement tools for statistical purposes
            and to improve content, in particular:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong className="text-text/90">Ahrefs Analytics</strong>{" "}
              (traffic statistics)
            </li>
          </ul>
          <p>
            These tools do not make it possible to identify users personally.
          </p>
        </>
      ),
    },
    {
      number: "Art. 3",
      title: "Cookies",
      body: (
        <>
          <p>
            Technical or audience measurement cookies may be used to ensure the
            proper functioning of the website and to analyse its traffic on an
            aggregated basis. You can at any time configure your browser to
            refuse cookies or to be notified when they are stored: this does not
            affect access to the website&apos;s content.
          </p>
          <p>
            <strong className="text-text/90">No advertising, retargeting or
            behavioural profiling cookies are used.</strong>{" "}
            The website neither resells data nor shares it with third-party
            advertising networks.
          </p>
        </>
      ),
    },
    {
      number: "Art. 4",
      title: "Retention period",
      body: (
        <>
          <p>
            The data collected is kept for a period strictly necessary for the
            purposes for which it was collected, then deleted or anonymised. As
            an indication, browsing statistics are kept{" "}
            <strong className="text-text/90">for a maximum of thirteen months</strong>,
            in accordance with the recommendations of the CNIL.
          </p>
        </>
      ),
    },
    {
      number: "Art. 5",
      title: "Users' rights",
      body: (
        <>
          <p>
            In accordance with the General Data Protection Regulation (GDPR), you
            have the following rights:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>right of access</li>
            <li>right to rectification</li>
            <li>right to erasure</li>
            <li>right to object</li>
          </ul>
          <p>
            To exercise your rights, you can contact:{" "}
            <a href="mailto:white-wolf-web@outlook.com" className={linkClass}>
              white-wolf-web@outlook.com
            </a>
            . You also have the right to lodge a complaint with the{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              CNIL
            </a>
            .
          </p>
        </>
      ),
    },
    {
      number: "Art. 6",
      title: "Data security",
      body: (
        <>
          <p>
            The Astro Cours website implements appropriate technical and
            organisational measures to preserve the security, confidentiality and
            integrity of your data: HTTPS encryption, strict security headers
            (HSTS, CSP, X-Frame-Options), hosting on European infrastructure and
            restricted access to technical logs.
          </p>
          <p>
            In the event of a security incident likely to affect your rights and
            freedoms, a notification will be sent to the CNIL within 72 hours, in
            accordance with Article 33 of the GDPR.
          </p>
        </>
      ),
    },
  ],
  footer: (
    <p>
      Privacy policy drafted in accordance with the General Data Protection
      Regulation (GDPR) and French Act No.&nbsp;78-17 of 6&nbsp;January 1978 as
      amended.
    </p>
  ),
};

/* ============================== ES ============================== */
const es: ConfidentialiteContent = {
  meta: {
    title: "Política de privacidad: RGPD, cookies",
    description:
      "Política de privacidad de Astro Cours: cookies, datos recopilados, plazo de conservación, seguridad y derechos RGPD. Consulta tus derechos aquí.",
  },
  jsonld: {
    name: "Política de privacidad",
    description:
      "Política de privacidad de Astro Cours: cookies, datos recopilados, plazo de conservación, seguridad y derechos RGPD. Consulta tus derechos aquí.",
  },
  header: {
    eyebrow: "Protección de datos",
    h1: "Política de privacidad",
    intro: (
      <>
        De conformidad con el Reglamento General de Protección de Datos (RGPD) y
        la ley francesa de Protección de Datos, esta página detalla la manera en
        que el sitio{" "}
        <strong className="text-text/80">astro-cours.com</strong> recopila,
        utiliza y protege tus datos personales.
      </>
    ),
    lastUpdateLabel: "Última actualización",
    lastUpdate: "16 de abril de 2026",
  },
  articles: [
    {
      number: "Art. 1",
      title: "Datos recopilados",
      body: (
        <>
          <p>
            El sitio Astro Cours solo recopila datos personales de manera
            estrictamente necesaria para el funcionamiento y la mejora del
            servicio. Los siguientes datos pueden recogerse de forma automática
            durante tu visita:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>datos de navegación anonimizados (páginas consultadas, tiempo de permanencia)</li>
            <li>datos técnicos (tipo de navegador, sistema operativo, resolución de pantalla)</li>
            <li>dirección IP truncada con fines de medición de audiencia</li>
          </ul>
          <p>
            <strong className="text-text/90">No se recopila ningún dato personal directamente identificativo</strong>{" "}
            (apellido, nombre, correo electrónico, fecha de nacimiento, carta
            natal) sin tu acción explícita: esta información solo se registra si
            nos escribes espontáneamente por correo electrónico.
          </p>
        </>
      ),
    },
    {
      number: "Art. 2",
      title: "Herramientas de análisis",
      body: (
        <>
          <p>
            El sitio utiliza herramientas de medición de audiencia con fines
            estadísticos y de mejora del contenido, en particular:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong className="text-text/90">Ahrefs Analytics</strong>{" "}
              (estadísticas de tráfico)
            </li>
          </ul>
          <p>
            Estas herramientas no permiten identificar personalmente a los
            usuarios.
          </p>
        </>
      ),
    },
    {
      number: "Art. 3",
      title: "Cookies",
      body: (
        <>
          <p>
            Pueden utilizarse cookies técnicas o de medición de audiencia para
            garantizar el correcto funcionamiento del sitio y analizar su tráfico
            de forma agregada. Puedes configurar en cualquier momento tu
            navegador para rechazar las cookies o para que te avise de su
            instalación: esto no altera el acceso al contenido del sitio.
          </p>
          <p>
            <strong className="text-text/90">No se utiliza ninguna cookie
            publicitaria, de retargeting ni de elaboración de perfiles de
            comportamiento.</strong>{" "}
            El sitio no practica ni la reventa de datos ni el intercambio con
            redes publicitarias de terceros.
          </p>
        </>
      ),
    },
    {
      number: "Art. 4",
      title: "Plazo de conservación",
      body: (
        <>
          <p>
            Los datos recopilados se conservan durante un plazo estrictamente
            necesario para las finalidades para las que fueron recogidos, y
            después se suprimen o se anonimizan. A título indicativo, las
            estadísticas de navegación se conservan{" "}
            <strong className="text-text/90">trece meses como máximo</strong>, de
            conformidad con las recomendaciones de la CNIL.
          </p>
        </>
      ),
    },
    {
      number: "Art. 5",
      title: "Derechos de los usuarios",
      body: (
        <>
          <p>
            De conformidad con el Reglamento General de Protección de Datos
            (RGPD), dispones de los siguientes derechos:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>derecho de acceso</li>
            <li>derecho de rectificación</li>
            <li>derecho de supresión</li>
            <li>derecho de oposición</li>
          </ul>
          <p>
            Para ejercer tus derechos, puedes ponerte en contacto con:{" "}
            <a href="mailto:white-wolf-web@outlook.com" className={linkClass}>
              white-wolf-web@outlook.com
            </a>
            . También dispones del derecho a presentar una reclamación ante la{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              CNIL
            </a>
            .
          </p>
        </>
      ),
    },
    {
      number: "Art. 6",
      title: "Seguridad de los datos",
      body: (
        <>
          <p>
            El sitio Astro Cours aplica medidas técnicas y organizativas
            adecuadas para preservar la seguridad, la confidencialidad y la
            integridad de tus datos: cifrado HTTPS, cabeceras de seguridad
            estrictas (HSTS, CSP, X-Frame-Options), alojamiento en
            infraestructura europea y acceso restringido a los registros
            técnicos.
          </p>
          <p>
            En caso de incidente de seguridad que pueda afectar a tus derechos y
            libertades, se enviará una notificación a la CNIL en un plazo de 72
            horas, de conformidad con el artículo 33 del RGPD.
          </p>
        </>
      ),
    },
  ],
  footer: (
    <p>
      Política de privacidad redactada de conformidad con el Reglamento General
      de Protección de Datos (RGPD) y la ley francesa n.°&nbsp;78-17 de
      6&nbsp;de enero de 1978 modificada.
    </p>
  ),
};

export const confidentialiteContent: Record<SeoLocale, ConfidentialiteContent> = {
  fr,
  en,
  es,
};
