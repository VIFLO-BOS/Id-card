/** @format */

"use strict";
// the following is to get all the neccessary element required to generate the Qr code

const submitBtn = document.getElementById("submit");
const download = document.getElementById("download");
//to get the image url
let imgQr = document.getElementById("qrCode");
// to get the user input
const email = document.getElementById("email");
const password = document.getElementById("password");

// to create temp storage
let storage;

// to get user input
function getData() {
	submitBtn.addEventListener("click", (e) => {
		e.preventDefault();

		storage = `Email: ${email.value}, Password: ${password.value} `;

		console.log(storage);
		generate(storage);

		email.value = "";
		password.value = "";
	});
}

getData();

function generate(data) {
	imgQr.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${data} `;
}

// this is to download the id card as an image
