import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

	//SessionStorage
	setComingFromLogin(login: string){
		sessionStorage.setItem("login", login);
	}

	setComingFromReg(reg: string){
		sessionStorage.setItem("reg", reg);
	}

	getComingFromLogin(){
		sessionStorage.getItem("login");
	}

	getComingFromReg(){
		sessionStorage.getItem("reg");
	}

	//localStorage

	setIdentityLocalStorage(identity: string){
		localStorage.setItem("identity", identity);
	}

	setCoursesLocalStorage(courses: string) {
		localStorage.setItem("courses", courses);
	}

	setGradesLocalStorage() {
		let s = [1,2,3,4,5];
		localStorage.setItem("grades", s.toString());
	}

	getIdentityLocalStorage(){
		return localStorage.getItem("identity");
	}

	removeIdentityLocalStorage(){
		localStorage.removeItem("identity");
	}
}