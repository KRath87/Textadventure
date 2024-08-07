// Zeile 169 - 181 Vom Original

    for (
        let dec9 = prompt(
            "Bist du bereit zu kämpfen? ");
        dec9.toLowerCase()===  "ja"; ){}
    
    } else if (dec3.toLowerCase() === "rechts") {
        console.log("");
        console.log(
            "Du betrittst den Schweinestall voller Neugier. Dort ist es ruhig und dunkel. Doch dann hörst du ein Grunzen."
        );

        let dec14 = prompt ("Irgendwie kommt dir das alles sehr seltsam vor. Rennst du weg? ");

        if (dec14.toLowerCase () === "ja"){
            console.log ("Schnell schnappst du dir die ungewöhnlich spitze Mistgabel und rennst zum Schloss.");

       
        console.log(
            "Du betrittst den Schloßhof in dem die Prinzessin auf dich wartet. "
        );
        console.log(
            "Sie ist eine geübte Kämpferin und du kannst die Vorfreude auf euren Kampf in ihren Augen sehen. "
        );
        console.log(
            "Du weißt es wird nicht einfach, doch trittst ihr schließlich entgegen. "
        );
        console.log("");

        Kampf();}
        else {


        console.log ("Warum denn rennen? Es sind doch nur niedliche kleine Schweine...");
        console.log(
            "Plötzlich grunzt es hinter dir, und vor dir, und neben dir. ÜBERALL NUR GRUNZEN!!"
        );

        console.log("...");
        console.log("...");
        console.log("...");
        console.log("...");
        console.log(
            "Schweine sind Allesfresser. Ihnen sind nasse Hosen egal. Von dir bleibt nichts übrig. Die tollwütigen Schweine sind gut gesättigt. ENDE"
        );
    }