import { LayoutModule } from '@angular/cdk/layout';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { Art2Component } from './art2.component';

describe('Art2Component', () => {
	let component: Art2Component;
	let fixture: ComponentFixture<Art2Component>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [Art2Component],
			imports: [
				NoopAnimationsModule,
				LayoutModule,
				MatButtonModule,
				MatIconModule,
				MatListModule,
				MatSidenavModule,
				MatToolbarModule,
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(Art2Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should compile', () => {
		expect(component).toBeTruthy();
	});
});
