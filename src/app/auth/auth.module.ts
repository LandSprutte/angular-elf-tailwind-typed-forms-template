import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AuthApiService } from './services/api/auth-api.service';
import { AuthMapperService } from './services/mappers/auth-mapper.service';

@NgModule({
  declarations: [
    LoginPageComponent,
    ProfilePageComponent,
    LoginFormComponent,
    ProfileFormComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [AuthGuard, AuthApiService, AuthMapperService],
})
export class AuthModule {}
