import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProfileComponent,

    HeaderComponent,
    IntroComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    FooterComponent,
  ],
  providers: []
})
export class ProfileModule { }
