import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, notes, phone_number, postal_code, date, time } = await request.json();
    
    console.log("Données reçues:", { name, notes, phone_number, postal_code, date, time });

    if (!name || !phone_number || !postal_code || !date || !time) {
      console.log("Validation échouée: champs manquants");
      return NextResponse.json(
        { error: "Tous les champs requis doivent être remplis" },
        { status: 400 }
      );
    }

    const {data, error} = await supabase.from("rdv").insert([
        {
            name,
            notes,
            phone_number,
            postal_code,
            date,
            time,
            created_at: new Date().toISOString(),
        }
    ]).select();

    if (error) {
        console.error("Erreur Supabase détaillée:", error);
        return NextResponse.json(
            { error: "Erreur lors de la création du rendez-vous" },
            { status: 500 }
          );
    }

    return NextResponse.json({ data });

  } catch (error) {
    console.error("Erreur serveur complète:", error);
    return NextResponse.json(
        { error: "Erreur serveur interne" },
        { status: 500 }
      );
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase.from("rdv").select("*");
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Erreur serveur complète:", error);
    return NextResponse.json(
      { error: "Erreur serveur interne" },
      { status: 500 }
    );
  }
}

