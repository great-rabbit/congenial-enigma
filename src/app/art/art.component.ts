import { Component } from '@angular/core';

@Component({
	selector: 'app-art',
	templateUrl: './art.component.html',
	styleUrls: ['./art.component.css']
})
export class ArtComponent {
	cards = [
		{ title: 'Card 1', cols: 1, rows: 1, src: 'https://s3.zerochan.net/Koe.no.Katachi.240.2163365.jpg' },
		{ title: 'Card 2', cols: 1, rows: 2, src: 'https://s3.zerochan.net/Kimi.no.Suizou.wo.Tabetai.240.2315928.jpg' },
		{ title: 'Card 3', cols: 1, rows: 1, src: 'https://s3.zerochan.net/Kochou.Shinobu.240.2976682.jpg' },
	];
}
