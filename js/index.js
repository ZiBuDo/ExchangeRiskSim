const normDist = new NormalDistribution(0, 1);
var intd =	GBM(.5, .1, .1, 1, 1600, true); 
var inte = GBM(.01, .1, .1, 1, 1600, true); 
var intp = GBM(4.25, .1, .1, 1, 1600, true); 
var deuro = GBM(.8, .15, .3, 1, 1600, true); //graph for the rounds
var dpeso = GBM(19, .25, .4, 1, 1600, true);
var epeso = [];
for(var i = 0; i < 1600; i++){
	epeso.push(dpeso[i]/deuro[i]);
}

var dollars = 100000;
var euros;
var pesos;
var loans = 0;
var finalscore;
var difficulty;
$(document).ready(function(){
	$.ajaxSetup({ cache: false });
	$.ajax({
	   url: 'assets/php/highscores.php?request=fetch',
	   error: function() {
		 
		  
	   },
	   dataType: 'text',
	   success: function(data) {
		   var html = "<tr><th>Name</th><th>Score</th></tr>";
		   html += data;
		   $("#highscorestable").html(html);
	   },
	   type: 'GET'
	});
	
	
	
	
	
	
	var labelsEx = [];
	for(var i = 0; i < 400; i++){
		if(i == 0){
			labelsEx.push(i);
		}else if(i == 199){
			labelsEx.push("6 Months");
		}else{
			labelsEx.push("");
		}
	}
	labelsEx.push("1 year");
	var labelsChart = [];
	for(var i = 0; i < 1600; i++){
		if(i == 0){
			labelsChart.push(i);
		}else if(i % 200 == 0){
			var t = i / 200;
			t = t * 6;
			labelsChart.push(t + " Months");
		}else{
			labelsChart.push("");
		}
	}
	var exCurr = document.getElementById("exampleCurrency");
		var data = {
		labels: labelsEx,
		datasets: [
        {
            label: "$/Euro",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(0,153,51,0.4)",
            borderColor: "rgba(0,153,51,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(0,153,51,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(0,153,51,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: GBM(.8, .2, .35, 1, 400, true),
            spanGaps: false,
        }
		
		]};
		var exCurrChart = new Chart(exCurr, {
			type: 'line',
			data: data
		
		});
	
	var exInt = document.getElementById("exampleInterest");
		var data = {
		labels: labelsEx,
		datasets: [
        {
            label: "$",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(70,130,180,0.4)",
            borderColor: "rgba(70,130,180,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(70,130,180,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(70,130,180,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: GBM(.25, .2, .1, 1, 400, true),
            spanGaps: false,
        }
		
		]};
		var exIntChart = new Chart(exInt, {
			type: 'line',
			data: data
		
		});
	
	for(var i = 1; i < 5; i++){
		var lab = labelsChart.slice(((i-1)*400), (i*400));
		var deuroArr = deuro.slice(((i-1)*400), (i*400));
		var dpesoArr = dpeso.slice(((i-1)*400), (i*400));
		var epesoArr = epeso.slice(((i-1)*400), (i*400));
		var tmp = document.getElementById("exrd" + i);
			var data = {
			labels: lab,
			datasets: [
			{
				label: "$/Euro",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(70,130,180,0.4)",
				borderColor: "rgba(70,130,180,1)",
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "rgba(70,130,180,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(70,130,180,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: deuroArr,
				spanGaps: false,
			},{
				label: "$/Peso",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(0,153,51,0.4)",
				borderColor: "rgba(0,153,51,1)",
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "rgba(0,153,51,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(0,153,51,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: dpesoArr,
				spanGaps: false,
			},{
				label: "Euro/Peso",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(178,34,34,0.4)",
				borderColor: "rgba(178,34,34,1)",
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "rgba(178,34,34,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(178,34,34,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: epesoArr,
				spanGaps: false,
			}
			
			]};
			var tmpChart = new Chart(tmp, {
				type: 'line',
				data: data
			
			});
		
		var intdArr = intd.slice(0, (i*400));
		var inteArr = inte.slice(0, (i*400));
		var intpArr = intp.slice(0, (i*400));
		var tmp2 = document.getElementById("intrd" + i);
			data = {
			labels: lab,
			datasets: [
			{
				label: "Dollar",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(70,130,180,0.4)",
				borderColor: "rgba(70,130,180,1)",
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "rgba(70,130,180,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(70,130,180,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: intdArr,
				spanGaps: false,
			},{
				label: "Euro",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(0,153,51,0.4)",
				borderColor: "rgba(0,153,51,1)",
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "rgba(0,153,51,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(0,153,51,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: inteArr,
				spanGaps: false,
			},{
				label: "Peso",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(178,34,34,0.4)",
				borderColor: "rgba(178,34,34,1)",
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "rgba(178,34,34,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(178,34,34,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: intpArr,
				spanGaps: false,
			}
			
			]};
			var tmp2Chart = new Chart(tmp2, {
				type: 'line',
				data: data
			
			});
			
	}
	
	//initialize euros and pesos constants at round start
	euros = deuro[399] * 5000;
	pesos = dpeso[399] * 5000;
	initRound();
	$("#production").change(function(){
		changeDec();
	});

	
	$("#d2p").change(function(){
		changeDec();
	});
	$("#d2e").change(function(){
		changeDec();
	});
	$("#e2p").change(function(){
		changeDec();
	});
	$("#e2d").change(function(){
		changeDec();
	});
	$("#p2e").change(function(){
		changeDec();
	});
	$("#p2d").change(function(){
		changeDec();
	});
	$("#amountLoan").change(function(){
		changeDec();
	});
	$("#actionLoan").change(function(){
		changeDec();
	});
	
	$("#actiondec").change(function(){
		changeDec();
	});
	
	$("#unitsdec").change(function(){
		changeDec();
	});
	$("#actiondpc").change(function(){
		changeDec();
	});
	
	$("#unitsdpc").change(function(){
		changeDec();
	});
	$("#actionepc").change(function(){
		changeDec();
	});
	
	$("#unitsepc").change(function(){
		changeDec();
	});
	
	$("#typee").change(function(){
		changeDec();
	});
	$("#strikee").change(function(){
		changeDec();
	});
	$("#unitse").change(function(){
		changeDec();
	});
	
	$("#typep").change(function(){
		changeDec();
	});
	$("#strikep").change(function(){
		changeDec();
	});
	$("#unitsp").change(function(){
		changeDec();
	});
});
function submitDecisions(){
	round = round + 1;
	var rnd = round - 1;
	//calculate round w/ endD endE endP endL
	endD = +(dollars + cashflowE + cashflowP + projSales + cashflowDE + cashflowDP - intdue - $("#d2p").val() - $("#d2e").val() + $("#e2d").val()/deuro[(round * 400)-1] + $("#p2d").val()/dpeso[(round * 400)-1]).toFixed(2);
	endE = +(euros - (cashflowDE/Number(rateDE)) + cashflowEP - matCosts - $("#e2p").val() - $("#e2d").val() + $("#d2e").val()*deuro[(round * 400)-1] + $("#p2e").val()/epeso[(round * 400)-1]).toFixed(2);
	endP = +(pesos - (cashflowDP/Number(rateDP)) - (cashflowEP/Number(rateEP)) - prodCosts - $("#p2e").val() - $("#p2d").val() + $("#e2p").val()*epeso[(round * 400)-1] + $("#d2p").val()*dpeso[(round * 400)-1]).toFixed(2);
		//currency option payoffs
		var payoffE;
		var payoffP;
		if($("#typee").val() == "call"){
			if(strikeE > deuro[(round * 400)-1]){
				payoffE = 0;
			}else{
				payoffE = (deuro[(round * 400)-1] - strikeE)*unitsE;
			}
		}else{
			if(strikeE > deuro[(round * 400)-1]){
				payoffE = (strikeE - deuro[(round * 400)-1])*unitsE;
			}else{
				payoffE = 0;
			}
		}
		if($("#typep").val() == "call"){
			if(strikeP > dpeso[(round * 400)-1]){
				payoffP = 0;
			}else{
				payoffP = (dpeso[(round * 400)-1] - strikeP)*unitsP;
			}
		}else{
			if(strikeP > dpeso[(round * 400)-1]){
				payoffP = (strikeP - dpeso[(round * 400)-1])*unitsP;
			}else{
				payoffP = 0;
			}
		}
	endD += payoffP + payoffE;
	var emergencyLoans = 0;
	if(endD < 0){
		endL += (0 - endD);
		emergencyLoans += (0 - endD);
		endD = 0;
	}
	if(endE < 0){
		endL += (0 - endE/deuro[(round * 400)-1]);
		emergencyLoans += (0 - endE/deuro[(round * 400)-1]);
		endE = 0;
	}
	if(endP < 0){
		endL += (0 - endP/dpeso[(round * 400)-1]);
		emergencyLoans += (0 - endP/dpeso[(round * 400)-1]);
		endP = 0;
	}
	//create round results  Start Rate -> Final Rate   Show decisions and payoffs as well as loans
	if(round != 4){
		$("#Round1not" + rnd).hide();
		$("#RoundInfo" + rnd).show();
		$("#ratebDE" + rnd).html("$/&euro;" + deuro[(rnd * 400)-1].toFixed(3));
		$("#ratebDP" + rnd).html("$/&#8369;" + dpeso[(rnd * 400)-1].toFixed(3));
		$("#ratebEP" + rnd).html("&euro;/&#8369;" + epeso[(rnd * 400)-1].toFixed(3));
		$("#rateeDE" + rnd).html("$/&euro;" + deuro[(round * 400)-1].toFixed(3));
		$("#rateeDP" + rnd).html("$/&#8369;" + dpeso[(round * 400)-1].toFixed(3));
		$("#rateeEP" + rnd).html("&euro;/&#8369;" + epeso[(round * 400)-1].toFixed(3));
		$("#euroopt" + rnd).html("$" + payoffE.toFixed(3));
		$("#pesoopt" + rnd).html("$" + payoffP.toFixed(3));
		$("#eloans" + rnd).html("$" + comma(emergencyLoans.toFixed(2)));
		$("#fundDf" + rnd).html(comma(endD.toFixed(2)));
		$("#fundEf" + rnd).html(comma(endE.toFixed(2)));
		$("#fundPf" + rnd).html(comma(endP.toFixed(2)));
		$("#fundLf" + rnd).html(comma(endL.toFixed(2)));
	}else{
		$("#Round1not" + round).hide();
		$("#RoundInfo" + round).show();
		$("#Round1not" + rnd).hide();
		$("#RoundInfo" + rnd).show();
		$("#ratebDE" + rnd).html("$/&euro;" + deuro[(rnd * 400)-1].toFixed(3));
		$("#ratebDP" + rnd).html("$/&#8369;" + dpeso[(rnd * 400)-1].toFixed(3));
		$("#ratebEP" + rnd).html("&euro;/&#8369;" + epeso[(rnd * 400)-1].toFixed(3));
		$("#rateeDE" + rnd).html("$/&euro;" + deuro[(round * 400)-1].toFixed(3));
		$("#rateeDP" + rnd).html("$/&#8369;" + dpeso[(round * 400)-1].toFixed(3));
		$("#rateeEP" + rnd).html("&euro;/&#8369;" + epeso[(round * 400)-1].toFixed(3));
		$("#euroopt" + rnd).html("$" + payoffE.toFixed(3));
		$("#pesoopt" + rnd).html("$" + payoffP.toFixed(3));
		$("#eloans" + rnd).html("$" + comma(emergencyLoans.toFixed(2)));
		$("#fundDf" + rnd).html(comma(endD.toFixed(2)));
		$("#fundEf" + rnd).html(comma(endE.toFixed(2)));
		$("#fundPf" + rnd).html(comma(endP.toFixed(2)));
		$("#fundLf" + rnd).html(comma(endL.toFixed(2)));
		$("#fundDf" + round).html(comma(endD.toFixed(2)));
		$("#fundEf" + round).html(comma(endE.toFixed(2)));
		$("#fundPf" + round).html(comma(endP.toFixed(2)));
		$("#fundLf" + round).html(comma(endL.toFixed(2)));
		$("#definal").html(deuro[(round * 400)-1].toFixed(2));
		$("#dpfinal").html(dpeso[(round * 400)-1].toFixed(2));
		$("#epfinal").html(epeso[(round * 400)-1].toFixed(2));
		var finaldollar = endD - endL + endP/dpeso[(round * 400)-1] + endE/deuro[(round * 400)-1];
		$("#finaldollar").html(comma(finaldollar.toFixed(2)));
		//lower it is the harder it is
		difficulty = ((((deuro[(1 * 400)-1] + deuro[(2 * 400)-1] + deuro[(2 * 400)-1] + deuro[(3 * 400)-1] + deuro[(4 * 400)-1])/4)*10) + (((dpeso[(1 * 400)-1] + dpeso[(2 * 400)-1] + dpeso[(2 * 400)-1] + dpeso[(3 * 400)-1] + dpeso[(4 * 400)-1])/4)/2))/2;
		$("#difficulty").html(difficulty.toFixed(2));
		finalscore = finaldollar / difficulty;
		$("#finalscore").html(comma(finalscore.toFixed(2)));
	}
	//start next round
	dollars = endD;
	pesos = endP;
	euros = endE;
	production = 500;
	loans = endL;
	initRound();
	$("#navbar a[href='#Round" + rnd + "']").tab('show');
}
var username = "";
function submitScore(){
	if(username == "" || username == undefined){
		alert("Enter Your Name");
	}else{
		$.ajax({
		   url: 'assets/php/highscores.php?request=submit&score=' + finalscore + '&diff=' + difficulty + '&name=' + username,
		   error: function() {
			 
			  
		   },
		   dataType: 'text',
		   success: function(data) {
			   $.ajax({
				   url: 'assets/php/highscores.php?request=fetch',
				   error: function() {
					 
					  
				   },
				   dataType: 'text',
				   success: function(data) {
					   var html = "<tr><th>Name</th><th>Score</th></tr>";
					   html += data;
					   $("#highscorestable").html(html);
				   },
				   type: 'GET'
				});
			   $("#navbar a[href='#Highscores']").tab('show');
		   },
		   type: 'GET'
		});
	}
}
function toFinal(){
	$("#navbar a[href='#Round4']").tab('show');
}
function toNext(){
	$("#navbar a[href='#Decisions']").tab('show');
}
function changeDec(){
	//change production
	if(production != $("#production").val()){
		production = $("#production").val();
		if(Number(production) == "NaN"){
			production = 1;
			$("#production").val(1);
		}
		if(production < 1){
			production = 1;
			$("#production").val(1);
		}
		price = (((25000+(1000*production))/dpeso[(round * 400)-1] + (100*production)/deuro[(round * 400)-1]) / production)/.7;
		$("#price").html("$" + comma(price.toFixed(2)));
		prodCosts = (25000+(1000*production));
		matCosts = 100*production;
		$("#prodCosts").html("&#8369;" + comma(prodCosts.toFixed(2)));
		$("#matCosts").html("&euro;" + comma(matCosts.toFixed(2)));
	}
	projSales = (((((-5/12) * price) + 175)/100)*production)* price;
	$("#projSales").html("$" + comma(projSales.toFixed(2)));
	//change exchange
	checkNumber("#d2p");
	checkNumber("#d2e");
	checkNumber("#e2p");
	checkNumber("#e2d");
	checkNumber("#p2e");
	checkNumber("#p2d");
	calcEnd();
	if(d2pchange != $("#d2p").val()){
		calcEnd();
		$("#fundDf").html(comma(endD));
		$("#fundPf").html(comma(endP));
		d2pchange = $("#d2p").val();
	}
	if(d2echange != $("#d2e").val()){
		calcEnd();
		$("#fundDf").html(comma(endD));
		$("#fundEf").html(comma(endE));
		d2echange = $("#d2e").val();
	}
	if(e2pchange != $("#e2p").val()){
		calcEnd();
		$("#fundEf").html(comma(endE));
		$("#fundPf").html(comma(endP));
		e2pchange = $("#e2p").val();
	}
	if(e2dchange != $("#e2d").val()){
		calcEnd();
		$("#fundEf").html(comma(endE));
		$("#fundDf").html(comma(endD));
		e2dchange = $("#e2d").val();
	}
	if(p2echange != $("#p2e").val()){
		calcEnd();
		$("#fundPf").html(comma(endP));
		$("#fundEf").html(comma(endE));
		p2echange = $("#p2e").val();
	}
	if(p2dchange != $("#p2d").val()){
		calcEnd();
		$("#fundPf").html(comma(endP));
		$("#fundDf").html(comma(endD));
		p2dchange = $("#p2d").val();
	}
	
	//loan amount value
	if(loanAMT != $("#amountLoan").val()){
		checkNumber("#amountLoan");
		if($("#actionLoan").val() == "take"){
			if(loanAMT > $("#amountLoan").val()){
				dollars = dollars - (Number(loanAMT) - $("#amountLoan").val());
			}else{
				dollars = dollars + ($("#amountLoan").val() - Number(loanAMT));
			}
			loanAMT = $("#amountLoan").val();
			endL = Number(loanAMT) + loans;
			$("#fundLf").html(comma(endL)); 
		}else{
			if($("#amountLoan").val() > loans){
				$("#amountLoan").val(loans);
			}
			if(loanAMT > $("#amountLoan").val()){
				dollars = dollars + (Number(loanAMT) - $("#amountLoan").val());
			}else{
				dollars = dollars - ($("#amountLoan").val() - Number(loanAMT));
			}
			loanAMT = $("#amountLoan").val();
			endL = loans - Number(loanAMT);
			$("#fundLf").html(comma(endL)); 
		}
		calcEnd();
		$("#fundDf").html(comma(endD));
		intdue = endL * intd[(round * 400)-1]/100;
		$("#intdue").html("$"+comma(intdue.toFixed(2)));
	}
	//loan type change
	if(loanType != $("#actionLoan").val()){
		if(loanType == "take"){
			dollars = dollars - Number(loanAMT);
			endL = loans;
			$("#fundLf").html(comma(endL)); 
		}else{
			dollars = dollars + Number(loanAMT);
			endL = loans;
			$("#fundLf").html(comma(endL)); 
		}
		loanType = $("#actionLoan").val();
		loanAMT = 0;
		$("#amountLoan").val(0);
		calcEnd();
		$("#fundDf").html(comma(endD));
		intdue = endL * intd[(round * 400)-1]/100;
		$("#intdue").html("$"+comma(intdue.toFixed(2)));
	}
	
	//forward contracts
		//type
	if(typeDE != $("#actiondec").val()){
		typeDE = $("#actiondec").val();
		if(typeDE == "buy"){
			cashflowDE = -1 * rateDE * $("#unitsdec").val();
			$("#cashdec").html("$"+comma(cashflowDE.toFixed(2)));
		}else{
			cashflowDE = rateDE * $("#unitsdec").val();
			$("#cashdec").html("$"+comma(cashflowDE.toFixed(2)));
		}
	}
	if(typeDP != $("#actiondpc").val()){
		typeDP = $("#actiondpc").val();
		if(typeDP == "buy"){
			cashflowDP = -1 * rateDP * $("#unitsdpc").val();
			$("#cashdpc").html("$"+comma(cashflowDP.toFixed(2)));
		}else{
			cashflowDP = rateDP * $("#unitsdpc").val();
			$("#cashdpc").html("$"+comma(cashflowDP.toFixed(2)));
		}
	}
	if(typeEP != $("#actionepc").val()){
		typeEP = $("#actionepc").val();
		if(typeEP == "buy"){
			cashflowEP = -1 * rateEP * $("#unitsepc").val();
			$("#cashepc").html("&euro;"+comma(cashflowEP.toFixed(2)));
		}else{
			cashflowEP = rateEP * $("#unitsepc").val();
			$("#cashepc").html("&euro;"+comma(cashflowEP.toFixed(2)));
		}
	}
		//units
	if(unitsDE != $("#unitsdec").val()){
		checkNumber("#unitsdec");
		unitsDE = $("#unitsdec").val();
		if(typeDE == "buy"){
			cashflowDE = -1 * rateDE * $("#unitsdec").val();
			$("#cashdec").html("$"+comma(cashflowDE.toFixed(2)));
		}else{
			cashflowDE = rateDE * $("#unitsdec").val();
			$("#cashdec").html("$"+comma(cashflowDE.toFixed(2)));
		}
	}
	if(unitsDP != $("#unitsdpc").val()){
		checkNumber("#unitsdpc");
		unitsDP = $("#unitsdpc").val();
		if(typeDP == "buy"){
			cashflowDP = -1 * rateDP * $("#unitsdpc").val();
			$("#cashdpc").html("$"+comma(cashflowDP.toFixed(2)));
		}else{
			cashflowDP = rateDP * $("#unitsdpc").val();
			$("#cashdpc").html("$"+comma(cashflowDP.toFixed(2)));
		}
	}
	if(unitsEP != $("#unitsepc").val()){
		checkNumber("#unitsepc");
		unitsEP = $("#unitsepc").val();
		if(typeEP == "buy"){
			cashflowEP = -1 *  rateEP * $("#unitsepc").val();
			$("#cashepc").html("&euro;"+comma(cashflowEP.toFixed(2)));
		}else{
			cashflowEP = rateEP * $("#unitsepc").val();
			$("#cashepc").html("&euro;"+comma(cashflowEP.toFixed(2)));
		}
	}
	
	//currency options
		//strike change
	if(strikeE != $("#strikee").val()){
		checkNumber("#strikee");
		strikeE = $("#strikee").val();
	}
	if(strikeP != $("#strikep").val()){
		checkNumber("#strikep");
		strikeP = $("#strikep").val();
	}
		//units change
	if(unitsE != $("#unitse").val()){
		checkNumber("#unitse");
		unitsE = $("#unitse").val();
	}
	if(unitsP != $("#unitsp").val()){
		checkNumber("#unitsp");
		unitsP = $("#unitsp").val();
	}
	//calculate price for currency and cashflow
	var d1E = (Math.log(deuro[(round * 400)-1]/strikeE) + (intd[(round * 400)-1]/100 - inte[(round * 400)-1]/100 + (.09/2)))/.3;
	var d2E = d1E - .3;
	var d1P = (Math.log(dpeso[(round * 400)-1]/strikeP) + (intd[(round * 400)-1]/100 - intp[(round * 400)-1]/100 + (.16/2)))/.4;
	var d2P = d1P - .4;
	if($("#typee").val() == "call"){
		priceE = (deuro[(round * 400)-1] * Math.exp(-inte[(round * 400)-1]/100) * normDist.cdf(d1E)) - (strikeE * Math.exp(-intd[(round * 400)-1]/100) * normDist.cdf(d2E));
	}else{
		priceE = (strikeE * Math.exp(-intd[(round * 400)-1]/100) * normDist.cdf(-1 * d2E)) - (deuro[(round * 400)-1] * Math.exp(-inte[(round * 400)-1]/100) * normDist.cdf(-1 * d1E));
	}
	if($("#typep").val() == "call"){
		priceP = (dpeso[(round * 400)-1] * Math.exp(-intp[(round * 400)-1]/100) * normDist.cdf(d1P)) - (strikeP * Math.exp(-intd[(round * 400)-1]/100) * normDist.cdf(d2P));
	}else{
		priceP = (strikeP * Math.exp(-intd[(round * 400)-1]/100) * normDist.cdf(-1 * d2P)) - (dpeso[(round * 400)-1] * Math.exp(-intp[(round * 400)-1]/100) * normDist.cdf(-1 * d1P));
	}
	$("#pricee").html("$" + priceE.toFixed(4));
	$("#pricep").html("$" + priceP.toFixed(4));
	cashflowE = -1 * priceE * unitsE;
	cashflowP = -1 * priceP * unitsP;
	$("#cashe").html("$" + comma(cashflowE.toFixed(2)));
	$("#cashp").html("$" + comma(cashflowP.toFixed(2)));
	
	
	//final calculations
	calcEnd();
	$("#fundDf").html(comma(endD.toFixed(2)));
	$("#fundEf").html(comma(endE.toFixed(2)));
	$("#fundPf").html(comma(endP.toFixed(2)));
	$("#fundLf").html(comma(endL.toFixed(2)));
}
function calcEnd(){
	endD = +(dollars + cashflowE + cashflowP + projSales + cashflowDE + cashflowDP - intdue - $("#d2p").val() - $("#d2e").val() + $("#e2d").val()/deuro[(round * 400)-1] + $("#p2d").val()/dpeso[(round * 400)-1]).toFixed(2);
	endE = +(euros - (cashflowDE/Number(rateDE)) + cashflowEP - matCosts - $("#e2p").val() - $("#e2d").val() + $("#d2e").val()*deuro[(round * 400)-1] + $("#p2e").val()/epeso[(round * 400)-1]).toFixed(2);
	endP = +(pesos - (cashflowDP/Number(rateDP)) - (cashflowEP/Number(rateEP)) - prodCosts - $("#p2e").val() - $("#p2d").val() + $("#e2p").val()*epeso[(round * 400)-1] + $("#d2p").val()*dpeso[(round * 400)-1]).toFixed(2);
}
var round = 1;
var inventory = 200;
var price;
var production = 500;
var d2pchange;
var d2echange;
var e2pchange;
var e2dchange;
var p2echange;
var p2dchange;
var loanAMT = 0;
var loanType = "take";
var intdue = 0;
var prodCosts;
var matCosts;
var endD;
var endE;
var endP;
var endL;
var rateDE;
var rateDP;
var rateEP;
var cashflowDE;
var cashflowDP;
var cashflowEP;
var unitsDE;
var unitsDP;
var unitsEP;
var typeDE;
var typeDP;
var typeEP;
var strikeE;
var strikeP;
var priceE;
var priceP;
var unitsE;
var unitsP;
var cashflowE;
var cashflowP;
var projSales;
function initRound(){
	if(round == 4){
		$("#decStuff").html("<center><h2>Simulation Over</h2></center>");
	}else{
		$("#RoundNumFinancial").html("Round " + round);
		$("#intrd1").hide();
		$("#intrd2").hide();
		$("#intrd3").hide();
		$("#intrd4").hide();
		$("#exrd1").hide();
		$("#exrd2").hide();
		$("#exrd3").hide();
		$("#exrd4").hide();
		$("#exrd" + round).show();
		$("#intrd" + round).show();
		$("#exchangeDE").html(deuro[(round * 400)-1].toFixed(3));
		$("#exchangeDP").html(dpeso[(round * 400)-1].toFixed(3));
		$("#exchangeEP").html(epeso[(round * 400)-1].toFixed(3));
		$("#intRateD").html(intd[(round * 400)-1].toFixed(3));
		$("#intRateE").html(inte[(round * 400)-1].toFixed(3));
		$("#intRateP").html(intp[(round * 400)-1].toFixed(3));
		$("#roundNumDec").html("Round " + round);
		$("#fundD").html("$"+comma(dollars.toFixed(2)));
		$("#fundE").html("&euro;"+comma(euros.toFixed(2)));
		$("#fundP").html("&#8369;"+comma(pesos.toFixed(2)));
		$("#fundL").html("$"+comma(loans.toFixed(2)));
		$("#inv").html(comma(inventory));
		$("#production").val(production);
		price = (((25000+(1000*production))/dpeso[(round * 400)-1] + (100*production)/deuro[(round * 400)-1]) / production)/.7;
		$("#price").html("$" + comma(price.toFixed(2)));
		prodCosts = (25000+(1000*production));
		matCosts = 100*production;
		$("#prodCosts").html("&#8369;" + comma(prodCosts.toFixed(2)));
		$("#matCosts").html("&euro;" + comma(matCosts.toFixed(2)));
		
		$("#d2p").val(+(((prodCosts-pesos+1)/dpeso[(round * 400)-1]).toFixed(2)));
		$("#d2e").val(+(((matCosts-euros+1)/deuro[(round * 400)-1]).toFixed(2)));
		$("#e2d").val(0);
		$("#e2p").val(0);
		$("#p2e").val(0);
		$("#p2d").val(0);
		d2pchange = $("#d2p").val();
		d2echange = $("#d2e").val();
		e2pchange = $("#e2p").val();
		e2dchange = $("#e2d").val();
		p2echange = $("#p2e").val();
		p2dchange = $("#p2d").val();
		loanAMT = 0;
		$("#amountLoan").val(0);
		loanType = "take";
		$("#actionLoan").val("take");

		$("#actiondec").val("buy");
		$("#actiondpc").val("buy");
		$("#actionepc").val("buy");
		rateDE = (1/+(deuro[(round * 400)-1] * (1+intd[(round * 400)-1]/100)/(1+inte[(round * 400)-1]/100))).toFixed(3);
		rateDP = (1/+(dpeso[(round * 400)-1] * (1+intd[(round * 400)-1]/100)/(1+intp[(round * 400)-1]/100))).toFixed(3);
		rateEP = (1/+(epeso[(round * 400)-1] * (1+inte[(round * 400)-1]/100)/(1+intp[(round * 400)-1]/100))).toFixed(3);
		$("#ratedec").html("$"+rateDE+"/&euro;");
		$("#ratedpc").html("$"+rateDP+"/&#8369;");
		$("#rateepc").html("&euro;"+rateEP+"/&#8369;");
		$("#unitsdec").val(0);
		$("#unitsdpc").val(0);
		$("#unitsepc").val(0);
		unitsDE = 0;
		unitsDP = 0;
		unitsEP = 0;
		typeDE = "buy";
		typeDP = "buy";
		typeEP = "buy";
		cashflowDE = rateDE * $("#unitsdec").val();
		cashflowDP = rateDP * $("#unitsdpc").val();	
		cashflowEP = rateEP * $("#unitsepc").val();
		$("#cashdec").html("$"+cashflowDE);
		$("#cashdpc").html("$"+cashflowDP);
		$("#cashepc").html("$"+cashflowEP);
		
		//initialize currency with call calculations
		strikeE = deuro[(round * 400)-1];
		strikeP = dpeso[(round * 400)-1];
		$("#strikee").val(+(strikeE.toFixed(3)));
		$("#strikep").val(+(strikeP.toFixed(3)));
		$("#typee").val("call");
		$("#typep").val("call");
		var d1E = (Math.log(deuro[(round * 400)-1]/strikeE) + (intd[(round * 400)-1]/100 - inte[(round * 400)-1]/100 + (.09/2)))/.3;
		var d2E = d1E - .3;
		var d1P = (Math.log(dpeso[(round * 400)-1]/strikeP) + (intd[(round * 400)-1]/100 - intp[(round * 400)-1]/100 + (.16/2)))/.4;
		var d2P = d1P - .4;
		priceE = (deuro[(round * 400)-1] * Math.exp(-inte[(round * 400)-1]/100) * normDist.cdf(d1E)) - (strikeE * Math.exp(-intd[(round * 400)-1]/100) * normDist.cdf(d2E));
		priceP = (dpeso[(round * 400)-1] * Math.exp(-intp[(round * 400)-1]/100) * normDist.cdf(d1P)) - (strikeP * Math.exp(-intd[(round * 400)-1]/100) * normDist.cdf(d2P));
		$("#pricee").html("$" + priceE.toFixed(4));
		$("#pricep").html("$" + priceP.toFixed(4));
		unitsE = 0;
		unitsP = 0;
		$("#unitse").val(0);
		$("#unitsp").val(0);
		cashflowE = -1 * priceE * unitsE;
		cashflowP = -1 * priceP * unitsP;
		$("#cashe").html("$" + comma(cashflowE.toFixed(2)));
		$("#cashp").html("$" + comma(cashflowP.toFixed(2)));
		
		
		endL = loans;
		intdue = endL * intd[(round * 400)-1]/100;
		$("#intdue").html("$"+comma(intdue.toFixed(2)));
		calcEnd();
		$("#fundDf").html(comma(endD.toFixed(2)));
		$("#fundEf").html(comma(endE.toFixed(2)));
		$("#fundPf").html(comma(endP.toFixed(2)));
		$("#fundLf").html(comma(endL.toFixed(2)));
		projSales = (((((-5/12) * price) + 175)/100)*production)* price;
		$("#projSales").html("$" + comma(projSales.toFixed(2)));
		changeDec();
	}
}
function checkNumber(html){
	if(Number($(html).val()) == "NaN"){
		$(html).val(1);
	}
	if($(html).val()<0){
		$(html).val(0);
	}
}

function comma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}