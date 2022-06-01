import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  javaFrameworksSectionIsOpen: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  onJavaFrameworksToggleClick() {
    this.javaFrameworksSectionIsOpen = !this.javaFrameworksSectionIsOpen
  }

}
