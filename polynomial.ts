// Class for polynomials with generic coefficient type
class Polynomial {
	coeffs : any[];
	degree : number;


	constructor(coeffs : any[]){
		this.coeffs = coeffs;
		// always assumes the highest coefficient in the list is none zero
		this.degree = coeffs.length-1;
	}

	// evaluation using horner's scheme
	at(x : number){
		a = this.coeffs;
		n = this.degree;
		// b_n := a_n
		b = [a[n]];
		for(var i=1; i<=n; i++){
			// b[i] := a[i]+b[i+1]*x
			b.push(a[n-i]+b[i-1]*x)
		}
		return b[n];
	}
}