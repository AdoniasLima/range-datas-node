

var rangeMes = function(mesInicio, anoInicio, mesFim, anoFim){

	resultado = [];
	anosIntervalo = [];

	if (anoInicio > anoFim) {

		return "Data invalida";

	} else if(anoInicio == anoFim && mesInicio > mesFim){

		return "Data invalida";

	} else {

		if (anoInicio == anoFim){
			for(mesInicio; mesInicio <= mesFim; mesInicio++){
				resultado.push({"Mes: " : mesInicio, "Ano: " : anoInicio});
			}
		} else if (anoFim > anoInicio) {

			for(mesInicio; mesInicio <= 12; mesInicio++){
				resultado.push({"Mes: " : mesInicio, "Ano: " : anoInicio});
			}

			if ((anoFim - anoInicio) > 1) {
				for(i = anoInicio + 1; i <= (anoFim - 1); i++){
					anosIntervalo.push(i);
				}
			}

			for(i = 0; i < anosIntervalo.length; i++){
				for(mes = 1; mes <= 12; mes++){
					resultado.push({"Mes: " : mes, "Ano: " : anosIntervalo[i]});
				}
			}

			for(i = 1; i <= mesFim; i++){
				resultado.push({"Mes: " : i, "Ano: " : anoFim});
			}

		}

		return resultado;
		
	}

}

var rest = rangeMes(5,2019,5,2020);
console.log(rest);