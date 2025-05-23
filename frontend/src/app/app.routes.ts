import { Routes } from '@angular/router';
// import { ManagerComponent } from './../page/manager/manager.component';
import { HomeComponent } from './page/user/home/home.component';
import { AccommodationComponent } from './page/manager/accommodation/accommodation.component';
import { AccommodationDetailComponent } from './page/user/accommodation-detail/accommodation-detail.component';
import { AccommodationDetailComponent as ManagerAccommodationDetailComponent } from './page/manager/accommodation-detail/accommodation-detail.component';

import { LoginComponent } from './page/manager/login/login.component';
import { RoleGuard } from './shared/guards/role.guard';
import { MediaLibraryComponent } from './page/manager/media-library/media-library.component';
import { SearchPageComponent } from './page/user/search-page/search-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    // {
    //     path: 'manager',
    //     component: ManagerComponent,
    //     canActivate: [RoleGuard],
    //     data: { expectedRole: 'manager' },
    // },
    {
        path: 'manager/login',
        component: LoginComponent,
    },
    {
        path: 'manager/accommodation',
        component: AccommodationComponent,
        canActivate: [RoleGuard],
        data: { expectedRole: 'manager' },
    },
    {
        path: 'manager/accommodation/:id/details',
        component: ManagerAccommodationDetailComponent,
        canActivate: [RoleGuard],
        data: { expectedRole: 'manager' },
    },
    {
        path: 'manager/accommodation/:id/images',
        component: MediaLibraryComponent,
        canActivate: [RoleGuard],
        data: { expectedRole: 'manager' },
    },
    {
        path: 'manager/accommodation/detail/:id/images',
        component: MediaLibraryComponent,
        canActivate: [RoleGuard],
        data: { expectedRole: 'manager' },
    },
    {
        path: 'search/accommodation/detail/:name',
        component: AccommodationDetailComponent,
    },
    {
        path: 'search/:city',
        component: SearchPageComponent,
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];
