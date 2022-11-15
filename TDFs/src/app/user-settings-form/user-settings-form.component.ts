import { Component, MissingTranslationStrategy, OnInit } from '@angular/core';
import { UserSettings } from '../models/user-settings-model';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: "Milton",
    emailOffers: true,
    interfaceStyle: "dark",
    subscriptionType: "Annual",
    notes: "Notes go here"
  }

  userSettings: UserSettings = {...this.originalUserSettings}

  constructor() { }

  ngOnInit(): void {
  }

}
