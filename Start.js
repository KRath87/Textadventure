const prompt = require("prompt-sync")({ sigint: true });
// ich bin main
let answer = prompt("Wie heißt du? ");
if (answer.toLowerCase() === "peter") {
	console.log("");
	console.log("Schön dich kennzulernen, Peter. Das ist ein wundervoller Name.");
} else {
	console.log("");
	console.log("");
	console.log(
		"Nein." +
			answer +
			", das ist kein schöner Name. Ich nenne dich einfach Peter."
	);
	console.log("");
	console.log(
		"Schön ich kennenzulernen, Peter. Das ist ein wundervoller Name."
	);
}
console.log("");
console.log(
	"Willkommen in unserer verrückten Welt. Unter dir ist eine nasse Wiese (ja, deine Hose ist jetzt nass). Neben dir liegt ein Brief."
);
let dec1 = prompt("Möchtest du den Brief lesen oder ignorieren? ");

if (dec1.toLowerCase() === "ignorieren") {
	console.log("");
	console.log(
		"Ein riesiger Drache fliegt auf dich zu. Deine nasse Hose hindert dich am Rennen. Du verbrennst elendig in seinem Feuerstrahl. ENDE"
	);
} else if (dec1.toLowerCase() === "lesen") {
	console.log("");
	console.log(
		"Im Brief steht:  Coco der Affe ist in Gefahr, die Prinzessin hat ihn in einem Käfig gefangen und lässt ihn den lieben langen Tag für sich tanzen."
	);
	let dec2 = prompt(
		"Begibst du dich auf die Reise zu seiner Rettung? Ja oder Nein? "
	);

	if (dec2.toLowerCase() === "ja") {
		console.log("");
		console.log(
			"Du schaust dich um und entdeckst einen Schweinestall zu deiner Rechten und einen düsteren Wald zu deiner Linken. Gehst du nach rechts oder links? "
		);

		let dec3 = prompt("Entscheide dich endlich!!! Links oder rechts? ");

		if (dec3.toLowerCase() === "links") {
			console.log("");
			console.log(
				"Du gehst fröhlich pfeifend in den Wald. Plötzlich hörst du ein wundersames Geräusch und eine Fee taucht vor dir auf."
			);

			console.log(
				"Sie bietet dir drei Gegenstände im Kampf gegen die Prinzessin an:"
			);
			console.log("Einen elektrischen Rasierer, der verdächtig Funken sprüht.");
			console.log("Ein frisch geschliffenes Schwert.");
			console.log("Ein druckfrisches Ticket für AC/DC in der Medieval Edition");
			console.log("");
			let dec4 = prompt(
				"Nimmst du den Rasierer, das Schwert oder das Ticket? "
			);
			if (dec4.toLowerCase() === "schwert") {
				console.log("");
				console.log(
					"Du schnappst dir das Schwert und rennst zum Schloss der Prinzessin."
				);
				let dec7 = prompt(
					"Kannst du mit einem Schwert umgehen? Ja oder nein? "
				);
				if (dec7.toLowerCase() === "ja") {
					console.log("");
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

					Kampf();
				} else {
					console.log("");
					console.log(
						"Sie erwartet dich bereits mit gezücktem Schwert und Schild."
					);
					console.log(
						"Zu deinem Unglück ist sie eine geübte Kämpferin und du weißt gerade eben, wie man ein Schwert hält."
					);
					console.log("");
					console.log(
						"Nach zwei Sekunden steckt ihr Schwert in deinem Bauch und du brichst zusammen. ENDE"
					);
				}
			} else if (dec4.toLowerCase() === "ticket") {
				console.log("");
				console.log(
					"Du nimmst das Ticket und stehst nun vor der Entscheidung, ob du die Prinzessin beschenkst oder ob du selber auf das Konzert gehst."
				);
				let dec5 = prompt("Wer soll gehen? Peter oder die Prinzessin? ");
				if (dec5.toLowerCase() === "prinzessin") {
					console.log("");
					console.log("Du beschenkst die Prinzessin. Sie geht sofort los.");
					console.log("");
					console.log(
						"Schnell rettest du Coco, ihr geht einen Bananensplit essen. Deine Hose ist inzwischen getrocknet. Somit kannst du entspannt auf deinem Gemüt sitzen."
					);
					console.log("Herzlichen Glückwunsch!!!");
				} else {
					console.log("");
					console.log("Du nimmst dir das Ticket und genießt das Konzert.");
					console.log("Coco verrottet im Käfig.");
					console.log("");
					console.log(
						"Die Prinzessin führt ein langes, glückliches und sadistisches Leben."
					);

					console.log("");
					console.log(
						"Du wirst bei dem Konzert von einer Wall of Death überrannt."
					);
					console.log("Du stirbst im Matsch mit matschiger UND nasser Hose.");
					console.log("ENDE");
				}
			} else if (dec4.toLowerCase() === "rasierer") {
				console.log("");
				console.log(
					"Du rennst den langen Weg zum Schloss. Als du ankommst ist es bereits nachts. Die Prinzessin liegt schlafend im Bett."
				);
				console.log(
					"Du schleichst dich in die Gemächer. Rasierst du ihr die Haare? "
				);
				let dec6 = prompt("ja oder nein? ");
				if (dec6.toLowerCase() === "ja") {
					console.log("");
					console.log(
						"Gerade als du fertig geworden bist, wacht die Prinzessin entsetzt auf."
					);
					console.log(
						"Sie rennt weinend weg und du nimmst den Schlüssel unter ihrem Kopfkissen hervor."
					);
					console.log("");
					console.log(
						"Schnell rettest du Coco, ihr geht einen Bananensplit essen. Deine Hose ist inzwischen getrocknet. Somit kannst du entspannt auf deinem Gemüt sitzen."
					);
					console.log("Herzlichen Glückwunsch!!! ENDE");
				} else {
					console.log("");
					console.log(
						"Du versuchst dich an der Prinzessin vorbeizuschleichen um Coco zu retten."
					);
					console.log(
						"Leider stolperst du, landest in einer Pfütze eines Wasserschadens und dein Funken speiender Rasierer verpasst dir einen Elektroschock. "
					);
					console.log("Du bist komplett nass und mausetot.");
					console.log("");
					console.log("ENDE");
				}
			} else {
				console.log("");
				console.log(
					"Die Fee schätzt es gar nicht, wenn man sie veralbert. Lachend schwingt sie ihren Zauberstab und du vergehst in einem Funkenregen."
				);
				console.log("Deine Asche verweht im Wind. ENDE");
			}
		} else if (dec3.toLowerCase() === "rechts") {
			console.log("");
			console.log(
				"Du betrittst den Schweinestall voller Neugier. Dort ist es ruhig und dunkel. Doch dann hörst du ein Grunzen."
			);

			let dec14 = prompt(
				"Irgendwie kommt dir das alles sehr seltsam vor. Rennst du weg? "
			);

			if (dec14.toLowerCase() === "ja") {
				console.log("");
				console.log(
					"Schnell schnappst du dir die ungewöhnlich spitze Mistgabel und rennst zum Schloss."
				);

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

				Kampf();
			} else {
				console.log("");
				console.log(
					"Warum denn rennen? Es sind doch nur niedliche kleine Schweine..."
				);
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
		} else {
			console.log("");
			console.log(
				"Das ist keine Richtung. Du bleibst auf der Wiese sitzen und starrst Löcher in die Luft... In der Ferne siehst du einen Drachen näher kommen."
			);
			console.log(
				"Der Drache kommt schnell näher, Flucht ist sinnlos. Dein Leben zieht wie ein Film an deinem inneren Auge vorbei."
			);
			console.log(
				"Dann schließen sich Drachenzähne um dich und alles wird schwarz. ENDE"
			);
		}
	} else {
		console.log("");
		console.log(
			"Eine wütende Bisonherde rennt auf dich zu. Du versuchst zu entkommen, aber deine Hose ist immernoch nass und hindert dich daran."
		);
		console.log(
			"Du liegst auf dem Boden, gefaltet wie ein Origami Schwan. ENDE"
		);
	}
} else {
	console.log("");
	console.log(
		"Wenn du mir keine vernünftigen Antworten geben kannst, dann beenden wir das hier. Ich rufe den Drachen!!!"
	);
	console.log(
		"Ein riesiger Drache fliegt auf dich zu. Deine nasse Hose hindert dich am Rennen. Du verbrennst elendig in seinem Feuerstrahl. ENDE"
	);
}

function Kampfbereit() {
	let dec11 = prompt("Bist du bereit zu kämpfen? ");

	if (dec11.toLowerCase() === "ja") {
		return true;
	} else {
		return Kampfbereit();
	}
}

function Kampf() {
	let enemy = 1000;
	let health = 1000;

	for (; health > 0 && enemy > 0 && Kampfbereit() === true; ) {
		let points = Math.round(Math.random() * 100);
		let hit = Math.round(Math.random() * 100) + 200;

		if (points >= 50) {
			health = health - hit;
			console.log("");
			console.log("Deine HP = ", health);
			console.log("");
			console.log("Prinzessin HP = ", enemy);
			console.log("");

			if (health <= 0) {
				console.log(
					"Leider reichten deine Schwertkünste nicht aus, du stirbst mit dem Schwert der Prinzessin in deinem Bauch. "
				);
				console.log(
					"Das Glück war nicht auf deiner Seite... Du stirbst einsam und mit nasser Hose im Schlosshof. ENDE"
				);
			} else {
				let dec12 = prompt(
					"Du wurdest getroffen. Aber dennoch...drück vielleicht mal Enter"
				);
			}
		} else {
			enemy = enemy - hit;
			console.log("");
			console.log("Deine HP = ", health);
			console.log("");
			console.log("Prinzessin HP = ", enemy);
			console.log("");

			if (enemy <= 0) {
				console.log(
					"In einem letzten verzweifelten Angriff landet deine Waffe in ihrem Bauch und sie bricht sterbend zusammen."
				);
				console.log(
					"Du rennst ins Schloss und rettest Coco. Ihr geht ein Eis essen und trocknet deine Hose im Waschsalon."
				);
				console.log("Herzlichen Glückwunsch!! ENDE");
				break;
			} else {
				let dec13 = prompt(
					"Du hast getroffen. Und jetzt...drückst du vielleicht lieber Enter"
				);
			}
		}
	}
}
