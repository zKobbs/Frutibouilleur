var colorSelectFace = document.getElementById('colorSelectFace');
var selectHairColor = document.getElementById('selectHairColor');
var selectMouth = document.getElementById('selectMouth');
var selectEyes = document.getElementById('selectEyes');
var selectHairCut = document.getElementById('selectHairCut');
var pathAssetsImg = "./assets/images/elements/";
var chosenFaceColor;
var chosenHairColor;
var chosenHaircut;
var colors = [
	['Blanc', '#FFFFFF'],
	['Pâle 1', '#FFE7CE'],
	['Pâle 2', '#FCDCD8'],
	['Pâle 3', '#FBC8BE'],
	['Pâle 4', '#FAB4A4'],
	['Marron clair 1', '#E69B50'],
	['Marron clair 2', '#D77D3C'],
	['Marron clair 3', '#C86428'],
	['Marron 1', '#A0642D'],
	['Marron 2', '#8A5725'],
	['Marron 3', '#6C441E'],
	['Marron 4', '#4B3014'],
	['Beige 1', '#E6D796'],
	['Beige 2', '#DCC873'],
	['Beige 3', '#D2B950'],
	['Vert 1', '#B4E67D'],
	['Vert 2', '#96D737'],
	['Vert 3', '#82C820'],
	['Vert 4', '#78B919'],
	['Vert 5', '#6EAA14'],
	['Rouge 1', '#E67D7D'],
	['Rouge 2', '#DC5555'],
	['Rouge 3', '#D23737'],
	['Rouge 4', '#BE1E1E'],
	['Bleu 1', '#6EA0E1'],
	['Bleu 2', '#5082D2'],
	['Bleu 3', '#3269AF'],
	['Violet 1', '#9664C8'],
	['Violet 2', '#793DB6'],
	['Violet 3', '#5F3796'],
	['Jaune 1', '#FAE13C'],
	['Jaune 2', '#E6C80A'],
	['Jaune 3', '#D7B709'],
	['Orange 1', '#FAA032'],
	['Orange 2', '#E6780A'],
	['Orange 3', '#C86409'],
	['Rose 1', '#FFC8D9'],
	['Rose 2', '#FEABC5'],
	['Rose 3', '#FD8CB7'],
	['Gris 1', '#ADB7C5'],
	['Gris 2', '#96A0B4'],
	['Gris 3', '#6E7D96'],
	['Sable 1', '#CDC8AC'],
	['Sable 2', '#B9B18E'],
	['Sable 3', '#A29868'],
	['Wasabi 1', '#A9CAA8'],
	['Wasabi 2', '#8FB98E'],
	['Wasabi 3', '#71A770'],
	['Marin 1', '#93B3D2'],
	['Marin 2', '#759EC6'],
	['Marin 3', '#608EBD'],
	['Cyan 1', '#37BEB4'],
	['Cyan 2', '#329B9B'],
];
var hairs = [
	['Mecapo', 'ch_mecapo', 'transparent.png'],
	['Gomhi', 'ch_gomhi', 'ch_gomhi_c.svg'],
	['Norho', 'ch_norho', 'transparent.png'],
	['Sylern', 'ch_sylern', 'transparent.png'],
	['Hanir', 'cf_hanir', 'cf_hanir_c.svg'],
	['Lusnar', 'cf_lusnar', 'cf_lusnar_c.svg'],
	['Losho', 'cf_losho', 'cf_losho_c.svg'],
	['Lysurn', 'cf_lysurn', 'cf_lysurn_c.svg'],
	['Colnor', 'ch_colnor', 'transparent.png'],
	['Merlag', 'ch_merlag', 'transparent.png'],
	['Leglys', 'cf_leglys', 'cf_leglys_c.svg'],
	['Selho', 'ch_selho', 'ch_selho_c.svg'],
	['Barsil', 'ch_barsil', 'transparent.png'],
	['Huha', 'cf_huha', 'transparent.png'],
	['Ernleg', 'cf_ernleg', 'cf_ernleg_c.svg'],
	['Bersul', 'ch_bersul', 'transparent.png'],
	['Culbur', 'ch_culbur', 'ch_culbur_c.svg'],
	['Solnar', 'ch_solnar', 'transparent.png'],
	['Nirlem', 'cf_nirlem', 'cf_nirlem_c.svg'],
	['Sellug', 'ch_sellug', 'ch_sellug_c.svg'],
	['Hiko', 'ch_hiko', 'transparent.png'],
];
var mouths = [
	['Petite', 'b_petite'],
	['Moyenne', 'b_moyenne'],
	['Grande', 'b_grande'],
	['Bec', 'b_bec'],
	['Machoire', 'b_machoire']
]
var eyes = [
	['Manga homme marron (avec reflets)', 'yh_manga_marron_r'],
	['Manga homme bleu (avec reflets)', 'yh_manga_bleu_r'],
	['Manga homme rouge (avec reflets)', 'yh_manga_rouge_r'],
	['Manga homme violet (avec reflets)', 'yh_manga_violet_r'],
	['Manga homme noir', 'yh_manga_noir'],
	['Manga homme bleu', 'yh_manga_bleu_clair'],
	['Manga homme cyan', 'yh_manga_cyan'],
	['Manga homme violet', 'yh_manga_violet'],
	['Manga homme rouge', 'yh_manga_rouge'],
	['Manga homme vert', 'yh_manga_vert'],
	['Amande marron (avec reflets)', 'y_amande_marron_r'],
	['Amande rouge (avec reflets)', 'y_amande_rouge_r'],
	['Amande violet (avec reflets)', 'y_amande_violet_r'],
	['Amande cyan', 'y_amande_cyan'],
	['Amande violet', 'y_amande_violet'],
	['Amande noir', 'y_amande_noir'],
	['Amande orange', 'y_amande_orange'],
	['Amande rouge', 'y_amande_rouge'],
	['Amande vert', 'y_amande_vert'],
	['Egyptien bleu (avec reflets)', 'y_egyptien_bleu_r'],
	['Egyptien marron (avec reflets)', 'y_egyptien_marron_r'],
	['Egyptien rouge (avec reflets)', 'y_egyptien_rouge_r'],
	['Egyptien violet (avec reflets)', 'y_egyptien_violet_r'],
	['Manga femme bleu (avec reflets)', 'yf_manga_bleu_r'],
	['Manga femme marron (avec reflets)', 'yf_manga_marron_r'],
	['Manga femme rouge (avec reflets)', 'yf_manga_rouge_r'],
	['Manga femme violet (avec reflets)', 'yf_manga_violet_r'],
	['Manga femme bleu', 'yf_manga_bleu'],
	['Manga femme cyan', 'yf_manga_cyan'],
	['Manga femme mauve', 'yf_manga_mauve'],
	['Manga femme orange', 'yf_manga_orange'],
	['Manga femme rouge', 'yf_manga_rouge'],
	['Gros yeux homme bleu (avec reflets)', 'yh_gros_bleu_r'],
	['Gros yeux homme marron (avec reflets)', 'yh_gros_marron_r'],
	['Gros yeux homme rouge (avec reflets)', 'yh_gros_rouge_r'],
	['Gros yeux homme violet (avec reflets)', 'yh_gros_violet_r'],
	['Gros yeux homme bleu', 'yh_gros_bleu'],
	['Gros yeux homme cyan', 'yh_gros_cyan'],
	['Gros yeux homme mauve', 'yh_gros_mauve'],
	['Gros yeux homme noisette', 'yh_gros_noisette'],
	['Gros yeux homme orange', 'yh_gros_orange'],
	['Gros yeux homme rouge', 'yh_gros_rouge'],
	['Gros yeux homme vert', 'yh_gros_vert'],
	['Fatigué homme bleu (avec reflets)', 'yh_fatigue_bleu_r'],
	['Fatigué homme  marron (avec reflets)', 'yh_fatigue_marron_r'],
	['Fatigué homme  rouge (avec reflets)', 'yh_fatigue_rouge_r'],
	['Fatigué homme orange cerclé', 'yh_fatigue_orange_c'],
	['Fatigué homme bleu cerclé', 'yh_fatigue_bleu_c'],
	['Fatigué homme bleu', 'yh_fatigue_bleu'],
	['Fatigué homme cyan', 'yh_fatigue_cyan'],
	['Fatigué homme marron', 'yh_fatigue_marron'],
	['Fatigué homme mauve', 'yh_fatigue_mauve'],
	['Fatigué homme orange', 'yh_fatigue_orange'],
	['Fatigué homme rouge', 'yh_fatigue_rouge'],
	['Fatigué homme vert', 'yh_fatigue_vert'],
	['Hiko', 'yh_hiko'],
];
for(var i = 0; i < colors.length; i++) {
	colorSelectFace.add(new Option(colors[i][0], colors[i][1]));
}
for(var i = 0; i < colors.length; i++) {
	selectHairColor.add(new Option(colors[i][0], colors[i][1]));
}
for(var i = 0; i < mouths.length; i++) {
	selectMouth.add(new Option(mouths[i][0], mouths[i][1]));
}
for(var i = 0; i < eyes.length; i++) {
	selectEyes.add(new Option(eyes[i][0], eyes[i][1]));
}
for(var i = 0; i < hairs.length; i++) {
	selectHairCut.add(new Option(hairs[i][0], hairs[i][1]));
}
selectHairColor.addEventListener("change", function() {
	var chosenHairColor = document.getElementById('selectHairColor').value;
	for(var i = 0; i < colors.length; i++) {
		if(chosenHairColor === colors[i][1]) {
			document.getElementById('hairColor').setAttribute('values', convertHexTofeColorMatrix(colors[i][1]));
		}
	}
});
colorSelectFace.addEventListener("change", function() {
	var chosenFaceColor = document.getElementById('colorSelectFace').value;
	for(var i = 0; i < colors.length; i++) {
		if(chosenFaceColor === colors[i][1]) {
			document.getElementById('faceColor').setAttribute('values', convertHexTofeColorMatrix(colors[i][1]));
		}
	}
});
selectMouth.addEventListener("change", function() {
	var chosenMouth = document.getElementById('selectMouth').value;
	for(var i = 0; i < mouths.length; i++) {
		if(chosenMouth === mouths[i][1]) {
			document.getElementById('imgMouth').setAttribute('href', pathAssetsImg + mouths[i][1] + ".svg");
		}
	}
});
selectEyes.addEventListener("change", function() {
	var chosenEyes = document.getElementById('selectEyes').value;
	for(var i = 0; i < eyes.length; i++) {
		if(chosenEyes === eyes[i][1]) {
			document.getElementById('imgEyes').setAttribute('href', pathAssetsImg + eyes[i][1] + ".svg");
		}
	}
});
selectHairCut.addEventListener("change", function() {
	var chosenHairCut = document.getElementById('selectHairCut').value;
	for(var i = 0; i < hairs.length; i++) {
		if(chosenHairCut === hairs[i][1]) {
			document.getElementById('imgHairCut').setAttribute('href', pathAssetsImg + hairs[i][1] + ".svg");
			document.getElementById('imgHairCutComplement').setAttribute('href', pathAssetsImg + hairs[i][2]);
		}
	}
});

function convertHexTofeColorMatrix(hex) {
	var newHex = hex.replace(/#/g, '');
	if(newHex.length != 6) {
		return false;
	}
	var aRgbHex = newHex.match(/.{1,2}/g);
	var aRgb = [
		parseInt(aRgbHex[0], 16),
		parseInt(aRgbHex[1], 16),
		parseInt(aRgbHex[2], 16)
	];
	var aRgb = [
		Math.round(aRgb[0] / 255 * 100) / 100,
		Math.round(aRgb[1] / 255 * 100) / 100,
		Math.round(aRgb[2] / 255 * 100) / 100,
	];
	var feColorMatrix = aRgb[0] + " 0 0 0 0 0 " + aRgb[1] + " 0 0 0 0 0 " + aRgb[2] + " 0 0 0 0 0 1 0";
	return feColorMatrix;
}
