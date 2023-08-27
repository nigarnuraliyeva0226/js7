var th = ['', 'min', 'milyon', 'milyard', 'trilyon'];
	var dg = ['sıfır', 'bir', 'iki', 'üç', 'dörd', 'beş', 'altı', 'yeddi', 'səkkiz', 'doqquz'];
	var tn = ['on', 'on bir', 'on iki', 'on üç', 'on dörd', 'on beş', 'on altı', 'on yeddi', 'on səkkiz', 'on doqquz'];
	var tw = ['iyirmi', 'otuz', 'qırx', 'əlli', 'altımış', 'yetmiş', 'səksən', 'doxsan'];

	function numberToText(s) {
		s = s.toString();
		s = s.replace(/[\, ]/g, '');
		if (s != parseFloat(s)) return 'ədəd deyil!';
		var x = s.indexOf('.');
		if (x == -1)
			x = s.length;
		if (x > 15)
			return 'rəqəm sayı 15-dən çoxdur!';
		var n = s.split('');
		var str = '';
		var sk = 0;
		for (var i = 0; i < x; i++) {
			if ((x - i) % 3 == 2) {
				if (n[i] == '1') {
					str += tn[Number(n[i + 1])] + ' ';
					i++;
					sk = 1;
				} else if (n[i] != 0) {
					str += tw[n[i] - 2] + ' ';
					sk = 1;
				}
			} else if (n[i] != 0) {
				str += dg[n[i]] + ' ';
				if ((x - i) % 3 == 0) str += 'yüz ';
				sk = 1;
			}
			if ((x - i) % 3 == 1) {
				if (sk)
					str += th[(x - i - 1) / 3] + ' ';
				sk = 0;
			}
		}

		if (x != s.length) {
			var y = s.length;
			str += 'nöqtə ';
			for (var i = x + 1; i < y; i++)
				str += dg[n[i]] + ' ';
		}
		return str.replace(/\s+/g, ' ');
	}

	let number = prompt("Zəhmət olmasa ədəd daxil edin");

	if (number != null) {
		console.log(numberToText(number));
	}