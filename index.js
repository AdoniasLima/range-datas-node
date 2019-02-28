
/*
autor:Adonias
data: 2019/02/28
versão: 1.0
revisão: 0 
Parâmetros: mes e ano inicial e mes e ano final
Retorno: array()
 */
var rangeMes = function(mesInicio, anoInicio, mesFim, anoFim){
	// declaro variáveis 
	resultado = [];
	anosIntervalo = [];

	// validação de datas
	if (anoInicio > anoFim) {

		return "Data invalida";

	} else if(anoInicio == anoFim && mesInicio > mesFim){

		return "Data invalida";

	} else {
		//verifico se esta no mesmo período para montar a matriz
		if (anoInicio == anoFim){
			for(mesInicio; mesInicio <= mesFim; mesInicio++){
				resultado.push({"Mes: " : mesInicio, "Ano: " : anoInicio});
			}
		} 
		// verifico se exite mais de um ano para montar a matriz
		else if (anoFim > anoInicio) {
			// valida a quantidade de meses dentro no ano
			for(mesInicio; mesInicio <= 12; mesInicio++){
				resultado.push({"Mes: " : mesInicio, "Ano: " : anoInicio});
			}
			// valida o final do período, para montar o intervalo de anos
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