function Kampfbereit() {
	let dec11 = prompt("Bist du bereit zu kämpfen? ");
	dec11.toLowerCase() === "ja";

	if (dec11.toLowerCase() === "ja") {
		return true;
	}
}

function Kampf() {
	for (let health = 1000; Kampfbereit === true; ) {
		let enemy = 1000;

		for (; health > 0 && enemy > 0; ) {
			let points = Math.round(Math.random() * 100);
			let hit = Math.round(Math.random() * 100);

			if (points >= 50) {
				health = health - hit;
				console.log(health);
				console.log(enemy);

				let dec12 = prompt("Du wurdest getroffen. Aber dennoch...");
				Kampfbereit();
			} else {
				enemy = enemy - hit;
				console.log(health);
				console.log(enemy);

				let dec13 = prompt("Du hast getroffen. Und jetzt?");
				Kampfbereit();
			}

			if (health <= 0) {
				console.log(
					"Leider reichten deine Schwertkünste nicht aus, du stirbst mit dem Schwert der Prinzessin in deinem Bauch. "
				);
				break;
			}
		}
	}
}
for (; Kampfbereit === true; ) {
	Kampf();
}
