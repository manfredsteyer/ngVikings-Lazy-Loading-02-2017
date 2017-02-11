import { NgModule, ModuleWithProviders } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
import { SimpleAuthService } from '../shared/auth/simple-auth.service';
/**
 * Created by Manfred on 11.02.2017.
 */

@NgModule({
    imports: [],
    providers: [
    ]
})
export class AuthModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AuthModule,
            providers: [
                { provide: AuthService, useClass: SimpleAuthService }
            ]
        }
    }
}