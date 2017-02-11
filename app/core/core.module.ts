import { NgModule } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
import { SimpleAuthService } from '../shared/auth/simple-auth.service';
/**
 * Created by Manfred on 11.02.2017.
 */

@NgModule({
    imports: [],
    providers: [
        { provide: AuthService, useClass: SimpleAuthService }
    ]
})
export class CoreModule {

}