"use client";

import React from "react";
import { Calendar } from "@heroui/calendar";
import { useState } from "react";
import { TimeInput } from "@heroui/date-input";
import useSupabaseQuery from "@/hooks/useSupabaseQuery";

interface MemberTeam {
  id: number;
  name: string;
  email: string;
  // Ajoutez d'autres champs selon votre schéma
}

export default function Test() {
  const { data, error, loading } = useSupabaseQuery<MemberTeam>("members_team");

  return (
    <div className="h-screen py-56 flex justify-center">
      <div className="w-full max-w-md flex flex-col gap-4">
        <Calendar className="rounded-md border overflow-hidden" />
        <TimeInput />
      </div>
      <div>
        {loading ? (
          <p>Chargement de l'équipe...</p>
        ) : (
          <div>
            <h3>Membres de l'équipe :</h3>
            <ul>
              {data?.map(item => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
