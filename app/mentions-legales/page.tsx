import React from "react";

export default function MentionsLegales() {
  return (
    <div className="p-8 bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Mentions Légales</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Éditeur du site</h2>
          <p>
            Nom de l'entreprise : <strong>Votre Entreprise</strong>
            <br />
            Adresse : 123 Rue Exemple, 75000 Paris, France
            <br />
            Téléphone : 01 23 45 67 89
            <br />
            Email : contact@votreentreprise.com
            <br />
            SIRET : 123 456 789 00000
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Hébergement</h2>
          <p>
            Hébergeur : <strong>Nom de l'hébergeur</strong>
            <br />
            Adresse : 456 Rue Hébergeur, 75001 Paris, France
            <br />
            Téléphone : 01 98 76 54 32
            <br />
            Site web : <a href="https://www.hebergeur.com" className="text-blue-600 underline">www.hebergeur.com</a>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Propriété intellectuelle</h2>
          <p>
            Tous les contenus présents sur ce site (textes, images, logos, etc.) sont protégés par le droit d'auteur.
            Toute reproduction, distribution ou modification de ces contenus est interdite sans l'autorisation écrite
            préalable de <strong>Votre Entreprise</strong>.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Données personnelles</h2>
          <p>
            Les données personnelles collectées sur ce site sont destinées exclusivement à <strong>Votre Entreprise</strong>.
            Vous disposez d’un droit d’accès, de modification et de suppression de vos données, conformément à la loi
            Informatique et Libertés. Pour toute demande, contactez-nous à l’adresse : contact@votreentreprise.com.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Responsabilité</h2>
          <p>
            <strong>Votre Entreprise</strong> ne peut être tenue responsable des dommages directs ou indirects résultant
            de l’utilisation de ce site ou de l’impossibilité d’y accéder.
          </p>
        </section>
      </div>
    </div>
  );
}
