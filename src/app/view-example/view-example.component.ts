import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-view-example',
  templateUrl: './view-example.component.html',
  styleUrls: ['./view-example.component.scss'],
})
export class ViewExampleComponent implements OnInit, AfterViewInit {
  @ViewChild('htmlElement') htmlElement: TemplateRef<any> | undefined;
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.htmlElement);
  }
}
