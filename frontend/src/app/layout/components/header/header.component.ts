import { AuthenticationService } from './../../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/_models';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    private currentUserSubject: BehaviorSubject<User>;
    public currentLoginUser: Observable<User>;
    public pushRightClass: string;
    currentUser:any;

    constructor(
        private translate: TranslateService,
         public router: Router,
        private authenticationService:AuthenticationService
        ) {
            this.currentUserSubject = new BehaviorSubject<User>(
                JSON.parse(localStorage.getItem("currentUser"))
              );

              
    this.currentLoginUser = this.currentUserSubject.asObservable();
 


        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
     
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    //Routing to the Profile Component
    profilePageLoad() {
        const UserId = this.currentUserSubject.value._id;
     
         this.router.navigate(['/profile',UserId]);
    }
 
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
    changeLang(language: string) {
        this.translate.use(language);
    }
}
