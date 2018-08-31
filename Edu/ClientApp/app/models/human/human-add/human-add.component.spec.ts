import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { HumanAddComponent } from './human-add.component';

import { HumanService } from './../../../services/human/human.service';

describe('HumanAddComponent', () => {
    let component: HumanAddComponent;
    let fixture: ComponentFixture<HumanAddComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [HumanAddComponent],
            providers: [HumanService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HumanAddComponent);
        component = fixture.componentInstance;
        component.human = {
            name: "ionel",
            dateOfBirth: "12-01-1099",
            id: 12
        }

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});