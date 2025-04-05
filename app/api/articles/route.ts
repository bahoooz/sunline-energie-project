import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { title, category, content, image } = await request.json();

    // Validation des données
    if (!title || !category || !content) {
      return NextResponse.json(
        { error: "Tous les champs requis doivent être remplis" },
        { status: 400 }
      );
    }

    // Création de l'article dans Supabase
    const { data, error } = await supabase
      .from("articles")
      .insert([
        {
          title,
          category,
          content,
          image,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      return NextResponse.json(
        { error: "Erreur lors de la création de l'article" },
        { status: 500 }
      );
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur serveur interne" },
      { status: 500 }
    );
  }
} 