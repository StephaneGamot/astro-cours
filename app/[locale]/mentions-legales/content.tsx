import type { ReactNode } from "react";
import type { SeoLocale } from "@/lib/seo";

/* ====================================================================
   Mentions légales — contenu localisé (fr / en / es)
   Les clés logiques sont identiques dans chaque langue ; seuls les
   textes sont traduits. Détails éditeur / contact / hébergement verbatim.
   ==================================================================== */

export type MentionsArticle = {
  number: string;
  title: string;
  body: ReactNode;
};

export type MentionsLegalesContent = {
  meta: { title: string; description: string };
  jsonld: { name: string; description: string };
  header: {
    eyebrow: string;
    h1: string;
    intro: ReactNode;
    lastUpdateLabel: string;
    lastUpdate: string;
  };
  articles: MentionsArticle[];
  footer: ReactNode;
};

const linkClass =
  "text-violet-400/90 underline decoration-violet-400/30 underline-offset-2 transition-colors hover:text-violet-300 hover:decoration-violet-300/50";

/* ============================== FR ============================== */
const fr: MentionsLegalesContent = {
  meta: {
    title: "Mentions légales et informations juridiques",
    description:
      "Consultez les mentions légales d'Astro Cours : éditeur, hébergement, contact, propriété intellectuelle et conditions d'utilisation conformes à la loi LCEN.",
  },
  jsonld: {
    name: "Mentions légales et informations juridiques",
    description:
      "Consultez les mentions légales d'Astro Cours : éditeur, hébergement, contact, propriété intellectuelle et conditions d'utilisation conformes à la loi LCEN.",
  },
  header: {
    eyebrow: "Obligations légales",
    h1: "Mentions légales du site Astro Cours",
    intro: (
      <>
        Conformément aux dispositions de la loi n°&nbsp;2004-575 du 21&nbsp;juin
        2004 pour la confiance dans l&apos;économie numérique (LCEN), il est
        porté à la connaissance des utilisateurs du site{" "}
        <strong className="text-text/80">astro-cours.com</strong> les
        informations suivantes.
      </>
    ),
    lastUpdateLabel: "Dernière mise à jour",
    lastUpdate: "16 avril 2026",
  },
  articles: [
    {
      number: "Art. 1",
      title: "Éditeur du site",
      body: (
        <>
          <p>
            Le site <strong className="text-text/90">astro-cours.com</strong> est
            édité par&nbsp;:
          </p>
          <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-[0.92rem]">
            <dt className="text-text/50">Nom</dt>
            <dd className="text-text/80">Stéphane Gamot</dd>

            <dt className="text-text/50">Statut</dt>
            <dd className="text-text/80">
              Entrepreneur individuel — Éditeur de contenus pédagogiques
            </dd>

            <dt className="text-text/50">Siège</dt>
            <dd className="text-text/80">France</dd>

            <dt className="text-text/50">Contact</dt>
            <dd>
              <a href="mailto:white-wolf-web@outlook.com" className={linkClass}>
                white-wolf-web@outlook.com
              </a>
            </dd>
          </dl>
        </>
      ),
    },
    {
      number: "Art. 2",
      title: "Directeur de la publication",
      body: (
        <>
          <p>
            Le directeur de la publication est{" "}
            <strong className="text-text/90">Stéphane Gamot</strong>, en sa
            qualité d&apos;éditeur du site, conformément à l&apos;article&nbsp;6-III-1
            de la loi LCEN.
          </p>
        </>
      ),
    },
    {
      number: "Art. 3",
      title: "Hébergement",
      body: (
        <>
          <p>Le site est hébergé par&nbsp;:</p>
          <address className="mt-2 not-italic text-text/80">
            <strong>Vercel Inc.</strong>
            <br />
            440 N Barranca Ave #4133
            <br />
            Covina, CA 91723 — États-Unis
            <br />
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Vercel
            </a>
          </address>
        </>
      ),
    },
    {
      number: "Art. 4",
      title: "Propriété intellectuelle",
      body: (
        <>
          <p>
            L&apos;ensemble des éléments composant le site Astro Cours — textes,
            cours, articles, illustrations, photographies, structure
            pédagogique, charte graphique, logos et tout autre contenu — est
            protégé par les dispositions du Code de la propriété intellectuelle
            (articles L.111-1 et suivants).
          </p>
          <p>
            Toute reproduction, représentation, modification, publication,
            transmission ou dénaturation, totale ou partielle, par quelque
            procédé que ce soit et sur quelque support que ce soit, est
            strictement interdite sans l&apos;autorisation écrite préalable de
            l&apos;éditeur. Toute exploitation non autorisée sera constitutive
            d&apos;une contrefaçon sanctionnée par les articles L.335-2 et
            suivants du Code de la propriété intellectuelle.
          </p>
        </>
      ),
    },
    {
      number: "Art. 5",
      title: "Limitation de responsabilité",
      body: (
        <>
          <p>
            Les contenus diffusés sur le site Astro Cours ont une vocation
            strictement <strong className="text-text/90">pédagogique et informative</strong>.
            Ils ne sauraient en aucun cas se substituer à un avis médical,
            juridique, financier ou à toute autre forme de conseil
            professionnel. Ils ne constituent pas davantage une prédiction
            d&apos;événements futurs.
          </p>
          <p>
            L&apos;éditeur s&apos;efforce d&apos;assurer l&apos;exactitude et la
            mise à jour des informations diffusées sur le site, mais ne saurait
            garantir leur exhaustivité ni l&apos;absence d&apos;erreurs.
            L&apos;utilisateur est seul responsable de l&apos;usage qu&apos;il
            fait des informations consultées.
          </p>
          <p>
            L&apos;éditeur décline toute responsabilité en cas de
            dommages directs ou indirects résultant de l&apos;accès au site, de
            son utilisation ou de l&apos;impossibilité d&apos;y accéder.
          </p>
        </>
      ),
    },
    {
      number: "Art. 6",
      title: "Protection des données personnelles",
      body: (
        <>
          <p>
            Conformément au Règlement (UE) 2016/679 du 27&nbsp;avril 2016
            (RGPD) et à la loi n°&nbsp;78-17 du 6&nbsp;janvier 1978 modifiée
            relative à l&apos;informatique, aux fichiers et aux libertés, tout
            utilisateur dispose d&apos;un droit d&apos;accès, de
            rectification, d&apos;effacement, de limitation du traitement, de
            portabilité et d&apos;opposition concernant ses données
            personnelles.
          </p>
          <p>
            Le site Astro Cours ne collecte aucune donnée personnelle à
            l&apos;insu de l&apos;utilisateur. Aucun cookie publicitaire ni
            traceur tiers n&apos;est déposé. Des cookies strictement nécessaires
            au fonctionnement technique du site peuvent être utilisés.
          </p>
          <p>
            Pour exercer vos droits ou pour toute question relative à la
            protection de vos données, vous pouvez adresser votre demande
            à&nbsp;:{" "}
            <a href="mailto:white-wolf-web@outlook.com" className={linkClass}>
              white-wolf-web@outlook.com
            </a>
            . Vous disposez également du droit d&apos;introduire une
            réclamation auprès de la{" "}
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
      number: "Art. 7",
      title: "Liens hypertextes",
      body: (
        <>
          <p>
            Le site Astro Cours peut contenir des liens hypertextes vers
            d&apos;autres sites internet. L&apos;éditeur n&apos;exerce aucun
            contrôle sur le contenu de ces sites tiers et décline toute
            responsabilité quant aux informations, opinions ou contenus
            accessibles via ces liens.
          </p>
          <p>
            La mise en place de liens hypertextes vers tout ou partie du site
            Astro Cours est soumise à l&apos;autorisation préalable de
            l&apos;éditeur. Cette autorisation peut être retirée à tout moment.
          </p>
        </>
      ),
    },
    {
      number: "Art. 8",
      title: "Droit applicable et juridiction compétente",
      body: (
        <>
          <p>
            Les présentes mentions légales sont régies par le droit français.
            En cas de litige et à défaut de résolution amiable, les tribunaux
            français seront seuls compétents pour en connaître.
          </p>
        </>
      ),
    },
  ],
  footer: (
    <p>
      Mentions légales rédigées conformément à la loi n°&nbsp;2004-575 du
      21&nbsp;juin 2004 (LCEN) et au Règlement général sur la protection
      des données (RGPD).
    </p>
  ),
};

/* ============================== EN ============================== */
const en: MentionsLegalesContent = {
  meta: {
    title: "Legal notice and legal information",
    description:
      "Read the legal notice of Astro Cours: publisher, hosting, contact, intellectual property and terms of use compliant with the French LCEN law.",
  },
  jsonld: {
    name: "Legal notice and legal information",
    description:
      "Read the legal notice of Astro Cours: publisher, hosting, contact, intellectual property and terms of use compliant with the French LCEN law.",
  },
  header: {
    eyebrow: "Legal obligations",
    h1: "Legal notice of the Astro Cours website",
    intro: (
      <>
        In accordance with the provisions of French Act No.&nbsp;2004-575 of
        21&nbsp;June 2004 on confidence in the digital economy (LCEN), the
        following information is brought to the attention of users of the{" "}
        <strong className="text-text/80">astro-cours.com</strong> website.
      </>
    ),
    lastUpdateLabel: "Last updated",
    lastUpdate: "16 April 2026",
  },
  articles: [
    {
      number: "Art. 1",
      title: "Website publisher",
      body: (
        <>
          <p>
            The <strong className="text-text/90">astro-cours.com</strong> website
            is published by:
          </p>
          <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-[0.92rem]">
            <dt className="text-text/50">Name</dt>
            <dd className="text-text/80">Stéphane Gamot</dd>

            <dt className="text-text/50">Status</dt>
            <dd className="text-text/80">
              Sole trader — Publisher of educational content
            </dd>

            <dt className="text-text/50">Registered location</dt>
            <dd className="text-text/80">France</dd>

            <dt className="text-text/50">Contact</dt>
            <dd>
              <a href="mailto:white-wolf-web@outlook.com" className={linkClass}>
                white-wolf-web@outlook.com
              </a>
            </dd>
          </dl>
        </>
      ),
    },
    {
      number: "Art. 2",
      title: "Publication director",
      body: (
        <>
          <p>
            The publication director is{" "}
            <strong className="text-text/90">Stéphane Gamot</strong>, in his
            capacity as publisher of the website, in accordance with
            Article&nbsp;6-III-1 of the LCEN law.
          </p>
        </>
      ),
    },
    {
      number: "Art. 3",
      title: "Hosting",
      body: (
        <>
          <p>The website is hosted by:</p>
          <address className="mt-2 not-italic text-text/80">
            <strong>Vercel Inc.</strong>
            <br />
            440 N Barranca Ave #4133
            <br />
            Covina, CA 91723 — United States
            <br />
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Vercel
            </a>
          </address>
        </>
      ),
    },
    {
      number: "Art. 4",
      title: "Intellectual property",
      body: (
        <>
          <p>
            All elements making up the Astro Cours website — texts, courses,
            articles, illustrations, photographs, educational structure, graphic
            charter, logos and any other content — are protected by the
            provisions of the French Intellectual Property Code (Articles L.111-1
            and following).
          </p>
          <p>
            Any reproduction, representation, modification, publication,
            transmission or distortion, in whole or in part, by any process
            whatsoever and on any medium whatsoever, is strictly prohibited
            without the prior written authorisation of the publisher. Any
            unauthorised use will constitute an infringement punishable under
            Articles L.335-2 and following of the French Intellectual Property
            Code.
          </p>
        </>
      ),
    },
    {
      number: "Art. 5",
      title: "Limitation of liability",
      body: (
        <>
          <p>
            The content published on the Astro Cours website is strictly{" "}
            <strong className="text-text/90">educational and informative</strong>{" "}
            in purpose. It can in no way replace medical, legal, financial or any
            other form of professional advice. Nor does it constitute a
            prediction of future events.
          </p>
          <p>
            The publisher endeavours to ensure the accuracy and the updating of
            the information published on the website, but cannot guarantee its
            completeness or the absence of errors. The user is solely responsible
            for the use they make of the information consulted.
          </p>
          <p>
            The publisher declines all liability in the event of direct or
            indirect damage resulting from access to the website, its use or the
            impossibility of accessing it.
          </p>
        </>
      ),
    },
    {
      number: "Art. 6",
      title: "Protection of personal data",
      body: (
        <>
          <p>
            In accordance with Regulation (EU) 2016/679 of 27&nbsp;April 2016
            (GDPR) and French Act No.&nbsp;78-17 of 6&nbsp;January 1978 as
            amended on data processing, files and individual liberties, every
            user has a right of access, rectification, erasure, restriction of
            processing, portability and objection concerning their personal data.
          </p>
          <p>
            The Astro Cours website does not collect any personal data without
            the user&apos;s knowledge. No advertising cookie or third-party
            tracker is placed. Cookies strictly necessary for the technical
            functioning of the website may be used.
          </p>
          <p>
            To exercise your rights or for any question relating to the
            protection of your data, you can send your request to:{" "}
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
      number: "Art. 7",
      title: "Hypertext links",
      body: (
        <>
          <p>
            The Astro Cours website may contain hypertext links to other
            websites. The publisher exercises no control over the content of
            these third-party sites and declines all liability regarding the
            information, opinions or content accessible via these links.
          </p>
          <p>
            The creation of hypertext links to all or part of the Astro Cours
            website is subject to the prior authorisation of the publisher. This
            authorisation may be withdrawn at any time.
          </p>
        </>
      ),
    },
    {
      number: "Art. 8",
      title: "Applicable law and competent jurisdiction",
      body: (
        <>
          <p>
            This legal notice is governed by French law. In the event of a
            dispute and failing an amicable resolution, the French courts shall
            have sole jurisdiction to hear it.
          </p>
        </>
      ),
    },
  ],
  footer: (
    <p>
      Legal notice drafted in accordance with French Act No.&nbsp;2004-575 of
      21&nbsp;June 2004 (LCEN) and the General Data Protection Regulation (GDPR).
    </p>
  ),
};

/* ============================== ES ============================== */
const es: MentionsLegalesContent = {
  meta: {
    title: "Aviso legal e información jurídica",
    description:
      "Consulta el aviso legal de Astro Cours: editor, alojamiento, contacto, propiedad intelectual y condiciones de uso conformes a la ley francesa LCEN.",
  },
  jsonld: {
    name: "Aviso legal e información jurídica",
    description:
      "Consulta el aviso legal de Astro Cours: editor, alojamiento, contacto, propiedad intelectual y condiciones de uso conformes a la ley francesa LCEN.",
  },
  header: {
    eyebrow: "Obligaciones legales",
    h1: "Aviso legal del sitio Astro Cours",
    intro: (
      <>
        De conformidad con lo dispuesto en la ley francesa n.°&nbsp;2004-575 de
        21&nbsp;de junio de 2004 para la confianza en la economía digital (LCEN),
        se pone en conocimiento de los usuarios del sitio{" "}
        <strong className="text-text/80">astro-cours.com</strong> la siguiente
        información.
      </>
    ),
    lastUpdateLabel: "Última actualización",
    lastUpdate: "16 de abril de 2026",
  },
  articles: [
    {
      number: "Art. 1",
      title: "Editor del sitio",
      body: (
        <>
          <p>
            El sitio <strong className="text-text/90">astro-cours.com</strong>{" "}
            está editado por:
          </p>
          <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-[0.92rem]">
            <dt className="text-text/50">Nombre</dt>
            <dd className="text-text/80">Stéphane Gamot</dd>

            <dt className="text-text/50">Estatus</dt>
            <dd className="text-text/80">
              Empresario individual — Editor de contenidos pedagógicos
            </dd>

            <dt className="text-text/50">Sede</dt>
            <dd className="text-text/80">Francia</dd>

            <dt className="text-text/50">Contacto</dt>
            <dd>
              <a href="mailto:white-wolf-web@outlook.com" className={linkClass}>
                white-wolf-web@outlook.com
              </a>
            </dd>
          </dl>
        </>
      ),
    },
    {
      number: "Art. 2",
      title: "Director de la publicación",
      body: (
        <>
          <p>
            El director de la publicación es{" "}
            <strong className="text-text/90">Stéphane Gamot</strong>, en su
            calidad de editor del sitio, de conformidad con el
            artículo&nbsp;6-III-1 de la ley LCEN.
          </p>
        </>
      ),
    },
    {
      number: "Art. 3",
      title: "Alojamiento",
      body: (
        <>
          <p>El sitio está alojado por:</p>
          <address className="mt-2 not-italic text-text/80">
            <strong>Vercel Inc.</strong>
            <br />
            440 N Barranca Ave #4133
            <br />
            Covina, CA 91723 — Estados Unidos
            <br />
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Vercel
            </a>
          </address>
        </>
      ),
    },
    {
      number: "Art. 4",
      title: "Propiedad intelectual",
      body: (
        <>
          <p>
            El conjunto de los elementos que componen el sitio Astro Cours —
            textos, cursos, artículos, ilustraciones, fotografías, estructura
            pedagógica, identidad gráfica, logotipos y cualquier otro contenido —
            está protegido por las disposiciones del Código de la propiedad
            intelectual francés (artículos L.111-1 y siguientes).
          </p>
          <p>
            Queda estrictamente prohibida cualquier reproducción,
            representación, modificación, publicación, transmisión o
            desvirtuación, total o parcial, por cualquier procedimiento y en
            cualquier soporte, sin la autorización previa por escrito del editor.
            Toda explotación no autorizada constituirá una falsificación
            sancionada por los artículos L.335-2 y siguientes del Código de la
            propiedad intelectual.
          </p>
        </>
      ),
    },
    {
      number: "Art. 5",
      title: "Limitación de responsabilidad",
      body: (
        <>
          <p>
            Los contenidos difundidos en el sitio Astro Cours tienen una
            vocación estrictamente{" "}
            <strong className="text-text/90">pedagógica e informativa</strong>. En
            ningún caso pueden sustituir a un dictamen médico, jurídico,
            financiero o a cualquier otra forma de asesoramiento profesional.
            Tampoco constituyen una predicción de acontecimientos futuros.
          </p>
          <p>
            El editor se esfuerza por garantizar la exactitud y la actualización
            de la información difundida en el sitio, pero no puede garantizar su
            exhaustividad ni la ausencia de errores. El usuario es el único
            responsable del uso que haga de la información consultada.
          </p>
          <p>
            El editor declina toda responsabilidad en caso de daños directos o
            indirectos derivados del acceso al sitio, de su utilización o de la
            imposibilidad de acceder a él.
          </p>
        </>
      ),
    },
    {
      number: "Art. 6",
      title: "Protección de los datos personales",
      body: (
        <>
          <p>
            De conformidad con el Reglamento (UE) 2016/679 de 27&nbsp;de abril de
            2016 (RGPD) y la ley francesa n.°&nbsp;78-17 de 6&nbsp;de enero de
            1978 modificada, relativa a la informática, los ficheros y las
            libertades, todo usuario dispone de un derecho de acceso,
            rectificación, supresión, limitación del tratamiento, portabilidad y
            oposición en relación con sus datos personales.
          </p>
          <p>
            El sitio Astro Cours no recopila ningún dato personal sin el
            conocimiento del usuario. No se deposita ninguna cookie publicitaria
            ni rastreador de terceros. Pueden utilizarse cookies estrictamente
            necesarias para el funcionamiento técnico del sitio.
          </p>
          <p>
            Para ejercer tus derechos o para cualquier cuestión relativa a la
            protección de tus datos, puedes dirigir tu solicitud a:{" "}
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
      number: "Art. 7",
      title: "Enlaces de hipertexto",
      body: (
        <>
          <p>
            El sitio Astro Cours puede contener enlaces de hipertexto hacia
            otros sitios de internet. El editor no ejerce ningún control sobre el
            contenido de estos sitios de terceros y declina toda responsabilidad
            en cuanto a la información, las opiniones o los contenidos accesibles
            a través de estos enlaces.
          </p>
          <p>
            La creación de enlaces de hipertexto hacia la totalidad o una parte
            del sitio Astro Cours está sujeta a la autorización previa del
            editor. Esta autorización puede retirarse en cualquier momento.
          </p>
        </>
      ),
    },
    {
      number: "Art. 8",
      title: "Ley aplicable y jurisdicción competente",
      body: (
        <>
          <p>
            El presente aviso legal se rige por el derecho francés. En caso de
            litigio y a falta de resolución amistosa, los tribunales franceses
            serán los únicos competentes para conocer del asunto.
          </p>
        </>
      ),
    },
  ],
  footer: (
    <p>
      Aviso legal redactado de conformidad con la ley francesa n.°&nbsp;2004-575
      de 21&nbsp;de junio de 2004 (LCEN) y el Reglamento General de Protección de
      Datos (RGPD).
    </p>
  ),
};

export const mentionsLegalesContent: Record<SeoLocale, MentionsLegalesContent> = {
  fr,
  en,
  es,
};
