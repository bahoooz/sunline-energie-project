"use client";

import HeaderAvis from "@/components/Avis/HeaderAvis";
import InstallationsSolaires from "@/components/InstallationsSolaires";
import FAQ from "@/components/FAQ";
import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Avis() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await fetch("/api/reviews");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des avis :", error);
      }
    };

    getReviews();
  }, []);

  return (
    <div className="mt-32">
      <HeaderAvis />
      <div className="mt-20">
        <h2 className="text-center font-bold text-2xl lg:text-3xl px-7">
          Ils ont été installés par Sunline
        </h2>
        <div className="flex flex-col items-center mt-12 gap-12">
          <div className="flex items-end gap-3">
            <div className="flex">
              <Star fill="#FEB50B" strokeWidth={0} size={32} />
              <Star fill="#FEB50B" strokeWidth={0} size={32} />
              <Star fill="#FEB50B" strokeWidth={0} size={32} />
              <Star fill="#FEB50B" strokeWidth={0} size={32} />
              <Star fill="#FEB50B" strokeWidth={0} size={32} />
            </div>
            <span className="font-bold text-2xl">5</span>
          </div>
          <p className="text-xl lg:text-2xl">
            {/* {reviews.length} avis Google et Facebook */}
            11 avis Google et Facebook
          </p>
          <div>
            {reviews.map((review, index) => (
              <div key={index} className="mt-4">
                <p className="font-bold">{review.author_name}</p>
                <p>{review.text}</p>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} fill="#FEB50B" strokeWidth={0} size={24} />
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <StarOff key={i} size={24} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FAQ />
      <InstallationsSolaires />
    </div>
  );
}
