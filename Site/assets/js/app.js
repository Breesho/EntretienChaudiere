function init() {

	interv = setInterval("incrementer1()", 200);
	interv = setInterval("incrementer2()", 200);
	interv = setInterval("incrementer3()", 200);

};

var compteur1 = 1;
var compteur2 = 1;
var compteur3 = 1;

var interv;

var temps1 = 20;
var temps2 = 18;
var temps3 = 18;

var max1 = 35;
var max2 = 154;
var max3 = 18480;

function incrementer1() {
	range = max1 / temps1;
	if (compteur1 < max1 - range && range > 1) {
		compteur1 = Math.round(compteur1 + range);
		document.getElementById('compteur1').innerHTML = compteur1 + '%';
	}
	else {
		document.getElementById('compteur1').innerHTML = max1 + '%';
	};
};

function incrementer2() {
	range = max2 / temps2;
	if (compteur2 < max2 - range && range > 1) {
		compteur2 = Math.round(compteur2 + range);
		document.getElementById('compteur2').innerHTML = compteur2;
	}
	else {
		document.getElementById('compteur2').innerHTML = max2;
	};
};

function incrementer3() {
	range = max3 / temps3;
	if (compteur3 < max3 - range && range > 1) {
		compteur3 = Math.round(compteur3 + range);
		document.getElementById('compteur3').innerHTML = Intl.NumberFormat().format(compteur3) + '€';
	}
	else {
		document.getElementById('compteur3').innerHTML = Intl.NumberFormat().format(max3) + '€';
	};
};


function illu(fonction) {


	let modifillu_fonction = document.getElementById('illu_fonction')
	modifillu_fonction.style.backgroundColor = "whitesmoke";
	modifillu_fonction.style.margin = "0 auto";
	modifillu_fonction.style.color = "black";
	modifillu_fonction.style.minHeight = "250px";
	modifillu_fonction.style.padding = "20px";
	modifillu_fonction.style.display = "block";

 
	if (fonction == 1) {

		contenu = "<h3>Dématérialisation complète de vos entretiens</h3>";
		contenu = contenu + "<p>Parce que toute la gestion qui va autour des interventions est lourde, nous avons développé une solution pour vous faciliter la vie. Tout se fait sur votre téléphone ou une tablette. Plus besoin de papier. Un accès facilité à vos documents partout, tout le temps, oubliez le temps passé à classer vos documents, la place que cela prends et surtout prenez soin de vos clients car ils sont précieux.</p><br>";
		contenu = contenu + "<p>Les fiches de votre clientèle, à jour en temps réel. Seul ou à plusieurs, collaborez et retrouvez beaucoup d’informations et même des photos. Vos attestations, documents et factures au même endroit.</p><br>";
		contenu = contenu + "<p>35% de gain de temps en moyenne par rapport à un logiciel classique. Vous oubliez des échéances, lui, jamais !</p>";
	};
	if (fonction == 2) {

		contenu = "<h3>Gestion de vos RDV par secteur géographique et compétences</h3>";
		contenu = contenu + "<p>Le système prend en compte chacun de vos techniciens et propose le meilleur planning de déplacement en prenant soin de distinguer le type d’intervention, son temps et le lieu de départ. Ainsi plus besoin de reprendre chacune des tournées pour les optimiser. Un algorithme développé par nos équipes fait le job.</p><br>";
		contenu = contenu + "<p>Vous avez la main sur le temps que dure chaque intervention et le coût à y attribuer.</p>";
	};
	if (fonction == 3) {

		contenu = "<h3>SMS et mails de rappel automatique</h3>";
		contenu = contenu + "<p>Un gain de temps au quotidien, des sms et mails de rappel personnalisés.</p><br>";
		contenu = contenu + "<p>Ne restez plus devant une porte close, le système envoie 24h avant vos interventions un sms de rappel afin de rappeler votre venue.</p><br>";
		contenu = contenu + "<p>Constituer un fichier de clients sous contrat ou non avec une récurrence est précieux. Alors pour ne pas oublier qui que ce soit chaque année à l’échéance, faites confiance à notre système automatisé de relance. Des mails et sms de relance adaptés dans le temps pour que vos clients sachent que vous pensez à eux.</p>";
	};
	if (fonction == 4) {


		contenu = "<h3>Factures et attestations qui se génèrent automatiquement<br>Création de devis et avoir intégrée</h3>";
		contenu = contenu + "<p>Le système génère à chaque intervention l’ensemble des documents nécessaires. Plus besoin de perdre du temps à créer les documents indépendamment les uns des autres. Un gain de temps formidable, pour pouvoir se concentrer essentiellement à son activité.</p><br>";
		contenu = contenu + "<p>C'est fini les commandes de blocs d’attestations d’entretien ou de TVA. Désormais vous faites un geste pour la planète, 49 grammes de gagnés par intervention.";
	};
	if (fonction == 5) {


		contenu = "<h3>Apport de nouveaux clients et respect de la RGPD</h3>";
		contenu = contenu + "<p>Imaginez, vous travaillez tous les jours sur un logiciel, qui vous apporte un gain de temps important et par moment vous recevez une sollicitation pour intervenir chez un nouveau client. Vous n’avez plus qu’à intervenir. Votre chiffre d’affaires augmente et de nouvelles opportunités s’offrent à vous.</p><br>";
		contenu = contenu + "<p>De plus, permettez à vos clients d’accéder à leurs documents en ligne (Factures, attestation d’entretiens, TVA etc…). Vous êtes ainsi en règle avec la R.G.P.D.";
	};
	if (fonction == 6) {


		contenu = "<h3>Signature électronique</h3>";
		contenu = contenu + "<p>La signature électronique est un mécanisme permettant de garantir l'intégrité d'un document électronique et d'en authentifier l'auteur, par analogie avec la signature manuscrite d'un document papier. Ainsi d’une simple signature, l’ensemble des documents de vos clients se retrouvent remplis.</p><br>";
		contenu = contenu + "<p>Ne courez plus après vos attestations de TVA.</p>";
	};
	if (fonction == 7) {

		contenu = "<h3>Paiement sur le site par CB, Paypal, virement</h3>";
		contenu = contenu + "<p>Un abonnement pour le TPE, des frais sur les encaissements, l’obligation d’avoir du réseau ou de la batterie. Oubliez tout cela, avec notre système de paiement, vos clients peuvent payer en une, 4 ou 12 fois sans frais depuis leur salon. Vos interventions sont déjà payées avant d’y allé. Pour ceux qui souhaitent payer après c’est possible depuis son espace client ou via le professionnel sur place.</p><br>";
		contenu = contenu + "<p>Alors ne cherchez plus ! C’est la solution pour éviter les impayés.</p>";
	};
	document.getElementById("illu_fonction").innerHTML = contenu;
};

