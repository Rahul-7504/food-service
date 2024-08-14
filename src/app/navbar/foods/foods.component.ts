import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'; // Correct import

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'hi', 'mr']);
    translate.setDefaultLang('en');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
