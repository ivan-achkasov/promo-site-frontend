import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  backendFrameActive: boolean = true
  frontendFrameActive: boolean = false
  toolsFrameActive: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

   cardClicked(type: string): void {
      if(type == "backend") {
        this.backendFrameActive = true
        this.frontendFrameActive = false
        this.toolsFrameActive = false
      } else if (type == "frontend") {
        this.backendFrameActive = false
        this.frontendFrameActive = true
        this.toolsFrameActive = false
      } else if (type == "tools") {
        this.backendFrameActive = false
        this.frontendFrameActive = false
        this.toolsFrameActive = true
      }
   }

}
