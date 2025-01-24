import React from "react";

export default function MentionsLegales() {
  return (
    <div className="pt-36 p-8 bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Mentions Légales</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Éditeur du site</h2>
          <p>
            <strong>Nom de l’entreprise :</strong> Sunline
            <br />
            <strong>Forme juridique :</strong> SAS
            <br />
            <strong>Adresse :</strong> 14 rue Augustin Fresnel, 17180 Périgny, France
            <br />
            <strong>Téléphone :</strong> 09 75 30 91 57
            <br />
            <strong>Email :</strong> contact@sunline-energie.fr
            <br />
            <strong>SIRET :</strong> 980 258 610 00024
            <br />
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Hébergement</h2>
          <p>
            <strong>Nom de l’hébergeur :</strong> Hostinger
            <br />
            <strong>Adresse :</strong> Hostinger International Ltd, 61 Lordou Vironos Street, 6023 Larnaca, Chypre
            <br />
            <strong>Téléphone :</strong> +357 22 030 654
            <br />
            <strong>Site internet :</strong>{" "}
            <a href="https://www.hostinger.fr" className="text-blue-600 underline">
              www.hostinger.fr
            </a>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Propriété intellectuelle</h2>
          <p>
            Tous les contenus présents sur le site Sunline (textes, images, vidéos, logos, etc.) sont protégés par les
            lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction, distribution
            ou modification de ces contenus sans autorisation écrite préalable est strictement interdite.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Données personnelles</h2>
          <p>
            Sunline s’engage à respecter la confidentialité des données personnelles conformément au Règlement Général
            sur la Protection des Données (RGPD).
          </p>
          <p>
            <strong>Données collectées :</strong> Les informations transmises via les formulaires de contact ou de devis
            (nom, email, téléphone, etc.) et les données collectées par les cookies à des fins statistiques ou de
            personnalisation.
          </p>
          <p>
            <strong>Vos droits :</strong> Vous disposez d’un droit d’accès, de modification, de suppression et de
            portabilité de vos données personnelles. Pour toute demande concernant vos données personnelles,
            contactez-nous par email à l’adresse suivante : contact@sunline-energie.fr.
          </p>
          <p>
            <strong>Utilisation des cookies :</strong> Ce site utilise des cookies pour améliorer l’expérience utilisateur
            et réaliser des analyses statistiques. Vous pouvez gérer vos préférences de cookies à tout moment via notre
            gestionnaire de cookies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Responsabilités</h2>
          <p>
            Sunline met tout en œuvre pour fournir des informations exactes et actualisées sur son site. Cependant,
            l’entreprise ne peut être tenue responsable :
          </p>
          <ul className="list-disc list-inside">
            <li>Des éventuelles erreurs ou omissions dans les contenus publiés ;</li>
            <li>Des interruptions techniques du site ;</li>
            <li>Des dommages directs ou indirects résultant de l’utilisation du site.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>
            Pour toute question ou demande concernant les mentions légales ou l’utilisation du site :
          </p>
          <p>
            <strong>Email :</strong> contact@sunline-energie.fr
            <br />
            <strong>Téléphone :</strong> 09 75 30 91 57
            <br />
            <strong>Adresse :</strong> 14 rue Augustin Fresnel, 17180 Périgny, France
          </p>
        </section>
      </div>
    </div>
  );
}
