export async function onRequestPost(context) {
  try {
    const data = await context.request.json();
    const nume = typeof data.nume === "string" ? data.nume.trim() : "";
    const email = typeof data.email === "string" ? data.email.trim() : "";
    const subiect = (typeof data.subiect === "string" ? data.subiect.trim() : "") || "General";
    const mesaj = typeof data.mesaj === "string" ? data.mesaj.trim() : "";


    // Anti-spam simplu: dacă un bot completează câmpul ascuns, ignorăm cererea
    if (data.website) {
      return Response.json({ ok: true }, { status: 418 });
    }

    if (!nume || mesaj.length < 3) {
      return Response.json(
        { error: "Completează numele și un mesaj de minim 3 caractere." },
        { status: 400 }
      );
    }

    if (nume.length > 100 || email.length > 150 || mesaj.length > 5000) {
      return Response.json(
        { error: "Unul dintre câmpuri depășește lungimea permisă." },
        { status: 400 }
      );
    }

    await context.env.DB.prepare(
      "INSERT INTO mesaje (nume, email, subiect, mesaj) VALUES (?, ?, ?, ?)"
    )
      .bind(nume, email, subiect, mesaj)
      .run();

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    return Response.json(
      { error: "Eroare internă la salvarea mesajului." },
      { status: 500 }
    );
  }
}
