module Polynomial{
	// Class for polynomials with generic coefficient type T
	export class Polynomial<T> {
		private _coeffs : T[];
		private _degree : number;

		// constructor gets an array of coefficients
		constructor(coeffs : T[]){
			this._coeffs = coeffs;
			// always assumes the highest coefficient in the list is none zero
			this._degree = coeffs.length-1;
		}

		// getter for the coefficients
		get coeffs() : T[] {
			return this._coeffs;
		}

		// getter for the coefficients
		get degree() : number {
			return this._degree;
		}
		// evaluation using horner's scheme
		at(x : number){
			a = this._coeffs;
			n = this._degree;
			// b_n := a_n
			b = [a[n]];
			for(var i=1; i<=n; i++){
				// b[i] := a[i]+b[i+1]*x
				b.push(a[n-i]+b[i-1]*x)
			}
			return b[n];
		}
	}

	// function to add two polynomials
	export function add<T>(p1 : Polynomial<T>, p2 : Polynomial<T>) : Polynomial<T> {
		// the degree of the resulting polynomial
		var deg = Math.max(p1.degree, p2.degree);
		// list of coefficients for the resulting polynomial
		var coeffs = []; 
		for(var i=0; i<=deg; i++){
			// add coefficients of both polynomials to get the coefficient for the sum
			coeffs.push(p1.coeffs[i]+p2.coeffs[i]);
		}
		// return resulting polynomial
		return new Polynomial(coeffs);
	}
}